import React, { Fragment, useEffect } from "react";
import Product from "./Product";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();

  // Action to get products from api
  const loadProducts = () => dispatch(getProductsAction());

  useEffect(() => {
    // After component is mounted
    loadProducts();
  },[]);

  // Get the redux state
  const Products = useSelector((state) => state.products.products);
  const Loading = useSelector((state) => state.products.loading);
  const Error = useSelector((state) => state.products.error);


  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      { Error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }

      { Loading ? <p className="font-weight-bold alert alert-info text-center mt-4">Cargando...</p> : null }

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col" style={{width: "40%", textAlign: "center"}}>Nombre</th>
            <th scope="col" style={{width: "30%", textAlign: "center"}}>Precio</th>
            <th scope="col" style={{width: "30%", textAlign: "center"}}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Products.length === 0
            ? "No hay productos"
            : Products.map((product) => (
                <Product  
                  key={product.id}
                  product={product}
                />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
