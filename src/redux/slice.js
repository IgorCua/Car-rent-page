import { createReducer } from "@reduxjs/toolkit";
import { 
    fetchCatalog,
    fetchCatalogFavorite,
    fetchCatalogFiltered
 } from "./operations";

const initialState = {
    catalog: [],
    catalogFiltered: [],
    favorites: [],
    isLoading: false,
    error: null,
    filter: {}
}

export const catalogSlice = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCatalog.fulfilled, (state, action) => {
            state.catalog = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchCatalogFiltered.fulfilled, (state, action) => {
            state.catalogFiltered = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchCatalogFavorite.fulfilled, (state, action) => {
            state.favorites = action.payload;
            state.isLoading = false;
        })
        .addMatcher(action => action.type.endsWith('/pending'), (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addMatcher(action => action.type.endsWith('/rejected'), (state, action) => {
            state.error = action.payload;
        })
});