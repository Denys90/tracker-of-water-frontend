import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { MainPage } from 'components/MainPage/MainPage/MainPage';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer/>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
