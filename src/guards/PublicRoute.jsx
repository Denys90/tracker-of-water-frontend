import { Navigate, useLocation } from 'react-router-dom';
import { useUsers } from 'hooks/useUsers';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useUsers();

  const { state: prevLocation } = useLocation();

  return !isAuthenticated ? children : <Navigate to={prevLocation ?? '/'} />;
};

export default PublicRoute;
