import { API_URL } from "./config";

const getAllProducts = async() => {
    const response = await fetch(API_URL);
    return response.json();
}

const getFilteredProductsByCategory = async(catName) => {
    const response = await fetch(API_URL + '?'  + catName)
    return response.json();
}

const getProductByName = async(catName, productName) => {
    const response = await fetch(API_URL + '?' + catName + '&&name =' + productName);
    return response.json();
}






export {getAllProducts, getFilteredProductsByCategory, getProductByName}