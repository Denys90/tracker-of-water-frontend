import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Global } from '@emotion/react';
import { globalStyles } from 'styles/Global.styled';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import Welcome from 'pages/Welcome/Welcome';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      {/* <Loader /> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
