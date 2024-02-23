import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: '',
    
}

const SignUpIdSlice = createSlice({
    name: "signupidSlice",
    initialState,
    reducers: {
        signUpId: (state, action) => {
            state.userId = action.payload
        },
        
    }

})
export const { signUpId } = SignUpIdSlice.actions
export default SignUpIdSlice.reducer