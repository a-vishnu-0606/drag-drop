import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./cardsSlice";

const Store=configureStore({
    reducer:{
        cards: CardReducer
    }
})

export default Store;