import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/api";
import { useAuthStore } from "../store/authStore";
import "../styles/components/ProfileInfosUpdate.scss";

const ProfileInfosUpdate = () => {
  const token = useAuthStore((state) => state.token);
  const clearToken = useAuthStore((state) => state.clearToken);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const payload = JSON.parse(atob(token!.split(".")[1]));
        const userId = payload.id;
        const res = await getUserById(userId, token!);
        setUsername(res.username_user || "");
        setEmail(res.email_user || "");
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchUserData();
    } else {
      navigate("/profile");
    }
  }, [token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username.trim()) {
      newErrors.username = "Le nom d'utilisateur est requis";
    } else if (!usernameRegex.test(username)) {
      newErrors.username = "Nom d'utilisateur invalide (3-20 caractères)";
    }

    if (!email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email invalide";
    }

    if (password && !passwordRegex.test(password)) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    setErrors(newErrors);

    if (
      !newErrors.username &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      try {
        const payload = JSON.parse(atob(token!.split(".")[1]));
        const userId = payload.id;

        const body: { username: string; email: string; password?: string } = {
          username,
          email,
        };
        if (password) {
          body.password = password;
        }

        await updateUser(userId, token!, body);
        setSuccessMessage("Informations mises à jour avec succès");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => setSuccessMessage(""), 3000);
      } catch (error) {
        console.error(error);
        setErrors({
          ...errors,
          email: "Erreur de mise à jour",
        });
      }
    }
  };

  const handleLogout = () => {
    clearToken();
    navigate("/profile");
  };

  return (
    <section id="profile-infos">
      <h1>Mes informations</h1>

      <div className="container">
        <div id="infos">
          <h2>{username}</h2>
          <p>{email}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={username}
            />
            {errors.username && (
              <p style={{ color: "red", fontSize: "0.875rem" }}>
                {errors.username}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "0.875rem" }}>
                {errors.email}
              </p>
            )}
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
            {errors.password && (
              <p style={{ color: "red", fontSize: "0.875rem" }}>
                {errors.password}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red", fontSize: "0.875rem" }}>
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button className="button" type="submit">
            Mettre à jour
          </button>
        </form>

        {successMessage && (
          <p className="notification-success">{successMessage}</p>
        )}
      </div>
      <button
        className="logout-button"
        onClick={handleLogout}
        style={{ marginTop: "2rem" }}
      >
        Déconnexion
      </button>
    </section>
  );
};

export default ProfileInfosUpdate;
