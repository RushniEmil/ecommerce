import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const withAuthProtection = (WrappedComponent) => {
  const AuthProtectedComponent = (props) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthProtectedComponent;
};

export default withAuthProtection;
