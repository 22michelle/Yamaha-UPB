import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faClock,
  faSadCry,
} from "@fortawesome/free-solid-svg-icons";
import "../pages/Status.css";
import axios from "axios";

const Detailsstatus = () => {
  // comente esto pq no me funciona la base de datos del backend 
  // const [motorcycles, setMotorcycles] = useState([]);
  // const [selectedMotorcycle, setSelectedMotorcycle] = useState(null);

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
                <h1 className="text-black">
                  Los detalles de esta motocicleta no existen{" "}
                  <FontAwesomeIcon icon={faSadCry} />
                </h1>
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
                  <strong>
                    Más detalles:{" "}
                    <p>
                      <h4 className="text-black">
                        {selectedMotorcycle.client}
                      </h4>
                      <p className="text-black">
                        Duración: {selectedMotorcycle.duration}
                      </p>{" "}
                      <p className="text-black">
                        Placa: {selectedMotorcycle.placa}
                      </p>
                      <p className="text-black">
                        Fecha de inicio: {selectedMotorcycle.startTime}
                      </p>
                      <p className="text-black">
                        Fecha de finalización: {selectedMotorcycle.endTime}
                      </p>
                      {selectedMotorcycle.status === "ok" && (
                        <p className="text-black">
                          Total a pagar: {selectedMotorcycle.price}
                        </p>
                      )}
                    </p>
                  </strong>
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
