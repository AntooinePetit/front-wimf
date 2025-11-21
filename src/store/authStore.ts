import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  checkTokenExpiration: () => void;
}

const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
      checkTokenExpiration: () => {
        const token = get().token;
        if (token && isTokenExpired(token)) {
          set({ token: null });
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

// Vérification automatique au chargement
if (useAuthStore.getState().token) {
  useAuthStore.getState().checkTokenExpiration();
}

// Vérification périodique toutes les minutes
setInterval(() => {
  useAuthStore.getState().checkTokenExpiration();
}, 60000);
