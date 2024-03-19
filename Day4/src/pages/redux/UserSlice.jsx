import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token: '',
    role: '',
    username: '' 
};

const UserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated(state, action) {
            state.isAuthenticated = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setRole(state, action) {
            state.role = action.payload;
        },
        setUsername(state, action) { 
            state.username = action.payload;
        }
    }
});

export const { setAuthenticated, setRole, setToken, setUsername } = UserSlice.actions;
export default UserSlice.reducer;