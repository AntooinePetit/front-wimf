import { useState } from "react";
import { config } from "../config";
import "../styles/components/SignIn.scss";

const SignIn = () => {
  const [errorUsername, setErrorUsername] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [errorConfirmPassword, setErrorConfirmPassword] =
    useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [registered, setRegistered] = useState<string | null>(null);

  const sendForm = async () => {
    setIsError(false);
    setErrorUsername(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorConfirmPassword(false);

    const form = document.querySelector("form") as HTMLFormElement;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      form.elements.namedItem("confirm-password") as HTMLInputElement
    ).value;

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

      console.log(res);

      setRegistered("Inscription réussie ! Bienvenue !")
    } catch (error) {
      console.error(error);
      setRegistered("Une erreur est survenue lors de l'inscription. Réessaie plus tard !")
    }
  };

  return (
    <section id="sign-in">
      <h1>Créer un compte</h1>

      <form
        className="container"
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
        <button type="submit" className="button">
          S'inscrire
        </button>
      </form>

      {registered && <p style={{ color: "green", textAlign: "center" }}>{registered}</p>}
    </section>
  );
};

export default SignIn;
