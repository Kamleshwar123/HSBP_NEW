import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './Slices/commonSlice';
import userSlice from './Slices/userSlice';
import packageSlice from './Slices/packageSlice';
import serviceSlice from './Slices/serviceSlice';
import homeSlice from './Slices/homeSlice';

const store = configureStore({
    reducer: {
        common: commonSlice,
        home: homeSlice,
        user: userSlice,
        package: packageSlice,
        service:serviceSlice
       },
})
export default store