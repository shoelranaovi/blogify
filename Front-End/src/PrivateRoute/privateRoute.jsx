/* eslint-disable react/prop-types */

// import { useSelector } from "react-redux";

import { useLocation, Navigate } from "react-router-dom";

function AuthenticationRote({ children }) {
  // const { Auth, user } = useSelector((state) => state.auth);
  const Auth = true;

  const location = useLocation();

  if (!Auth && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth/login" />;
  }
  ///// if Authnentication but want to access login page
  if (Auth && location.pathname.includes("/auth")) {
    return <Navigate to="/home" />;
  }

  return children;
}

export default AuthenticationRote;
