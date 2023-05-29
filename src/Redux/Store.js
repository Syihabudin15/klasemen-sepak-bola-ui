import { configureStore } from "@reduxjs/toolkit";
import KlubSlice from "./Actions/KlubSlice";
import KlasemenSlice from "./Actions/KlasemenSlice";

export default configureStore({
    reducer: {
        klubs: KlubSlice,
        klasmens: KlasemenSlice
    }
});