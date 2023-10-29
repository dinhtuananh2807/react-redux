import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { object } from 'yup';
import { quanlyPhimServ } from '../services/quanLyPhim';

const initialState = {
 listPhim: [],
};

//đây là thunk giúp xr lý các bất đồng bộ và nhận một kết quả trả về trước khi đi vào bên trong store và xử lý

export const getAllMovieAPI = createAsyncThunk ("phim/getAllMovie", async () =>{

    const res = await quanlyPhimServ.getAllMovie();
    console.log(res);
    console.log(res.data.content);
    return res.data.content;


})

const phimSlice = createSlice ({
    name: 'phim',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllMovieAPI.fulfilled, (state,action)=>{
            //xử lý khi gọi dữ liêu thành công
            console.log('object');
            console.log(action.payload);
            state.listPhim = action.payload;
        });

    }
})



export const {} = phimSlice.actions;

export default phimSlice.reducer;


 