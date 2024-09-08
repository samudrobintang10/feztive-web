import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, _setUser] = useState(() => {
    // Initialize state from localStorage, or use null if not available
    const savedUser = localStorage.getItem("USER_DATA");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [notification, _setNotification] = useState("");
  const [token, _setToken] = useState(() => {
    // Initialize state from localStorage, or use null if not available
    return localStorage.getItem("ACCESS_TOKEN");
  });

  const setNotification = (message) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification("");
    }, 5000);
  };

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const setUser = (userData) => {
    _setUser(userData);
    if (userData) {
      localStorage.setItem("USER_DATA", JSON.stringify(userData));
    } else {
      localStorage.removeItem("USER_DATA");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        notification,
        setNotification,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
