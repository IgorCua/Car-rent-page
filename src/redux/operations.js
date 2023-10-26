import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    getCatalogListApi,
    getCatalogFilteredApi,
    getCatalogFavoriteApi,
    // patchFavoriteApi
} from "../servises/connectionsApi";

const fetchCatalog = createAsyncThunk(
    "catalog/fetchCatalog",

    async (_, thunkAPI) => {
        try{
            res = getCatalogListApi();
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

const fetchCatalogFiltered = createAsyncThunk(
    'catalog/fetchCatalogFiltered',

    async (_, thunkAPI) => {
        try{
            res = getCatalogFilteredApi();
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

const fetchCatalogFavorite = createAsyncThunk(
    'catalog/fetchCatalogFavorite',

    async(_, thunkAPI) => {
        try{
            res = getCatalogFavoriteApi();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);