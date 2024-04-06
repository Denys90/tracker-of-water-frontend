import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Global } from '@emotion/react';
import { globalStyles } from 'styles/Global.styled';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
// import Loader from 'components/Loader/Loader';

// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      {/* <Loader /> */}

      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
