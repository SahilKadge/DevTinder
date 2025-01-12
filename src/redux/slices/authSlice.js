import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    user: null,
    isAuthenticated: false,
}

// Thunk for fetching user data
export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (userId, { rejectWithValue }) => {
      try {
        const response = await axios.get(`http://localhost:3000/fetch/user/${userId}`, { withCredentials: true });
        return response.data.data; // Assuming the user data is in `data.data`
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred");
      }
    }
  );
  

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser (state, action){
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser (state){
            state.user = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
          })
          .addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    },
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;




