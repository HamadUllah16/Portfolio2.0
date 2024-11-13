import { createReducer, createSlice } from "@reduxjs/toolkit"


const initialState = {
    allWork: [],
}

const workSlice = createSlice({
    name: 'work',
    initialState,
    reducers: {
        setAllWork: (state, action) => {
            state.allWork = action.payload;
        }
    }
})

export default workSlice.reducer;

export const { setAllWork } = workSlice.actions;