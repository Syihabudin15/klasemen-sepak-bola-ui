import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { notification } from 'antd';

const base = process.env.BASE_URL || 'http://localhost:5000';

export const getPertandingan = createAsyncThunk('/pertandingan/get', async (endPoint) => {
    let result = await axios.get(`${base}/api/pertandingan/${endPoint ? endPoint : 'all'}`);
    return result.data;
});

const PertandinganSlice = createSlice({
    name: 'PertandinganSlice',
    initialState: {
        isLoading: false,
        data: []
    },
    extraReducers: {
        [getPertandingan.pending]: (state) => {
            state.isLoading = true;
        },
        [getPertandingan.rejected]: (state, action) => {
            state.isLoading = false;
            notification.error({message: action.payload ? action.payload.msg : 'Server Error'});
        },
        [getPertandingan.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        }
    }
});

export default PertandinganSlice.reducer;