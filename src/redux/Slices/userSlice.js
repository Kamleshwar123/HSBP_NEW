import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    customerId:"",
    customerData: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCustomerId: (state, action) => {
            state.customerId = action.payload
        },
        setCustomerData: (state, action) => {
            state.customerData = action.payload
        }
    },
})

export const { setCustomerId, setCustomerData} = userSlice.actions

export default userSlice.reducer