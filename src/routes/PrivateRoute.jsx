import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>loading....</div>;
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'} replace></Navigate>;
};

export default PrivateRoute;
