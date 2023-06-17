import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../pages/Status.css";

const Status = () => {
  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((response) => {
        setMotorcycles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "ok":
        return { color: "green" };
      case "Asignacion Pendiente":
        return { color: "orange" };
      case "Autorizacion Pendiente":
        return { color: "red" };
      case "Repuestos Pendientes":
        return { color: "red" };
      case "Trabajo Externo Pendiente":
        return { color: "red" };
      case "Proceso Reparacion":
        return { color: "blue" };
      default:
        return { color: "black" };
    }
  };

  // Datos de motocicletas falsos
  const motorcycles = [
    {
      id: 1,
      client: "Camilo Muñoz",
      typeService: "garantias",
      placa: "23br1",
      duration: "5 días",
      status: "Asignacion Pendiente",
      price: "$5.98",
      startTime: "20-07-2023",
      endTime: "25-07-2023",
    },
    {
      id: 2,
      client: "Juan Esteban",
      typeService: "garantias",
      placa: "23br1",
      duration: "5 días",
      status: "Proceso Reparacion",
      price: "$5.98",
      startTime: "20-07-2023",
      endTime: "25-07-2023",
    },
    {
      id: 3,
      client: "Emanuel",
      typeService: "garantias",
      placa: "23br1",
      duration: "5 días",
      status: "ok",
      price: "$50.000",
      startTime: "20-07-2023",
      endTime: "25-07-2023",
    },
  ];

  const [selectedMotorcycle, setSelectedMotorcycle] = useState(null);

  const handleMotorcycleClick = (motorcycle) => {
    setSelectedMotorcycle(motorcycle);
  };

  return (
    <div className="body2">
      <div className="status">
        {/* título */}
        <h1 className="fw-bold">Orden de mi motocicleta</h1>

        {/* fondo blue */}
        <div className="details p-4">
          <span className="card p-4">Mis Órdenes anteriores</span>

          {motorcycles.map((motorcycle) => (
            <div className="status-container">
              {/* contenido */}
              <div className="status-item">
                <div className="status-item-title">
                  {/* nombre cliente */}
                  <p className="text-black">{motorcycle.client}</p>
                  <p style={getStatusColor(motorcycle.status)}>
                    <i className="fa-sharp fa-solid fa-circle m-2"></i>
                    {motorcycle.status}
                  </p>

                  {/* button */}
                  <Link to={`/details/${motorcycle.id}`}>
                    <button
                      className="btn"
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
