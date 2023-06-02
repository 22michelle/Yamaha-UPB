import React from "react";
import "../pages/Status.css";
import { Link } from "react-router-dom";

const Status = () => {
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

  const [selectedMotorcycle, setSelectedMotorcycle] = React.useState(null);

  return (
    <div className="body2">
      <div className="status">
        <h1 className="fw-bold">Orden de mi motocicleta</h1>
        <div className="details p-4">
          {" "}
          <span className="card p-4">Mis Ordenes anteriores</span>
          {motorcycles.map((motorcycle) => (
            <div
              className="status-container"
              key={motorcycle.id}
              onClick={() => setSelectedMotorcycle(motorcycle.id)}
            >
              <div className="status-item">
                <div className="status-item-title">
                  <h3 className="text-black">
                    {motorcycle.brand} {motorcycle.model}
                  </h3>
                  <p style={getStatusColor(motorcycle.status)}>
                    <i className="fa-sharp fa-solid fa-circle m-2"></i>
                    {motorcycle.status}
                  </p>
                  <Link to="/detail">
                    <button className="btn"> {motorcycle.details}</button>
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
