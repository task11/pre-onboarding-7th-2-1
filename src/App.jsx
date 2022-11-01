import React from 'react';

import { RouterProvider } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import Router from './router';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </>
  );
}
