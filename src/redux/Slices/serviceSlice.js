import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    serviceList: []
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setServiceList: (state, action) => {
            state.serviceList = action.payload
        }
    },
})

export const { setServiceList} = serviceSlice.actions

export default serviceSlice.reducer