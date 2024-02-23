import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: '',
    insDetails:'',
    isLoggedIn: false
}

const LoginIdSlice = createSlice({
    name: "loginIdSlice",
    initialState,
    reducers: {
        loginId: (state, action) => {
            state.userId = action.payload
        },
        logInIdentification: (state, action) => {
            state.isLoggedIn = action.payload
        },
        instituteDetails:(state,action)=>{
            state.insDetails=action.payload
        }
    }

})
export const { loginId, logInIdentification,instituteDetails } = LoginIdSlice.actions
export default LoginIdSlice.reducer