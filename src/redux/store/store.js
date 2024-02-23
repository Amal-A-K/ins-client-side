import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "../slice/userslice";
import LoginIdSliceReducer from "../slice/Loginidslice";
import SignUpsliceReducer from "../slice/signupslice";
export const store = configureStore({
    reducer: {
        userSlice: UserSliceReducer,
        loginIdSlice: LoginIdSliceReducer,
        signupIdSlice:SignUpsliceReducer,
    }
})