import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    User: [],
}
export const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        AddUser: (state, action) => {

            state.User = action.payload
        }
    }
})
export const { AddUser } = UserSlice.actions

export default UserSlice.reducer