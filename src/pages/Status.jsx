import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/Status.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { getServices } from "../redux/serviceSlice";

const Status = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.serviceStore);

  const getStatusColor = (status) => {
    switch (status) {
      case "ok":
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

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  useEffect(async () => {
    await dispatch(getServices());
  }, []);

  return (
    <div className="body2">
      <div className="status">
        {/* titulo */}
        <h1 className="fw-bold">Orden de mi motocicleta</h1>

        {/* fondo blue */}
        <div className="details p-4">
          <span className="card p-4">Mis Ordenes anteriores</span>

          {services.map((service) => (
            <div className="status-container" key={service._id}>
              {/* contenido */}
              <div className="status-item">
                <div className="status-item-title">
                  {/* nombre moto */}
                  <h3 className="text-black">
                    {service.typeService} {service.placa}
                  </h3>
                  <p style={getStatusColor(service.status)}>
                    <i className="fa-sharp fa-solid fa-circle m-2"></i>
                    {service.state}
                  </p>
                  <p className="text-black">Sede: {service.campus}</p>

                  {/* button */}
                  <Link to={`/details/${service._id}`}>
                    <button
                      className="btn"
                      key={service._id}
                      onClick={() => handleServiceClick(service)}
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
