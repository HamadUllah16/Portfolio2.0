import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    allWork: [],
    loading: false
}

const workSlice = createSlice({
    name: 'work',
    initialState,
    reducers: {
        setAllWork: (state, action) => {
            state.allWork = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export default workSlice.reducer;

export const { setAllWork, setLoading } = workSlice.actions;