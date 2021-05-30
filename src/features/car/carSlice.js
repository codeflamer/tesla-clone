import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars:['Model X','Model 3','Model Y','Model S']
}

const carSlice = createSlice({
    name:'car',
    initialState,
    reducers:{}
})

export const selectCar = (state)=> state.car.cars;

export default carSlice.reducer;