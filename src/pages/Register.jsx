import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";

const Registro = () => {
  const initialValues = {
    cedula: "",
    password: "",
    nombre: "",
    marcaMoto: "",
    modeloMoto: ""
  };

  const validationSchema = Yup.object().shape({
    cedula: Yup.string().required("Ingrese su número de cédula"),
    password: Yup.string().required("Ingrese su contraseña"),
    nombre: Yup.string().required("Ingrese su nombre"),
    marcaMoto: Yup.string().required("Ingrese la marca de su moto"),
    modeloMoto: Yup.string().required("Ingrese el modelo de su moto")
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
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
            <Field
              type="text"
              id="cedula"
              name="cedula"
              className="form-control"
            />
            <ErrorMessage name="cedula" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <Field
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
            />
            <ErrorMessage name="nombre" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="marcaMoto">Marca de la Moto</label>
            <Field
              type="text"
              id="marcaMoto"
              name="marcaMoto"
              className="form-control"
            />
            <ErrorMessage name="marcaMoto" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="modeloMoto">Modelo de la Moto</label>
            <Field
              type="text"
              id="modeloMoto"
              name="modeloMoto"
              className="form-control"
            />
            <ErrorMessage name="modeloMoto" component="div" className="error-message" />
          </div>
          <button type="submit" className="btn-registro">
            Registrarse
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registro;
