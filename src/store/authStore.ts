import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (token: string, rememberMe: boolean) => void;
  clearToken: () => void;
  checkTokenExpiration: () => void;
  loadToken: () => void;
}

const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};

export const useAuthStore = create<AuthState>((set, get) => ({
  token: null,
  setToken: (token, rememberMe) => {
    set({ token });
    if (rememberMe) {
      localStorage.setItem("auth-token", token);
      sessionStorage.removeItem("auth-token");
    } else {
      sessionStorage.setItem("auth-token", token);
      localStorage.removeItem("auth-token");
    }
  },
  clearToken: () => {
    set({ token: null });
    localStorage.removeItem("auth-token");
    sessionStorage.removeItem("auth-token");
  },
  checkTokenExpiration: () => {
    const token = get().token;
    if (token && isTokenExpired(token)) {
      get().clearToken();
    }
  },
  loadToken: () => {
    const token = localStorage.getItem("auth-token") || sessionStorage.getItem("auth-token");
    if (token && !isTokenExpired(token)) {
      set({ token });
    } else if (token) {
      get().clearToken();
    }
  },
}));

// Chargement du token au démarrage
useAuthStore.getState().loadToken();

// Vérification périodique toutes les minutes
setInterval(() => {
  useAuthStore.getState().checkTokenExpiration();
}, 60000);
