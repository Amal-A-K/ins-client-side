import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
const ForceRedirect = ({ user, children }) => {
    if (user) {
        return <Navigate to='/Home' replace />
    }
    return children;
}
export default ForceRedirect;