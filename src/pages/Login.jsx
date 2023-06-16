<<<<<<< HEAD
import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";
=======
import React, { useEffect } from "react";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { login, logout, verifyLogin } from "../redux/authSlice";
import { useForm } from "react-hook-form";
>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  // const isLoged = useSelector((state) => state.auth.isLoged);

<<<<<<< HEAD
  const dispatch = useDispatch();

  const handleLogin = (user) => {
    dispatch(login(user));
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const [error, setError] = useState(null);

  const validationSchema = Yup.object().shape({
    cedula: Yup.string().required("Ingrese su número de cédula"),
    password: Yup.string().required("Ingrese su contraseña"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("/auth/login", values);
      if (response.data.success) {
        // Redireciona a "/status" route si se logue a el cliente
        window.location.href = "/status";
      } else {
        setError("Usuario no encontrado en la base de datos");
      }
    } catch (error) {
      setError(
        "Error al iniciar sesión. Por favor, verifique sus credenciales."
      );
    }
=======
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
>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26
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

<<<<<<< HEAD
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <Field name="password">
                {({ field }) => (
                  <div className="input-with-icon">
                    <i className="fa-solid fa-key fs-4 m-2" />
                    <input
                      {...field}
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />

              <p>
                ¿Aún no tienes una cuenta? Regístrate{" "}
                <Link to="/register" className="p">
                  aquí
                </Link>
                .
              </p>
            </div>
            {/* <Link to="/status" className="text-decoration-none"> */}
            <button type="submit" onClick={() => handleLogin({ user: 'exampleUser' })} className="btn-login">
              Iniciar sesión
            </button>
            {/* </Link> */}
          </Form>
        </Formik>
=======
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
>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26
      </div>
    </div>
  );
};

export default Login;
