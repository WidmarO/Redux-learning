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

import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

// Create new products
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
    })

    try {
      // Send the post request
      await clientAxios.post('/products', product)

      // If the request is succesfull
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: product
      })

      // Alert success
      Swal.fire(
        'Producto creado',
        'El producto se ha creado correctamente',
        'success'
      ) 
    } catch (error) {
      // Show error message
      console.log(error);

      // If the request fails
      dispatch({
        type: ADD_PRODUCT_FAILURE,
        payload: true
      })

      // Alert error
      Swal.fire(
        'Error',
        'Hubo un error al crear el producto',
        'error'
      )
    }
  }
}

// Get list of the products
export function getProductsAction() {
  return async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
    })

    try {
      // Send the get request
      const response = await clientAxios.get('/products')

      // If the request is succesfull
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      // Show error message
      console.log(error);

      // If the request fails
      dispatch({
        type: GET_PRODUCTS_FAILURE,
        payload: true
      })
    }
  }
}

// Select and delete a product
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    })

    try {
      // Send the delete request
      await clientAxios.delete(`/products/${id}`)

      // If the request is succesfull
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: id
      })
      // Alert success
      Swal.fire(
        'Producto eliminado',
        'El producto se ha eliminado correctamente',
        'success'
      )
    } catch (error) {
      // Show error message
      console.log(error);

      // If the request fails
      dispatch({
        type: DELETE_PRODUCT_FAILURE,
        payload: true
      })

      // Alert error
      Swal.fire(
        'Error',
        'Hubo un error al eliminar el producto',
        'error'
      )
    }
  }
}

// Select edit product
export function getEditProductAction(product) {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCT_EDIT,
      payload: product
    })
  }
}

// Edit a product
export function editProductAction(product) {  
  return async (dispatch) => {
    dispatch({
      type: EDIT_PRODUCT,
    })

    try {
      // Send the put request
      await clientAxios.put(`/products/${product.id}`, product)

      // If the request is succesfull
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: product
      })
      // Alert success
      Swal.fire(
        'Producto editado',
        'El producto se ha editado correctamente',
        'success'
      )

    } catch (error) {
      // Show error message
      console.log(error);

      // If the request fails
      dispatch({
        type: EDIT_PRODUCT_FAILURE,
        payload: true
      })

      // Alert error
      Swal.fire(
        'Error',
        'Hubo un error al editar el producto',
        'error'
      )
    }
  }
}
