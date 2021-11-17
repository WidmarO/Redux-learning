import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Redux actions
import { createNewProductAction } from '../actions/productsActions'

const NewProduct = ( { history } ) => {
  
  // Component state
  const [Name, setName] = useState()
  const [Price, setPrice] = useState()

  // Dispatch
  const dispatch = useDispatch()

  // Redux state
  const Loading = useSelector(state => state.products.loading)
  const Error = useSelector(state => state.products.error)

  // Call redux action
  const addProduct = product => dispatch(createNewProductAction(product))  

  // On Submit
  const submitNewProduct = (e) => {
    e.preventDefault()

    // validate form
    if(Name && Name.trim() === '' || Price && Price <= 0){
      return; 
    }
    // verify if the form is correct

    // Create the new product
    addProduct({
      name: Name,
      price: Price
    })

    // Redirect to products
    history.push('/productos')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>

            <form
              onSubmit={ submitNewProduct }
            >
              <div className="form-group">
                <label>Nombre Producto</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={ Name || ''}
                  onChange={ e => setName(e.target.value) }
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input 
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="price"
                  value={ Price || '' }
                  onChange={ e => setPrice( Number(e.target.value)) }
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Agregar</button>
        
            </form>
            
            { Loading ? <p> Cargando ... </p> : null }

            { Error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NewProduct
