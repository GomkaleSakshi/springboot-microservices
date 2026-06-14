export const getRole = () => localStorage.getItem("role");

export const getUser = () => JSON.parse(localStorage.getItem("user"));

export const isAdmin = () => getRole() === "ADMIN";

export const isUser = () => getRole() === "USER";

export const isLoggedIn = () => !!localStorage.getItem("user");