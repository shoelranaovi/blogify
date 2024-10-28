/* eslint-disable react/prop-types */

// import { useSelector } from "react-redux";

import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

function AuthenticationRote({ children }) {
  const { isLoading, isAuthenticate, user } = useSelector(
    (state) => state.auth
  );
  // console.log(isLoading, isAuthenticate, user);

  const location = useLocation();
  console.log(location.pathname);
  if (isLoading) {
    console.log(5);
    return <div> loading please wait....</div>;
  }

  if (isAuthenticate && location.pathname.includes("/auth")) {
    return <Navigate to="/" />;
  }
  if (
    isAuthenticate &&
    user.role !== "Admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/" />;
  }

  ///// if Authnentication but want to access login page

  return children;
}

export default AuthenticationRote;
