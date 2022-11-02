import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import Pages from './components/pages';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Pages.HomePage />} />
      <Route path='detail/:detailId' element={<Pages.DetailPage />} />
    </Route>
  )
);

export default Router;
