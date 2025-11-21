import { useEffect, useState } from "react";
import LogIn from "../components/Login";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import SignIn from "../components/SignIn";
import { useAuthStore } from "../store/authStore";
import "../styles/pages/Profile.scss";

const Profile = () => {
  const token = useAuthStore((state) => state.token);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showLogIn, setShowLogIn] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      return;
    }
    setShowButtons(true);
    setShowLogIn(false);
    setShowSignIn(false);
  }, [token]);

  return (
    <main id="profile">
      {token ? (
        <ProfileNavBar active="none" />
      ) : (
        <>
          {showButtons && (
            <div id="connection-buttons" className="container">
              <button
                className="button"
                onClick={() => {
                  setShowLogIn(true);
                  setShowButtons(false);
                }}
              >
                Se connecter
              </button>
              <button
                className="button"
                onClick={() => {
                  setShowSignIn(true);
                  setShowButtons(false);
                }}
              >
                Créer un compte
              </button>
            </div>
          )}

          {showSignIn && (
            <SignIn setShowLogIn={setShowLogIn} setShowSignIn={setShowSignIn} />
          )}

          {showLogIn && (
            <LogIn setShowLogIn={setShowLogIn} setShowSignIn={setShowSignIn} />
          )}

          <ProfileNavBar active="none" />
        </>
      )}

      <NavBar active="profile" />
    </main>
  );
};

export default Profile;
