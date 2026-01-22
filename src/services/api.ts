import { config } from "../config";

const apiUrl = config.apiUrl;

// Fonction utilitaire pour gérer les erreurs HTTP
const handleResponse = async (res: Response) => {
  // Si la réponse n'est pas OK (status 200-299)
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ message: "Erreur serveur" }));
    throw new Error(errorData.message || `Erreur HTTP ${res.status}`);
  }
  return res.json();
};

// Auth
export const login = async (email: string, password: string) => {
  const res = await fetch(`${apiUrl}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const res = await fetch(`${apiUrl}/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return handleResponse(res);
};

export const forgotPassword = async (email: string) => {
  const res = await fetch(`${apiUrl}/api/v1/auth/forgot-pass`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res;
};

export const resetPassword = async (
  token: string,
  email: string,
  password: string
) => {
  const res = await fetch(`${apiUrl}/api/v1/auth/reset-pass`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, password }),
  });
  return res;
};

// Recipes
export const getAllRecipes = async () => {
  const res = await fetch(`${apiUrl}/api/v1/recipes`);
  return handleResponse(res);
};

export const getRandomRecipes = async () => {
  const res = await fetch(`${apiUrl}/api/v1/recipes/random`);
  return handleResponse(res);
};

export const getRecipeById = async (id: string) => {
  const res = await fetch(`${apiUrl}/api/v1/recipes/${id}`);
  return handleResponse(res);
};

export const searchRecipes = async (query: string) => {
  const res = await fetch(`${apiUrl}/api/v1/recipes/search/${query}`);
  return handleResponse(res);
};

export const searchRecipesByIngredients = async (ingredientIds: string) => {
  const res = await fetch(
    `${apiUrl}/api/v1/recipes/search/ingredients/${ingredientIds}`
  );
  return res.json();
};

// Ingredients
export const getIngredientsByRecipeId = async (id: number) => {
  const res = await fetch(`${apiUrl}/api/v1/ingredients/${id}`);
  return res.json();
};

export const searchIngredients = async (query: string) => {
  const res = await fetch(`${apiUrl}/api/v1/ingredients/search/${query}`);
  return res.json();
};

export const getIngredientsByIds = async (ids: string) => {
  const res = await fetch(`${apiUrl}/api/v1/ingredients/ingredient/${ids}`);
  return res.json();
};

// AI
export const scanImage = async (picture: string) => {
  const res = await fetch(`${apiUrl}/api/v1/ai`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ picture }),
  });
  return res.json();
};

export const generateRecipe = async (ingredientIds: string) => {
  const formattedIds = ingredientIds.replace(/ /g, '+');
  const ingredientsData = await getIngredientsByIds(formattedIds);
  const ingredients = ingredientsData.map((ing: { name_ingredient: string }) => ing.name_ingredient);
  
  const res = await fetch(`${apiUrl}/api/v1/ai/generate-recipe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients }),
  });
  return await res.json();
};

// Users
export const getUserById = async (userId: string, token: string) => {
  const res = await fetch(`${apiUrl}/api/v1/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const updateUser = async (
  userId: string,
  token: string,
  data: Record<string, unknown>
) => {
  const res = await fetch(`${apiUrl}/api/v1/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
