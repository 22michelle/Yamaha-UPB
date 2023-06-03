import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    cedula: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    cedula: Yup.string().required("Ingrese su número de cédula"),
    password: Yup.string().required("Ingrese su contraseña"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="body1">
      <div className="login-form-container">
        {/* button return */}
        <Link to="/">
          <button className="btn-return-login">
          <i class="fa-solid fa-x mt-1"></i>
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
            <Link to="/status" className="text-decoration-none">
              <button type="submit" className="btn-login">
                Iniciar sesión
              </button>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
