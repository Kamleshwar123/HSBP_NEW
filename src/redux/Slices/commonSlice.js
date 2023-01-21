import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    openLoginModal: false,
    openCityModal:false,
    openSelectCityModal:false

}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setOpenLoginModal: (state, action) => {
            state.openLoginModal = action.payload
        },
        setOpenCityModal: (state, action) => {
            state.openCityModal = action.payload
        },
        setOpenSelectCityModal: (state, action) => {
            state.openSelectCityModal = action.payload
        }
    },
})

export const { setOpenLoginModal, setOpenCityModal, setOpenSelectCityModal} = commonSlice.actions

export default commonSlice.reducer