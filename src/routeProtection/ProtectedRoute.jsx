import React from "react";
import { Navigate } from "react-router-dom";
// import { UseSelector, useDispatch } from "react-redux";
const ProtectedRoute = ({ user, children }) => {
    // console.log(user);
    if (!user) {
        return <Navigate to='/Login' replace></Navigate>
    }
    return children;

}
export default ProtectedRoute;