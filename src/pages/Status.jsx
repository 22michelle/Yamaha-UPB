import React from "react";
import "../pages/Status.css";
import { Link } from "react-router-dom";

const Status = () => {
  const motorcycles = [
    { id: 1, brand: "Yamaha", model: "MT-07", status: "Ok" },
    {
      id: 2,
      brand: "Yamaha",
      model: "CBR600RR",
      status: "Pendiente por asignar al técnico",
    },
    {
      id: 3,
      brand: "Yamaha",
      model: "Ninja 300",
      status: "Pendiente por autorización de repuestos o trabajos externos",
    },
    { id: 4, brand: "Yamaha", model: "Ninja 300", status: "En reparación" },
    // Agrega más motocicletas si es necesario
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ok":
        return { color: "green" };
      case "Pendiente por asignar al técnico":
        return { color: "orange" };
      case "Pendiente por autorización de repuestos o trabajos externos":
        return { color: "blue" };
      case "En reparación":
        return { color: "red" };
      default:
        return { color: "black" };
    }
  };

  return (
    <div className="body2">
      <div className="status">
        <h1 className="fw-bold">Orden de mi motocicleta</h1>
        <span>Mis Ordenes anteriores</span>

        {motorcycles.map((motorcycle) => (
          <div className="status-container" key={motorcycle.id}>
            <div className="status-item">
              <div className="status-item-title">
                <h3 className="text-black">
                  {motorcycle.brand} {motorcycle.model}
                </h3>
                <p style={getStatusColor(motorcycle.status)}>
                  <i class="fa-sharp fa-solid fa-circle m-2"></i>
                  {motorcycle.status}
                </p>
                <Link to="/">
                  <button className="btn-more">
                    Ver detalles<i class="fa-sharp fa-light fa-angle-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
