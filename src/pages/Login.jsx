import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";

const Login = () => {
  const initialValues = {
    cedula: "",
    password: "",
  };

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
  };

  return (
    <div className="body1">
      <div className="login-form-container">
        {/* button return */}
        <Link to="/">
          <button className="btn-return-login">
            <i className="fa-solid fa-x mt-1"></i>
          </button>
        </Link>
        <h2 className="text-u">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="cedula">Cédula</label>
              <Field name="cedula">
                {({ field }) => (
                  <div className="input-with-icon">
                    <i className="fa-solid fa-address-card fs-4 m-2" />
                    <input
                      {...field}
                      type="text"
                      id="cedula"
                      className="form-control"
                      placeholder="Ingrese su cédula"
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="cedula"
                component="div"
                className="error-message"
              />
            </div>

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
      </div>
    </div>
  );
};

export default Login;
