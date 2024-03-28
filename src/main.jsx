import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/runners_of_code__frontend">
      <ThemeProvider theme={theme}></ThemeProvider>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
