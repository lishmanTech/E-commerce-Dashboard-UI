import React from "react";
import { useUserAuth } from "./Context/UserAuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();
  // redirect if there is no user that is signed in
//   it doesnt keep the user in for any amount
//    of time because we didint set the time the user should be signed in
// or when it should expire
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
