import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme.js';
import { ModalProvider } from 'context';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}></PersistGate>
      <BrowserRouter basename="/runners_of_code__frontend">
        <ModalProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ModalProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
