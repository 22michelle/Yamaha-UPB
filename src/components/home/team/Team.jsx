import React from "react";
import Heading from "../../common/Heading";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="¿NECESITAS AYUDA?"
            subtitle="Tenemos a tu disposición canales para que resuelvas tus dudas, ¡contáctanos!:"
          />
          <div className="row">
            <div className="col">
              <div className="content mtop">
                <div className="box">
                  <div className="content">
                    <h4>
                      <i className="fa-regular fa-envelope" />
                      <br />
                      Correo Eléctronico
                    </h4>
                    <p>
                      <button 
                        className="btn"
                        rel="noreferrel"
                        href="mailto:info@incolmotos-yamaha.com.co"
                      >
                        info@incolmotos-yamaha.com.co
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content mtop">
                <div className="box">
                  <div className="content">
                    <h4>
                      <i className="fa fa-phone" />
                      <br />
                      Llamános
                    </h4>
                    <p>
                      <button className="btn" rel="noreferrel" href="tel:018000939262">
                        018000939262
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content mtop">
                <div className="box">
                  <div className="content">
                    <h4>
                      <i className="fa-thin fa-comment" />
                      <br />
                      Usa nuestro chat interno
                    </h4>
                    <p>
                      <button className="btn" rel="noreferrel" href="">
                        Escribenos
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
