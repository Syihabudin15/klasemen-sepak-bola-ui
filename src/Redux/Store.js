import { configureStore } from "@reduxjs/toolkit";
import KlubSlice from "./Actions/KlubSlice";
import KlasemenSlice from "./Actions/KlasemenSlice";
import PertandinganSlice from "./Actions/PertandinganSlice";
import AktifPertandinganSlice from "./Actions/AktifPertandinganSlice";

export default configureStore({
    reducer: {
        klubs: KlubSlice,
        klasmens: KlasemenSlice,
        pertandingans: PertandinganSlice,
        aktifPertandingans: AktifPertandinganSlice
    }
});