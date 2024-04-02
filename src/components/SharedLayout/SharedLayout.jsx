import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import { Footer } from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

export default SharedLayout;
