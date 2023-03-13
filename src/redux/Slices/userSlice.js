import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const initialState = {
    customerId:"",
    customerData:  JSON.parse(Cookies?.get("hsbpUserData")|| "{}"),
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