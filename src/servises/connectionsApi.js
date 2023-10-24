import axios from('axios');

axios.defaults.baseURL = '';

export const getCatalogList = () => {
    return axios.get('/catalog').then(res => res.data);
}

export const getFilteredCatalog = (data) => {
    return axios.get('/catalog/filtered').then(res => res.data);
}

export const patchFavorite = (data) =>{
    return axios.patch('/catalog/favorites').then(res => res.data);
}