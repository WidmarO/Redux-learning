import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productsActions';
import { useHistory } from 'react-router-dom'

const EditProduct = () => {

  // New State for the form (product)
  const [Product, setProduct] = useState({
    name: '',
    price: ''
  })

  // Dispatch
  const dispatch = useDispatch();
  // Edit Action
  const editProduct = product => dispatch(editProductAction(product));
  // Selector
  const ProductEdit = useSelector(state => state.products.productEdit);
  const { name, price } = ProductEdit;
  
  // Use History
  const history = useHistory();

  // On submit form edit product
  const submitEditProduct = e => {
    e.preventDefault();
    editProduct(Product);
    history.push('/productos')
  }

  useEffect(() => {
    setProduct(ProductEdit);    
  },[ProductEdit])

  // On change form edit product
  const onChangeForm = e => {
    setProduct({
      ...Product,      
      [e.target.name] : (e.target.name === "price" ? Number(e.target.value) : e.target.value)
    })
  }

  return (
    <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                            // onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    defaultValue={name}
                                    name="name"                                    
                                    onChange={onChangeForm}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    defaultValue={price}
                                    name="price"                                    
                                    onChange={onChangeForm}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                onClick={submitEditProduct}
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EditProduct
