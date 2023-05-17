import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contactenos"
          title="Obtenga ayuda y soporte técnico 
        "
          cover={img}
        />
        <div className="container">
          <form className="shadow">
            <h4>LLene Este Formulario</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Asunto" />
            <textarea cols="30" rows="10"></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
