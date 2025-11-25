import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import { useAuthStore } from "../store/authStore";

interface SignInProps {
  setShowSignIn: (value: boolean) => void;
  setShowLogIn: (value: boolean) => void;
}

const SignIn = ({ setShowLogIn, setShowSignIn }: SignInProps) => {
  const setToken = useAuthStore((state) => state.setToken);
  const [errorUsername, setErrorUsername] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [errorConfirmPassword, setErrorConfirmPassword] =
    useState<boolean>(false);
  const [errorRgpd, setErrorRgpd] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean | null>(null);

  const sendForm = async () => {
    setIsError(false);
    setErrorUsername(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorConfirmPassword(false);
    setErrorRgpd(false);

    const form = document.querySelector("form") as HTMLFormElement;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      form.elements.namedItem("confirm-password") as HTMLInputElement
    ).value;
    const rgpd = (form.elements.namedItem("rgpd") as HTMLInputElement).checked;

    // Regex
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validations
    if (!usernameRegex.test(username)) {
      setErrorUsername(true);
      setIsError(true);
    }

    if (!emailRegex.test(email)) {
      setErrorEmail(true);
      setIsError(true);
    }

    if (!passwordRegex.test(password)) {
      setErrorPassword(true);
      setIsError(true);
    }

    if (password !== confirmPassword) {
      setErrorConfirmPassword(true);
      setIsError(true);
    }

    if (!rgpd) {
      setErrorRgpd(true);
      setIsError(true);
    }

    if (isError) return;

    try {
      const req = await fetch(`${config.apiUrl}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const res = await req.json();

      if (res.token) {
        setToken(res.token, true);
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    } catch (error) {
      console.error(error);
      setIsRegistered(false);
    }
  };

  return (
    <section id="sign-in">
      <h1>Créer un compte</h1>

      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendForm();
          }}
        >
          <div>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" id="username" name="username" required />
            {errorUsername && (
              <>
                <p>Le nom d'utilisateur doit :</p>
                <ul>
                  <li>Faire entre 3 et 20 caractères</li>
                  <li>
                    Ne contenir que des lettres, chiffres, underscores ou tirets
                  </li>
                </ul>
              </>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            {errorEmail && <p>Adresse mail invalide</p>}
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" required />
            {errorPassword && (
              <>
                <p>Le mot de passe doit :</p>
                <ul>
                  <li>Faire au moins 8 caractères</li>
                  <li>Contenir au moins une lettre majuscule</li>
                  <li>Contenir au moins une lettre minuscule</li>
                  <li>Contenir au moins un chiffre</li>
                  <li>Contenir au moins un caractère spécial (@$!%*?&)</li>
                </ul>
              </>
            )}
          </div>
          <div>
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
            {errorConfirmPassword && (
              <p>Les deux mots de passe doivent être identiques</p>
            )}
          </div>
          <div className="check">
            <input type="checkbox" name="rgpd" id="rgpd" required />
            <label htmlFor="rgpd">
              J’accepte le traitement de mes données personnelles conformément à
              la Politique de confidentialité et aux finalités indiquées{" "}
              <Link to={"/profile/legals/rgpd"}>ici</Link>.
            </label>
            {errorRgpd && (
              <p>Vous devez accepter la politique de confidentialité</p>
            )}
          </div>
          <button type="submit" className="button">
            S'inscrire
          </button>
        </form>

        {isRegistered != null && (
          <p
            className={`validation-message ${
              isRegistered == true ? "success" : "failed"
            }`}
          >
            {isRegistered == true
              ? "Inscription réussie ! Bienvenue !"
              : "Une erreur est survenue lors de l'inscription. Réessaie plus tard !"}
          </p>
        )}

        <p>
          Tu as déjà un compte ?{" "}
          <span
            onClick={() => {
              setShowLogIn(true);
              setShowSignIn(false);
            }}
          >
            Connecte toi !
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
