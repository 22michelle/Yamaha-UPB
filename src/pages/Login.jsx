import React, { useState } from "react";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, verifyLogin } from "../redux/authSlice";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoged, setIsLoged } = useSelector((state) => state.authStore);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const initialValues = {
    cedula: "",
    password: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");
  const [showError, setShowError] = useState(false);

  const access = handleSubmit(async (values, e) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Inicia la carga spinner
      console.log(values);
      dispatch(login(values));
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("CORS")) {
        setErrorAlert("El cliente no existe en la base de datos");
        setShowError(true);
      }
    } finally {
      setIsLoading(false); // Finaliza la carga spinner
    }
  });

  return (
    <div className="body1">
      <div className="login-form-container">
        <Link to="/">
          <button className="btn-return-login">
            <i className="fa-solid fa-x mt-1"></i>
          </button>
        </Link>
        <h2 className="text-u">Login</h2>
        {showError && <div className="alert alert-danger">{errorAlert}</div>}
        <form onSubmit={access}>
          <div className="form-group">
            <label htmlFor="cedula">Cédula</label>
            <div className="input-with-icon">
              <i
                className={`fa-solid fa-address-card fs-4 m-2 ${
                  errors.cedula ? "error-icon" : ""
                }`}
              />
              <input
                type="text"
                {...register("cedula", { required: true })}
                id="cedula"
                className={`form-control ${errors.cedula ? "error" : ""}`}
                placeholder="Ingrese su cédula"
              />
              {errors.cedula && (
                <p className="error-message">Este campo es obligatorio</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-with-icon">
              <i
                className={`fa-solid fa-key fs-4 m-2 ${
                  errors.password ? "error-icon" : ""
                }`}
              />
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                className={`form-control ${errors.password ? "error" : ""}`}
                placeholder="Ingrese su contraseña"
              />
              {errors.password && (
                <p className="error-message">Este campo es obligatorio</p>
              )}
            </div>

            <p>
              ¿Aún no tienes una cuenta? Regístrate{" "}
              <Link to="/register" className="p">
                aquí
              </Link>
              .
            </p>
          </div>
          <button type="submit" className="btn-login" disabled={isLoading}>
            {isLoading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin /> Cargando...
              </>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
