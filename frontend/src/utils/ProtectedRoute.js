import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return null; // or a loading spinner
    }

    if (!user) {
        // Redirect to login page with the return url
        return <Navigate to="/driver-login" state={{ from: location }} replace />;
    }

    return children;
}; 