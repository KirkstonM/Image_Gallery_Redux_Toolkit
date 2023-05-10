import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    mode : "light",
    pictures : [],
    isLoading : false,
    error : false
};

export const fetchImages = createAsyncThunk('pics/fetch', async(thunkAPI) => {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=12`)
        const data = await response.json()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue({ error : error.message })
    }
});

const pictureSlice = createSlice({
    name : 'pics',
    initialState,
    reducers: {
        toggleMode : (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark'
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchImages.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(fetchImages.fulfilled, (state, action) => {
            state.isLoading = false;
            state.pictures = action.payload;
            state.error = false
        })
        .addCase(fetchImages.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }

});

export const modeSelected = (state) => state.pics.mode
export const { toggleMode } = pictureSlice.actions;
export const pictureData = (state) => state.pics.pictures;
export default pictureSlice.reducer;