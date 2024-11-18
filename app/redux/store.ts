import { configureStore } from "@reduxjs/toolkit";
import work from "./features/work";


export const store = configureStore({
    reducer: {
        work: work
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;