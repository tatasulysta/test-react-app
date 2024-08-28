import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import LoginPage from '../pages/auth/login';
import MainPage from '../pages/main';
import React from 'react';
import PrivateRoute from './private-route';
import MainCreate from '../pages/main/create';
import RegisterPage from '../pages/auth/register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="sign-in" element={<LoginPage />} />
      <Route path="sign-up" element={<RegisterPage />} />
      {/* <Route path="signup" element={<Signup />} /> */}
      <Route element={<PrivateRoute />}>
        <Route index element={<MainPage />} />
        <Route path="create" element={<MainCreate />} />
      </Route>
    </Route>,
  ),
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
