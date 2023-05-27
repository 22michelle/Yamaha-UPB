import React from "react";
import "./HeaderStyles.css";

export const Header = () => {
  return (
    <div className="text-center my-5">
      <div className="banner-container">
        <img src="src/assets/fondo.jpg" alt="" className="img-fluid" />
        <div className="banner-content">
          <h1 className="my-3">Seguimiento de Servicio Técnico</h1>
          <button type="button" className="btn">
            Ingresa Aquí
          </button>
        </div>
      </div>
    </div>
  );
};
