import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { useAuthStore } from "../store/authStore";
import ForgotPass from "./ForgotPass";

interface LogInProps {
  setShowLogIn: (value: boolean) => void;
  setShowSignIn: (value: boolean) => void;
}

const LogIn = ({ setShowLogIn, setShowSignIn }: LogInProps) => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const [remainConnected, setRemainConnected] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [notification, setNotification] = useState<string | null>(null);
  const [showForgotPass, setShowForgotPass] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email invalide";
    }

    if (!password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      try {
        const res = await login(email, password);
        if (res.token || res) {
          setToken(res, remainConnected);
          setShowLogIn(false);
          navigate("/profile/infos");
        } else {
          setNotification(res.message || "Erreur de connexion");
          setTimeout(() => setNotification(null), 3000);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section id="login">
      <h1>Se connecter</h1>

      {showForgotPass && <ForgotPass />}

      {!showForgotPass && (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <span onClick={() => setShowForgotPass(true)}>
                Mot de passe oublié ?
              </span>
            </div>
            <div className="check">
              <input
                type="checkbox"
                name="remain-connected"
                id="remain-connected"
                onChange={(e) => setRemainConnected(e.target.checked)}
              />
              <label htmlFor="remain-connected">Rester connecté</label>
            </div>
            <button className="button" type="submit">
              Se connecter
            </button>
          </form>
          <p>
            Tu n'as pas de compte ?{" "}
            <span
              onClick={() => {
                setShowLogIn(false);
                setShowSignIn(true);
              }}
            >
              Crées-en un !
            </span>
          </p>
          {notification && (
            <div className="notification-error">{notification}</div>
          )}
        </div>
      )}
    </section>
  );
};

export default LogIn;
