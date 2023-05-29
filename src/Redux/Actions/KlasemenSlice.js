import { notification } from 'antd';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const base = process.env.BASE_URL || 'http://localhost:5000';

export const getKlasmen = createAsyncThunk('/klasmen/get', async () => {
    let result = await axios.get(`${base}/api/klasemen`);
    return result.data;
});

const KlasmenSlice = createSlice({
    name: 'KlasmenSlice',
    initialState: {
        isLoading: false,
        data: []
    },
    extraReducers: {
        [getKlasmen.pending]: (state) => {
            state.isLoading = true;
        },
        [getKlasmen.rejected]: (state, action) => {
            state.isLoading = false;
            notification.error({message: action.payload.msg});
        },
        [getKlasmen.fulfilled]: (state, action) => {
            state.isLoading = false;
            let data = [];
            action.payload.data.forEach((e,i) => {
                data.push({
                    id: i+1,
                    nama_klub: e.nama_klub,
                    kota_klub: e.kota_klub,
                    ma: e.ma,
                    me: e.me,
                    s: e.s,
                    k: e.k,
                    gm: e.gm,
                    gk: e.gk,
                    point: e.point
                });
            });
            state.data = data;
        }
    }
});

export default KlasmenSlice.reducer;