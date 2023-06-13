import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, verifyLogin } from "../redux/authSlice";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoged, setIsLoged } = useSelector((state) => state.authStore);
  const { register, handleSubmit } = useForm();
  const initialValues = {
    cedula: "",
    password: "",
  };

  const access = handleSubmit(async (values, e) => {
    e.preventDefault();
    try {
      console.log(values);
      dispatch(login(values));
    } catch (error) {
      console.log(error.message);
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

        <form onSubmit={access}>
          <div className="form-group">
            <label htmlFor="cedula">Cédula</label>
            <div className="input-with-icon">
              <i className="fa-solid fa-address-card fs-4 m-2" />
              <input
                type="text"
                {...register("cedula", { required: true })}
                id="cedula"
                className="form-control"
                placeholder="Ingrese su cédula"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-with-icon">
              <i className="fa-solid fa-key fs-4 m-2" />
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                className="form-control"
                placeholder="Ingrese su contraseña"
              />
            </div>

            <p>
              ¿Aún no tienes una cuenta? Regístrate{" "}
              <Link to="/register" className="p">
                aquí
              </Link>
              .
            </p>
          </div>
          <button type="submit" className="btn-login">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
