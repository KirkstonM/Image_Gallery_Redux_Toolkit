import { configureStore } from '@reduxjs/toolkit';
import pictureReducer from './features/pictureSlice';

export const store = configureStore({
    reducer : {
        pics : pictureReducer
    }
});
