import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { MainPage } from 'components/MainPage/MainPage/MainPage';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
