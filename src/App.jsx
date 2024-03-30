import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import Loader from 'components/Loader/Loader';
import HomePage from 'pages/HomePage/HomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

import { AppWrapper } from './App.styled';
import { Global } from '@emotion/react';
import { globalStyles } from 'styles/Global.styled';

import PrivateRoute from 'guards/PrivateRoute';
import { useUsers } from 'hooks/useUsers';
// import PublicRoute from 'guards/PublicRoute';

function App() {
  const { fetchCurrentUser } = useUsers();

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
  return (
    <>
      <Global styles={globalStyles} />
      <Loader />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AppWrapper>
    </>
  );
}
export default App;
