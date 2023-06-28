import { Navigate } from 'react-router-dom';
import { useGetMeQuery } from '../../../services/userApi';

function AuthRoute (props) {
  const { data: user, isLoading, isUninitialized } = useGetMeQuery();

  if (!user && !isLoading && !isUninitialized) {
    return <Navigate to="/" replace />;
  }

  return props.children;
}

export default AuthRoute;
