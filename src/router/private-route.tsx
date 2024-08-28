import React from 'react';
import { getLoginToken } from '../api/common';
import { Navigate, Outlet } from 'react-router';

export default function PrivateRoute() {
  const token = getLoginToken();
  return token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/sign-in" />
  );
}
