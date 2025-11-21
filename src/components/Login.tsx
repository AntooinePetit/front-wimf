import { useState } from "react";

interface LogInProps {
  setShowLogIn: (value: boolean) => void;
  setShowSignIn: (value: boolean) => void;
}

const LogIn = ({ setShowLogIn, setShowSignIn }: LogInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Fetch ici
    }
  };

  return (
    <section id="login">
      <h1>Se connecter</h1>

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
            {errors.email && <span style={{ color: "red", fontSize: "0.875rem" }}>{errors.email}</span>}
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
            {errors.password && <span style={{ color: "red", fontSize: "0.875rem" }}>{errors.password}</span>}
          </div>
          <div className="check">
            <input
              type="checkbox"
              name="remain-connected"
              id="remain-connected"
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
      </div>
    </section>
  );
};

export default LogIn;
