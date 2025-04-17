import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import login from "../services/auth";

// Define the initial state
interface AuthState {
    user: null | { email: string };
    loading: boolean;
    error: null | string;
    loginData:[];
    userType: null | string;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    loginData:[],
    userType: null,
};


// Create a slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                console.log("pending api",state)
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log("successfull api",state)
                console.log("successful api payload",action.payload)
                state.loading = false;
                state.user = action.payload;
                state.loginData = action?.payload?.user;
                state.userType = action?.payload?.type
            })
            .addCase(login.rejected, (state, action) => {
                console.log("reject api",state)
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;