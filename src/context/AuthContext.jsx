import { createContext, useContext, useState } from "react";
import { login as loginApi } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );


  const login = async (userData) => {

    const result = await loginApi(userData);

    setUser(result);

    localStorage.setItem(
      "user",
      JSON.stringify(result)
    );

    return result;
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}