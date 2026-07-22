import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthProvider = ({ children }) => {
  let [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []);
  let [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")));

  return (
    <AuthStore.Provider
      value={{ registeredUsers, setRegisteredUsers, loggedUser, setLoggedUser }}
    >
      {children}
    </AuthStore.Provider>
  );
};
