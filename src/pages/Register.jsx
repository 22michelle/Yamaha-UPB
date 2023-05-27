import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import { Link } from "react-router-dom";

const Registro = () => {
  const initialValues = {
    cedula: "",
    password: "",
    nombre: "",
    marcaMoto: "",
    modeloMoto: "",
  };

  const validationSchema = Yup.object().shape({
    cedula: Yup.string().required("Ingrese su número de cédula"),
    password: Yup.string().required("Ingrese su contraseña"),
    nombre: Yup.string().required("Ingrese su nombre"),
    marcaMoto: Yup.string().required("Ingrese la marca de su moto"),
    modeloMoto: Yup.string().required("Ingrese el modelo de su moto"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="body">
      <div className="registro-form-container">
        <h2>Registrate</h2>
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
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <Field name="nombre">
                {({ field }) => (
                  <div className="input-with-icon">
                    <i className="fa-solid fa-user fs-4 m-2" />
                    <input
                      {...field}
                      type="text"
                      id="nombre"
                      className="form-control"
                      placeholder="Ingrese su nombre"
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="nombre"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="marcaMoto">Marca de la Moto</label>
              <Field name="marcaMoto">
                {({ field }) => (
                  <div className="input-with-icon">
                    <i className="fa-solid fa-motorcycle fs-4 m-2" />
                    <input
                      {...field}
                      type="text"
                      id="marcaMoto"
                      className="form-control"
                      placeholder="Ingrese la marca de la moto"
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="marcaMoto"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="modeloMoto">Modelo de la Moto</label>
              <Field name="modeloMoto">
                {({ field }) => (
                  <div className="input-with-icon">
                    <i className="fa-solid fa-motorcycle fs-4 m-2" />
                    <input
                    {...field}
                    type="text"
                    id="modeloMoto"
                    className="form-control"
                    placeholder="Ingrese el modelo de la moto"
                    />
                  </div>
                  )}
              </Field>
              <ErrorMessage
                name="modeloMoto"
                component="div"
                className="error-message"
              />
            </div>
            <p>
              ¿Ya tienes una cuenta? Inicia sesión{" "}
              <Link to="/login" className="p">
                aquí
              </Link>
              .
            </p>
            <button type="submit" className="btn-registro">
              Registrarse
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Registro;
