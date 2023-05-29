import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { notification } from 'antd';

const base = process.env.BASE_URL || 'http://localhost:5000';

export const getAktifPertandingan = createAsyncThunk('/pertandingan/aktif/get', async () => {
    let result = await axios.get(`${base}/api/pertandingan/aktif`);
    return result.data;
});

const AktifPertandinganSlice = createSlice({
    name: 'AktifPertandinganSlice',
    initialState: {
        isLoading: false,
        datas: []
    },
    extraReducers: {
        [getAktifPertandingan.pending]: (state) => {
            state.isLoading = true;
        },
        [getAktifPertandingan.rejected]: (state, action) => {
            state.isLoading = false;
            notification.error({message: action.payload.msg});
        },
        [getAktifPertandingan.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.datas = action.payload.data;
        }
    }
});

export default AktifPertandinganSlice.reducer;