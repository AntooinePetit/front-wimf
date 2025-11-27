import { config } from "../config";

const apiUrl = config.apiUrl;

// Auth
export const login = async (email: string, password: string) => {
  const res = await fetch(`${apiUrl}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const register = async (username: string, email: string, password: string) => {
  const res = await fetch(`${apiUrl}/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
};

// Recipes
export const getAllRecipes = async () => {
  const res = await fetch(`${apiUrl}/api/v1/recipes`);
  return res.json();
};

export const getRandomRecipes = async () => {
  const res = await fetch(`${apiUrl}/api/v1/recipes/random`);
  return res.json();
};

export const getRecipeById = async (id: string) => {
  const res = await fetch(`${apiUrl}/api/v1/recipes/${id}`);
  return res.json();
};

export const searchRecipes = async (query: string) => {
  const res = await fetch(`${apiUrl}/api/v1/recipes/search/${query}`);
  return res.json();
};

export const searchRecipesByIngredients = async (ingredientIds: string) => {
  const res = await fetch(`${apiUrl}/api/v1/recipes/search/ingredients/${ingredientIds}`);
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

// Users
export const getUserById = async (userId: string, token: string) => {
  const res = await fetch(`${apiUrl}/api/v1/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const updateUser = async (userId: string, token: string, data: Record<string, unknown>) => {
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
