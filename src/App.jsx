import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Global } from '@emotion/react';
import { globalStyles } from 'styles/Global.styled';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';

import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import Loader from 'components/Loader/Loader';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const VerificationPage = lazy(() =>
  import('pages/VerificationPage/VerificationPage')
);
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

import { useEffect } from 'react';

import { useUsers } from 'hooks/useUsers';

function App() {
  const { isRefreshingUser, getCurrent, isAuthenticated } = useUsers();

  useEffect(() => {
    if (isAuthenticated) {
      getCurrent();
    }
  }, [getCurrent, isAuthenticated]);

  return (
    <>
      <Global styles={globalStyles} />
      {isRefreshingUser ? (
        <Loader />
      ) : (
        <Suspense>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <WelcomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="/verify/:verificationToken"
                element={
                  <PublicRoute>
                    <VerificationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
}
export default App;
