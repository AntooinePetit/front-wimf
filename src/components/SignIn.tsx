import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../services/api";
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

  document.title = "Créer un compte";

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsError(false);
    setErrorUsername(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorConfirmPassword(false);
    setErrorRgpd(false);

    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const confirmPassword = (form.elements.namedItem("confirm-password") as HTMLInputElement).value;
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
      const res = await register(username, email, password);
      if (res.token) {
        setToken(res.token, true);
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.message.includes('409')) {
        setErrorEmail(true);
        setIsError(true);
      } else {
        setIsRegistered(false);
      }
    }
  };

  return (
    <section id="sign-in">
      <h1>Créer un compte</h1>

      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendForm(e);
          }}
          aria-label="Formulaire d'inscription"
        >
          <div>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" id="username" name="username" required aria-required="true" aria-invalid={errorUsername} aria-describedby={errorUsername ? "username-error" : undefined} />
            {errorUsername && (
              <div id="username-error" role="alert">
                <p>Le nom d'utilisateur doit :</p>
                <ul>
                  <li>Faire entre 3 et 20 caractères</li>
                  <li>
                    Ne contenir que des lettres, chiffres, underscores ou tirets
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required aria-required="true" aria-invalid={errorEmail} aria-describedby={errorEmail ? "email-error" : undefined} />
            {errorEmail && <p className="error" id="email-error" role="alert">Adresse mail invalide</p>}
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" required aria-required="true" aria-invalid={errorPassword} aria-describedby={errorPassword ? "password-error" : undefined} />
            {errorPassword && (
              <div id="password-error" role="alert">
                <p>Le mot de passe doit :</p>
                <ul>
                  <li>Faire au moins 8 caractères</li>
                  <li>Contenir au moins une lettre majuscule</li>
                  <li>Contenir au moins une lettre minuscule</li>
                  <li>Contenir au moins un chiffre</li>
                  <li>Contenir au moins un caractère spécial (@$!%*?&)</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              aria-required="true"
              aria-invalid={errorConfirmPassword}
              aria-describedby={errorConfirmPassword ? "confirm-password-error" : undefined}
            />
            {errorConfirmPassword && (
              <p className="error" id="confirm-password-error" role="alert">Les deux mots de passe doivent être identiques</p>
            )}
          </div>
          <div className="check">
            <input type="checkbox" name="rgpd" id="rgpd" required aria-required="true" aria-invalid={errorRgpd} aria-describedby={errorRgpd ? "rgpd-error" : undefined} />
            <label htmlFor="rgpd">
              J’accepte le traitement de mes données personnelles conformément à
              la Politique de confidentialité et aux finalités indiquées{" "}
              <Link to={"/profile/legals/rgpd"}>ici</Link>.
            </label>
            {errorRgpd && (
              <p className="error" id="rgpd-error" role="alert">Vous devez accepter la politique de confidentialité</p>
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
            role="alert"
            aria-live="polite"
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
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShowLogIn(true);
                setShowSignIn(false);
              }
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
