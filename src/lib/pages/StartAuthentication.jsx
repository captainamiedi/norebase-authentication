import React, { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

const LoginStart = lazy(() => import('../components/Login'));
const StartSignup = lazy(() => import('../pages/StartSignup'));
const ResetPassword = lazy(() => import('../components/ResetPassword'))

export default function StartAuthentication({ fallback, unAuthenticatedRoutes, authenticatedRoutes }) {
  return (
    <Routes>
      <Route path="/" element={<LazyComponent component={LoginStart} fallback={fallback} />} />
      <Route path="/signup" element={<LazyComponent component={StartSignup} fallback={fallback} />} />
      <Route path="/reset-password" element={<LazyComponent component={ResetPassword} fallback={fallback} />} />
      <Route element={<ProtectedRoutes />}>{authenticatedRoutes}</Route>
      {unAuthenticatedRoutes}
    </Routes>
  );
}

const LazyComponent = ({ component: Component, fallback }) => (
  <Suspense fallback={fallback}>
    <Component />
  </Suspense>
);

const ProtectedRoutes = ({ children, redirect = '/' }) => {
  const auth = localStorage.getItem('userToken');
  const location = useLocation();

  if (!auth) {
    return <Navigate to={redirect} state={{ from: location }} replace />;
  }

  return children ? children : <Outlet />;
};
