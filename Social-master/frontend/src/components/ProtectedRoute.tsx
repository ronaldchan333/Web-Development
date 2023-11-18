import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

type ProtectedRouteProps = {
  children?: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.user);
  return <>{user ? children : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
