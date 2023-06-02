import React from "react";
import "./Status.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faClock,
  faFaceSadCry,
} from "@fortawesome/free-solid-svg-icons";
import "../pages/Status.css";

const Detailsstatus = () => {
  const motorcycles = [
    {
      id: 1,
      brand: "Yamaha",
      model: "MT-07",
      status: "Ok, lista para entregar",
      details: "Más detalles",
    },
    {
      id: 2,
      brand: "Yamaha",
      model: "CBR600RR",
      status: "Pendiente por asignar al técnico",
      details: "Más detalles",
    },
    {
      id: 3,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "Esperando autorización",
      details: "Más detalles",
    },
    {
      id: 4,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "En reparación",
      details: "Más detalles",
    },
    {
      id: 5,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "Esperando por repuestos",
      details: "Más detalles",
    },
    {
      id: 6,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "Pendiente por trabajos externos",
      details: "Más detalles",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ok, lista para entregar":
        return { color: "green" };
      case "Pendiente por asignar al técnico":
        return { color: "orange" };
      case "Esperando autorización":
        return { color: "red" };
      case "Esperando por repuestos":
        return { color: "red" };
      case "Pendiente por trabajos externos":
        return { color: "red" };
      case "En reparación":
        return { color: "blue" };
      default:
        return { color: "black" };
    }
  };

  return (
    <>
      <div className="body2">
        <div className="status">
          {" "}
          <Link to="/status" className="return p-3">
            <i className="fa-solid fa-angle-right fa-flip-both text-decoration-none"></i>{" "}
            Volver
          </Link>
          <div className="status-line">
            <div className="line"></div>
            <span>Pendiente</span>
            <div className="status-icon">
              <FontAwesomeIcon icon={faClock} className="icon-pending" />
            </div>
            <span>Cancelado</span>
            <div className="status-icon">
              <FontAwesomeIcon icon={faTimesCircle} className="icon-error" />
            </div>
            <span>Éxito</span>
            <div className="status-icon">
              <FontAwesomeIcon icon={faCheckCircle} className="icon-success" />
            </div>
          </div>
          <div className="details card m-1 p-3">
            <div className="card-header bg-white">
              <h3 className="card-title m-2">Resumen del mantenimiento</h3>
            </div>
            {motorcycles.map((motorcycle) => (
              <div className="status-container" key={motorcycle.id}>
                <div className="status-item">
                  <div className="status-item-title">
                    <h3 className="text-black">
                      {motorcycle.brand} {motorcycle.model}
                    </h3>
                    <p style={getStatusColor(motorcycle.status)}>
                      <i className="fa-sharp fa-solid fa-circle m-2"></i>
                      {motorcycle.status}
                    </p>
                  </div>
                  <div className="status-item-details text-black">
                    <p>
                      <strong>Más detalles:</strong> {motorcycle.details}
                    </p>
                    <p>
                      <strong>Total a pagar:</strong> ${motorcycle.total}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailsstatus;
