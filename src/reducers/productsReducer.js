import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  GET_PRODUCT_EDIT,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
} from '../types'

// eaach reducer has their own state
const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
  productEdit: null,
};

export default function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EDIT_PRODUCT:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload]
      }
    case DELETE_PRODUCT_FAILURE:
    case EDIT_PRODUCT_FAILURE:
    case GET_PRODUCTS_FAILURE:
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }    
    case GET_PRODUCTS: 
      return {
        ...state,
        loading: true
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: true,
        productDelete: payload
      }
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.filter(product => product.id !== state.productDelete),
        productDelete: null
      }
    case GET_PRODUCT_EDIT:
      return {
        ...state,
        productEdit: payload
      }
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productEdit: null,
        products: state.products.map(product => product.id === payload.id ? product = payload : product),
      }

    default:
      return state;
  }
}
