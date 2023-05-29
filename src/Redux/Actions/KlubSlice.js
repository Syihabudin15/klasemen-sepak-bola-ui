import { notification } from 'antd';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const base = process.env.BASE_URL || 'http://localhost:5000/'

export const getAllKlub = createAsyncThunk('/klub/get', async () => {
    let result = await axios.get(`${base}api/klub`);
    return result.data;
});

const KlubSlice = createSlice({
    name: 'KlubSlice',
    initialState: {
        isLoading: false,
        total: 0,
        data: []
    },
    extraReducers: {
        [getAllKlub.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllKlub.rejected]: (state, action) => {
            state.isLoading = false;
            notification.error({message: action.payload.msg});
        },
        [getAllKlub.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data.rows;
            state.total = action.payload.data.count;
        }
    }
});

export default KlubSlice.reducer;
