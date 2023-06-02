import React from "react";
import "./Status.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faClock,
  faFaceSadCry,
} from "@fortawesome/free-solid-svg-icons";

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

  const { motorcycleId } = useParams();

  const selectedMotorcycle = motorcycles.find(
    (motorcycle) => motorcycle.id === parseInt(motorcycleId)
  );

  if (!selectedMotorcycle) {
    return (
      <div className="body3">
        No se encontraron detalles de la motocicleta seleccionada{" "}
        <FontAwesomeIcon className="icon" icon={faFaceSadCry} />
        <Link to="/status" className="return p-3">
          <i className="fa-solid fa-angle-right fa-flip-both text-decoration-none"></i>{" "}
          Volver
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="body3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Motocicleta</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {selectedMotorcycle.brand} {selectedMotorcycle.model}
                </h6>
                <p className="card-text">{selectedMotorcycle.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailsstatus;
