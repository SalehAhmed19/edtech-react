import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/authentication/login" state={{ from: location }} replace />
  );
}
