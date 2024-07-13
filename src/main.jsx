import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

import { Routes } from './routes';
import { AuthProvider } from './hooks/auth';
import { SearchProvider } from './hooks/search';
import { CartProvider } from './hooks/cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
      <Toaster toastOptions={{
        duration: 2000,
        style: {
          padding: '16px',
          fontSize: '16px'
        },
      }} />
    </ThemeProvider>
  </React.StrictMode>
);
