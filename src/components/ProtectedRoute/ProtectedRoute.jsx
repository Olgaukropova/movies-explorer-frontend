import React from 'react';
import { Navigate } from "react-router-dom";
import { NAVIGATOR } from '../../utils/vars';

const ProtectedRouteElement = ({ element: Component, ...props  }) => {
  return (
     props.loggedIn ? <Component {...props} /> : <Navigate to={NAVIGATOR.MAIN} replace/>
)};

export default ProtectedRouteElement;
