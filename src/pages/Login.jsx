import React, { useEffect } from "react";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { login, logout, verifyLogin } from "../redux/authSlice";
import { useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  // const isLoged = useSelector((state) => state.auth.isLoged);

  const access = handleSubmit(async (values, e) => {
    e.preventDefault();
    try {
      const response = dispatch(login(values));
      if (checkLoginStatus()) {
        return navigate("/status");
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  const checkLoginStatus = async () => {
    const authToken = sessionStorage.getItem("token");
    if (!authToken) {
      return dispatch(logout());
    }
    return authToken;
  };
  useEffect(() => {
    checkLoginStatus();
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
