import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";

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
    <div className="login-form-container">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="cedula">Cédula</label>
            <Field
              type="text"
              id="cedula"
              name="cedula"
              className="form-control"
            />
            <ErrorMessage
              name="cedula"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="btn-login">
            Iniciar sesión
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
