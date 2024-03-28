import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

import { AppWrapper } from './App.styled';
import { Global } from '@emotion/react';
import { globalStyles } from 'styles/Global.styled';

import PrivateRoute from 'guards/PrivateRoute';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
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
