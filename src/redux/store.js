import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./slice";

const store = configureStore({
    reducer: catalogReducer
});
