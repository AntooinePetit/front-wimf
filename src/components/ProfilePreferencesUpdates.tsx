import { useEffect, useState } from "react";
import { config } from "../config";
import { useAuthStore } from "../store/authStore";
import "../styles/components/ProfilePreferences.scss";

const ProfilePreferencesUpdates = () => {
  const token = useAuthStore((state) => state.token);
  const [nutritionalValues, setNutritionalValues] = useState(false);
  const [calories, setCalories] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const payload = JSON.parse(atob(token!.split(".")[1]));
        const userId = payload.id;

        const req = await fetch(`${config.apiUrl}/api/v1/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await req.json();

        if (req.ok) {
          setNutritionalValues(res.nutritional_values_user || false);
          setCalories(res.calories_user || false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchPreferences();
    }
  }, [token]);

  const updatePreferences = async (field: string, value: boolean) => {
    try {
      const payload = JSON.parse(atob(token!.split(".")[1]));
      const userId = payload.id;

      const req = await fetch(`${config.apiUrl}/api/v1/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ [field]: value }),
      });

      if (req.ok) {
        setNotification("Préférences mises à jour");
        setTimeout(() => setNotification(null), 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNutritionalValuesChange = (checked: boolean) => {
    setNutritionalValues(checked);
    updatePreferences("nutritionalValues", checked);
  };

  const handleCaloriesChange = (checked: boolean) => {
    setCalories(checked);
    updatePreferences("calories", checked);
  };

  return (
    <section id="profile-preferences">
      <h1>Préférences</h1>
      <div className="container" id="preferences-container">
        <h2>Affichage</h2>
        <div className="setting">
          <label htmlFor="nutri">Valeurs nutritionnelles</label>
          <input
            type="checkbox"
            id="nutri"
            className="toggle"
            checked={nutritionalValues}
            onChange={(e) => handleNutritionalValuesChange(e.target.checked)}
          />
        </div>

        <div className="setting">
          <label htmlFor="calories">Calories</label>
          <input
            type="checkbox"
            id="calories"
            className="toggle"
            checked={calories}
            onChange={(e) => handleCaloriesChange(e.target.checked)}
          />
        </div>
        {notification && (
          <div className="notification-success">{notification}</div>
        )}
      </div>
    </section>
  );
};

export default ProfilePreferencesUpdates;
