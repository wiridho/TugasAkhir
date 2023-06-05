import { Navigate } from "react-router-dom";

const PrivateRoute = ({ is_auth, children }) => {
  return is_auth ? <>{children}</> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
