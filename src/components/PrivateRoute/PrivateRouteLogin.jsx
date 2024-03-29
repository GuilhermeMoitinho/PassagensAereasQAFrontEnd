/* eslint-disable react/prop-types */
import {  Navigate } from 'react-router-dom';

const PrivateRouteLogin  = ({ element }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{element}</>;
};

export default PrivateRouteLogin;