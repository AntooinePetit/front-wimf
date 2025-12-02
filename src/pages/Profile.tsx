import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
  const navigate = useNavigate();

  document.title = "Mon compte";

  useEffect(() => {
    if (token) {
      navigate("/profile/infos");
      return;
    }
    setShowButtons(true);
    setShowLogIn(false);
    setShowSignIn(false);
  }, [token, navigate]);

  return (
    <>
      {window.innerWidth >= 1025 && <Header />}

      <main id="profile">
        {!token && (
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
              <SignIn
                setShowLogIn={setShowLogIn}
                setShowSignIn={setShowSignIn}
              />
            )}

            {showLogIn && (
              <LogIn
                setShowLogIn={setShowLogIn}
                setShowSignIn={setShowSignIn}
              />
            )}
          </>
        )}
        <ProfileNavBar active="none" />
      </main>

      {window.innerWidth < 1025 && <NavBar active="profile" />}

      {window.innerWidth >= 1025 && <Footer />}
    </>
  );
};

export default Profile;
