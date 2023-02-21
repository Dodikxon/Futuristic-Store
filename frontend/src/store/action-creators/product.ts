import axios from "axios";
import {Dispatch} from "redux";
import {ProductAction, ProductActionTypes} from "../../types/product";

const api = 'http://localhost:5000/'

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const ERROR = "Error products not load"
export const createProduct = (title: string, description: string, rating: string, game: string, userId: number, image: File | undefined, price: number | undefined) =>{
    const response = axios.post(`${api}products/create`, {
        title: title,
        description: description,
        rating: rating,
        game: game,
        userId: userId,
        image: image,
        price: price
    },
        )
        .then((response) => {
            if (response.data.token){
                return response.data
            }
        })
}

export const fetchProducts = () => {
    return async (dispath: Dispatch<ProductAction>) => {
        try {
            dispath({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get(`${api}products`)
            setTimeout(() => {
                dispath({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
            }, 500)

        }catch (e){
            dispath({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: ERROR})
        }
    }
}