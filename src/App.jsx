import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import SecondPage from 'pages/SecondPage/SecondPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/GlobalStyles.styled';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/second" element={<SecondPage />}></Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AppWrapper>
    </>
  );
}
export default App;
