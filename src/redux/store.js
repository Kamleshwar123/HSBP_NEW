import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './Slices/commonSlice'

const store = configureStore({
    reducer: {
        common: commonSlice,
       },
})
export default store