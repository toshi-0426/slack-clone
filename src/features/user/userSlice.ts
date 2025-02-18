import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: ""
}

export const userSlice = createSlice({
    name: "userID",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userId = action.payload;
        },
        logout: (state) => {
            state.userId = "";
        }
    } 
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;