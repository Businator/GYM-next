'use client';
import React from 'react';

import Footer from "'@/UI/footer/Footer'";
import Header from "'@/UI/header/Header'";

import { Provider } from 'react-redux';
import store from "'@/store/store'";
import { ThemeProvider } from '@emotion/react';
import { themeMUI } from "'@/assets/styles/theme'";
import Body from './Body';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMUI}>
        <Body>
          <Header />
          {children}
          <Footer />
        </Body>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
