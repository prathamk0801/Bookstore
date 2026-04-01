
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthuser = localStorage.getItem("user"); // ✅ fixed key

  const [authUser, setAuthUser] = useState(
    initialAuthuser ? JSON.parse(initialAuthuser) : null
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);