import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for login
const login = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://api.royalspirit.ae/public/v1/api/auth/login', credentials);
            const data = response.data;
            console.log("api success response",data)
            if (!data.user.isActive || !data.user.user_type) {
                throw rejectWithValue('User is not authorized or inactive');
            }
            window.location.href = '/';
            console.log('Login response:', data.user.isActive, data.user.user_type); // Log the response data
            return response.data; // Assuming the API returns user data
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);
export default login;
