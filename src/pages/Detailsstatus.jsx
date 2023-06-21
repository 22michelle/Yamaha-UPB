import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faClock,
  faSadCry,
} from "@fortawesome/free-solid-svg-icons";
import "../pages/Status.css";
import { getServiceById } from "../redux/serviceSlice";

const Detailsstatus = () => {
  const { services } = useSelector((status) => status.serviceStore);

  const dispatch = useDispatch();

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

  // Obtener el ID de la motocicleta seleccionada desde la URL
  const { _id } = useParams();

  const getService = async () => {
    try {
      const data = await dispatch(getServiceById(_id));
      console.log(data);
      if (!data) {
        return (
          <div className="body2">
            <div className="status mt-5 p-2 m-4 text-center">
              <div className="details card mt-5 m-1 p-3">
                <div className="card-header bg-white">
                  <div className="status-container">
                    <h1 className="text-black">
                      Los detalles de esta motocicleta no existen{" "}
                      <FontAwesomeIcon icon="fa-light fa-face-sad-cry" />
                    </h1>
                    <FontAwesomeIcon icon={faSadCry} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getService();
  }, [_id]);

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
                  <h3 className="text-black">Estado</h3>
                  <p style={getStatusColor(services.state)}>
                    <i
                      className="fa-solid fa-motorcycle m-2"
                      style={{
                        color: "green",
                      }}
                    ></i>
                    En proceso de Reparación
                  </p>
                </div>
                <div className="status-item-details text-black">
                  <p>
                    <i className="fa-solid fa-address-book m-2"></i>
                    Orden: 125
                  </p>
                </div>
                <div className="status-item-details text-black">
                  <p>
                    <i className="fa-solid fa-calendar-days m-2"></i>
                    Comienzo del Proceso: 2023-06-01
                  </p>
                </div>
                <div className="status-item-details text-black">
                  <p>
                    <i className="fa-solid fa-calendar-days m-2"></i>
                    Fecha estimada de finalización: 2023-06-03
                  </p>
                </div>
                <div className="status-item-details text-black">
                  <p>
                    <i
                      className="fa-solid fa-circle-exclamation m-2"
                      style={{ color: "red" }}
                    ></i>
                    Novedades: No reportadas/Inexistentes
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
