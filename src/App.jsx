import React from 'react';

import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import defaultTheme from './styles/theme';

import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}
