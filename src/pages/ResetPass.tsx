import { useState, type FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import { resetPassword } from "../services/api";
import "../styles/pages/ResetPass.scss";

const ResetPass = () => {
  const { token } = useParams<{ token: string }>();
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorPassword(false);
    setErrorConfirmPassword(false);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if (!token) {
      setErrorMessage("Token manquant !");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrorPassword(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorConfirmPassword(true);
      return;
    }

    setLoading(true);
    try {
      const res = await resetPassword(token, email, password);
      if (res.status === 401) {
        const data = await res.json();
        setErrorMessage(data.message);
      } else if (res.status === 404) {
        setErrorMessage("Utilisateur introuvable");
      } else if (!res.ok) {
        setErrorMessage("Erreur serveur, réessayez plus tard");
      } else {
        setSuccess(true);
      }
    } catch {
      setErrorMessage("Erreur serveur, réessayez plus tard");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <main id="reset-pass">
        <h1>Réinitialisation du mot de passe</h1>

        <section className="container">
          {success ? (
            <div className="success-message">
              <p>Mot de passe réinitialisé avec succès !</p>
              <Link to="/profile" className="button">Retour au profil</Link>
            </div>
          ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="password">Nouveau mot de passe</label>
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
              <label htmlFor="confirm-password">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
              />
              {errorConfirmPassword && (
                <p className="error">Les deux mots de passe doivent être identiques</p>
              )}
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Mise à jour..." : "Mettre à jour le mot de passe"}
            </button>
          </form>
          )}
        </section>
      </main>

      <ProfileNavBar active="none" />
      <NavBar active="profile" />
    </>
  );
};

export default ResetPass;
