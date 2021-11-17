import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary
    justify-content-between"
    >
      <Link to="/productos">
        <div className="container">
          <h1> CRUD - React, Redux</h1>
        </div>
      </Link>

      <Link
        to="/nuevo_producto"
        className="btn btn-danger nuevo_post d-block d-md-inline-block"
      >
        Agregar Producto
      </Link>
            
    </nav>
  );
};

export default Header;
