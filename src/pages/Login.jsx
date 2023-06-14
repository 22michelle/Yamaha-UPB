import React, { useEffect } from "react";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { login, logout, verifyLogin } from "../redux/authSlice";
import { useForm } from "react-hook-form";
import { unwrapResult } from "@reduxjs/toolkit";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  // const isLoged = useSelector((state) => state.auth.isLoged);

  const access = handleSubmit(async (values, e) => {
    e.preventDefault();
    try {
      const response = await dispatch(login(values));

      if (response.type === "authSlice/login/fulfilled") {
        sessionStorage.setItem("token", response.payload.token);
      }
      const token = sessionStorage.getItem("token");
      if (token === response.payload.token) {
        return navigate("/status");
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      dispatch(logout());
    }
  }, [dispatch]);
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
                {...register("docNum", { required: true })}
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
