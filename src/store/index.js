import { configureStore } from "@reduxjs/toolkit";
import concreteSlice from "./concreteSlice";
import plasterSlice from "./plasterSlice";
import brickworkSlice from "./brickworkSlice";
import mortarSlice from "./mortarSlice";
import paintSlice from "./paintSlice";
import puttySlice from "./puttySlice";

const myStore = configureStore({
    reducer: {
        concrete: concreteSlice.reducer,
        plaster:plasterSlice.reducer,
        brickwork:brickworkSlice.reducer,
        mortar:mortarSlice.reducer,
        paint:paintSlice.reducer,
        putty:puttySlice.reducer,
    }
})


export default myStore;