import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const ProtectedRoute = ({ children }) => {
  const { user, token, notification, setUser, setToken, setNotification } =
    useStateContext();

  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
