import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    catalog: [],
    catalogFiltered: [],
    favorites: []
}

export const catalogSlice = createReducer(initialState, (builder) => {
    builder
        .addCase()
});