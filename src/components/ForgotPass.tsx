import { useState, type FormEvent } from "react";
import { forgotPassword } from "../services/api";

const ForgotPass = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorServer, setErrorServer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorEmail(false);
    setErrorServer(false);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const res = await forgotPassword(email);
      if (res.status === 404) {
        setErrorEmail(true);
      } else if (!res.ok) {
        setErrorServer(true);
      } else {
        setSuccess(true);
      }
    } catch {
      setErrorServer(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="forgot-pass" className="container">
      {success ? (
        <div className="success-message">
          <p>Lien de réinitialisation envoyé !</p>
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" name="email" required />
          {errorEmail && <p className="error">Aucun compte avec cette adresse</p>}
          {errorServer && <p className="error">Erreur serveur, réessayez plus tard</p>}
        </div>
        <div>
          <button type="submit" className="button" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer le lien de réinitialisation"}
          </button>
        </div>
      </form>
      )}
    </div>
  );
};

export default ForgotPass;
