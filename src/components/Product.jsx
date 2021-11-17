import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { deleteProductAction, getEditProductAction } from "../actions/productsActions";

const Product = ({ product }) => {
  const { name, price, id } = product;

  // Dispatch
  const dispatch = useDispatch();
  // useHistory
  const history = useHistory();
  // Action to delete a product
  const deleteProduct = (id) => dispatch(deleteProductAction(id));
  // Action to get the product to edit
  const getEditProduct = (product) => dispatch(getEditProductAction(product));

  const confirmDeleteProduct = (id) => {
    // Show a confirm dialog
    Swal.fire({
      title: "¿Estas seguro?",
      text: "El producto eliminado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar !!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, use the action to delete the product
        deleteProduct(id);
      }
    });
  };

  // Redirect to edit product
  const redirectEditProduct = (product) => {
    getEditProduct(product)
    history.push(`/productos/editar/${product.id}`);
  };
  return (
    <tr>
      <td style={{textAlign: "center"}}>{name}</td>
      <td style={{textAlign: "center"}}>
        {" "}
        <span className="font-weight-bold"> S/. {price} </span>{" "}
      </td>
      <td className="acciones" style={{textAlign: "center"}}>
        <button
          type="button"
          onClick={ () => redirectEditProduct(product)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
