import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faClock,
  faSadCry
} from "@fortawesome/free-solid-svg-icons";
import "../pages/Status.css";

const Detailsstatus = () => {
  const motorcycles = [
    {
      id: 1,
      brand: "Yamaha",
      model: "MT-07",
      status: "Ok, lista para entregar",
      details:
        "Nuestro equipo técnico ha realizado un exhaustivo proceso de revisión y aseguramiento de calidad para garantizar que su motocicleta esté en óptimas condiciones antes de la entrega. Hemos llevado a cabo todos los procedimientos necesarios para asegurar su plena satisfacción. Le invitamos a ponerse en contacto con nuestro departamento de atención al cliente para coordinar los detalles finales de la entrega. Estaremos encantados de programar una fecha y hora conveniente para usted.",
    },
    {
      id: 2,
      brand: "Yamaha",
      model: "CBR600RR",
      status: "Pendiente por asignar al técnico",
      details:
        " En este momento, su motocicleta ha sido asignada a uno de nuestros técnicos y está en proceso de ser atendida.",
    },
    {
      id: 3,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "Esperando autorización",
      details:
        "En este momento, estamos a la espera de recibir la autorización correspondiente para proceder con los trabajos de mantenimiento y reparación solicitados.",
    },
    {
      id: 4,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "En reparación",
      details:
        "Nuestro equipo de técnicos altamente capacitados está trabajando arduamente para llevar a cabo los trabajos de mantenimiento y reparación necesarios.",
    },
    {
      id: 5,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "Esperando por repuestos",
      details:
        "Durante este proceso, su motocicleta está esperando los repuestos y materiales necesarios para llevar a cabo las reparaciones.",
    },
    {
      id: 6,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "Pendiente por trabajos externos",
      details:
        "Su motocicleta se encuentra en espera debido a trabajos externos que deben llevarse a cabo como parte del proceso de mantenimiento. Estamos coordinando con nuestros proveedores y especialistas para realizar estos trabajos adicionales necesarios para garantizar que su motocicleta reciba el mejor cuidado y servicio posible.",
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // realizar el logout
    setIsLoggedIn(false);
  };

  // Obtener el ID de la motocicleta seleccionada desde la URL
  const { id } = useParams();

  // Filtrar el array de motocicletas para obtener los detalles de la motocicleta seleccionada
  const selectedMotorcycle = motorcycles.find(
    (motorcycle) => motorcycle.id === parseInt(id)
  );

  if (!selectedMotorcycle) {
    return (
      <div className="body2">
        <div className="status mt-5 p-2 m-4 text-center">
          <div className="details card mt-5 m-1 p-3">
            <div className="card-header bg-white">
              <div className="status-container">
                <h1 className="text-black">Los detalles de esta motocicleta no existen <FontAwesomeIcon icon="fa-light fa-face-sad-cry" /></h1>
                <FontAwesomeIcon icon={faSadCry} />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

  return (
    <>
      <div className="body2">
        <div className="status">
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
            <span>Exitoso</span>
            <div className="status-icon">
              <FontAwesomeIcon icon={faCheckCircle} className="icon-success" />
            </div>
          </div>
          <div className="details card mt-4 m-1 p-3">
            <div className="card-header bg-white">
              <h3 className="card-title m-2">Resumen del mantenimiento</h3>
            </div>
            <div className="status-container">
              <div className="status-item">
                <div className="status-item-title">
                  <h3 className="text-black">
                    {selectedMotorcycle.brand} {selectedMotorcycle.model}
                  </h3>
                  <p style={getStatusColor(selectedMotorcycle.status)}>
                    <i className="fa-sharp fa-solid fa-circle m-2"></i>
                    {selectedMotorcycle.status}
                  </p>
                </div>
                <div className="status-item-details text-black">
                  <p>
                    <strong>Más detalles:</strong>{" "}
                    {selectedMotorcycle.details}
                  </p>
                  <p>
                    <strong>Total a pagar:</strong> $
                    {selectedMotorcycle.total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailsstatus;
