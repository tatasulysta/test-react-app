import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import LoginPage from '../pages/login';
import MainPage from '../pages/main';
import React from 'react';
import PrivateRoute from './private-route';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="sign-in" element={<LoginPage />} />
      {/* <Route path="signup" element={<Signup />} /> */}
      <Route element={<PrivateRoute />}>
        <Route index element={<MainPage />} />
      </Route>
    </Route>,
  ),
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
