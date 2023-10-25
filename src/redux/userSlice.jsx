import { createSlice } from '@reduxjs/toolkit'



const dataUserLocal = JSON.parse(localStorage.getItem('user'));

console.log(dataUserLocal)

const initialState = {
 user: dataUserLocal,
};





const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {},
})


export const {} = userSlice.actions;

export default userSlice.reducer;


