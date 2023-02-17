import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    bannerList: [],
    cityList: []
}

export const packageSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setBannerList: (state, action) => {
            state.bannerList = action.payload
        },
        setCityList: (state, action) => {
            state.cityList = action.payload
        }
    },
})

export const { setBannerList, setCityList} = packageSlice.actions

export default packageSlice.reducer