import { useUsers } from 'hooks/useUsers';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useUsers();

  const location = useLocation();

  return isAuthenticated ? children : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
