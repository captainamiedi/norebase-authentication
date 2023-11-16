import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

const LoginStart = lazy(() => import('../components/Login'));
const StartSignup = lazy(() => import('../pages/StartSignup'));
const ResetPassword = lazy(() => import('../components/ChangePassword'))
const ForgotPassword = lazy(() => import('../components/ForgotPassword'))

export default function StartAuthentication({ fallback, unAuthenticatedRoutes, authenticatedRoutes, routeAfterLogin='/dashboard', routeAfterSignup }) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LazyComponent component={LoginStart} fallback={fallback} routeAfterLogin={routeAfterLogin} />} />
      <Route path="/signup" element={<LazyComponent component={StartSignup} fallback={fallback} routeAfterSignup={routeAfterSignup} />} />
      <Route path="/reset-password" element={<LazyComponent component={ResetPassword} fallback={fallback} />} />
      <Route path="/forget-password" element={<LazyComponent component={ForgotPassword} fallback={fallback} />} />
      <Route element={<ProtectedRoutes />}>{authenticatedRoutes}</Route>
      {unAuthenticatedRoutes}
    </Routes>
    </BrowserRouter>
  );
}

const LazyComponent = ({ component: Component, fallback, ...restProps }) => (
  <Suspense fallback={fallback}>
    <Component {...restProps} />
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
