import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Status.css";

const Status = () => {
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

  const [selectedMotorcycle, setSelectedMotorcycle] = useState(null);

  const handleMotorcycleClick = (motorcycle) => {
    setSelectedMotorcycle(motorcycle);
  };

  return (
    <div className="body2">
      <div className="status">
        {/* titulo */}
        <h1 className="fw-bold">Orden de mi motocicleta</h1>

        {/* fondo blue */}
        <div className="details p-4">
          <span className="card p-4">Mis Ordenes anteriores</span>

          {motorcycles.map((motorcycle) => (
            <div className="status-container">
              {/* contenido */}
              <div className="status-item">
                <div className="status-item-title">
                  {/* nombre moto */}
                  <h3 className="text-black">
                    {motorcycle.brand} {motorcycle.model}
                  </h3>
                  <p style={getStatusColor(motorcycle.status)}>
                    <i className="fa-sharp fa-solid fa-circle m-2"></i>
                    {motorcycle.status}
                  </p>
                  <p className="text-black">{motorcycle.details}</p>

                  {/* button */}
                  <Link to={`/details/${motorcycle.id}`}>
                    <button
                      className="btn"
                      key={motorcycle.id}
                      onClick={() => handleMotorcycleClick(motorcycle)}
                    >
                      Ver detalles
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
