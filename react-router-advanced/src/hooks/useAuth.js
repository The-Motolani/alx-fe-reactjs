export const useAuth = () => {
  const isAuthenticated = localStorage.getItem("isAuth") === "true";

  return { isAuthenticated };
};
