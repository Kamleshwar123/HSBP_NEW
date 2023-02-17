import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    packageList: []
}

export const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        setPackageList: (state, action) => {
            state.packageList = action.payload
        }
    },
})

export const { setPackageList} = packageSlice.actions

export default packageSlice.reducer