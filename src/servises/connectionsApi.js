import axios from('axios');

axios.defaults.baseURL = 'http://localhost:4000';

export const getCatalogListApi = () => {
    return axios.get('/catalog').then(res => res.data);
}

export const getCatalogFilteredApi = (data) => {
    const {
        make,
        rentalPrice, 
        mileageFrom, 
        mileageTo
    } = data;

    return axios.get('/catalog/filtered', null, {
        params:{
            make: make,
            rentalPrice: rentalPrice,
            mileageFrom: mileageFrom,
            mileageTo: mileageTo
        }
    })
    .then(res => res.data);
}

export const getCatalogFavoriteApi = (data) => {
    return axios.get('/catalog/favorites').then(res => res.data);
}

export const patchFavoriteApi = (data) => {
    return axios.patch('/catalog/favorites').then(res => res.data);
}