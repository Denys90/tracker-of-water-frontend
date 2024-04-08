import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import { useSelector } from 'react-redux';

import { Global } from '@emotion/react';
import { globalStyles } from 'styles/Global.styled';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';

import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
// import Loader from 'components/Loader/Loader';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentThunk } from './store/user/thunk.jsx';

// import { globalLoadingSelector } from './root/selectors';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentThunk());
  }, [dispatch]);
  // const loding = useSelector(globalLoadingSelector);
  return (
    <>
      <Global styles={globalStyles} />
      {/* {loding ? (
        <Loader />
      ) : (
        <Suspense>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<WelcomePage />} />
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
      )} */}
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<WelcomePage />} />
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
    </>
  );
}
export default App;
