import { createSlice } from '@reduxjs/toolkit'
import { setLocalCity } from '../../utils'
const initialState = {
    openLoginModal: false,
    localCity: typeof localStorage !== 'undefined' && localStorage?.getItem("hsbp-cityId") ? localStorage?.getItem("hsbp-cityId") : "",
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
        setLocalCityRedux: (state, action) => {
            setLocalCity(action.payload);
            state.localCity = action.payload;
        },
        setOpenCityModal: (state, action) => {
            state.openCityModal = action.payload
        },
        setOpenSelectCityModal: (state, action) => {
            state.openSelectCityModal = action.payload
        }
    },
})

export const { setOpenLoginModal, setLocalCityRedux, setOpenCityModal, setOpenSelectCityModal} = commonSlice.actions

export default commonSlice.reducer