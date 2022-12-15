import { configureStore} from '@reduxjs/toolkit';
import clients from '../slices/clients'
import products from '../slices/products'
import reviews from '../slices/reviews'
import filters from '../slices/filters'

export const store = configureStore({
    reducer: {
        clients,
        products,
        reviews,
        filters
    }
})