import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    openLoginModal: false,
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setOpenLoginModal: (state, action) => {
            state.openLoginModal = action.payload
        }
    },
})

export const { setOpenLoginModal } = commonSlice.actions

export default commonSlice.reducer