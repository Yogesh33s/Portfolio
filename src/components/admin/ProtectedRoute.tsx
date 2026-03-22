import { Navigate } from "react-router-dom";

import { useAdminAuth } from "@/contexts/AdminAuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAdminAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
