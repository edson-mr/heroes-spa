/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const location = useLocation()
  // console.log(pathname, search)
  console.log(location)
  const {pathname, search} = location
  const lastPath = pathname+ search
  localStorage.setItem('lastPath', lastPath)

  return logged ? <>{children}</> : <Navigate to="login" />;
};
