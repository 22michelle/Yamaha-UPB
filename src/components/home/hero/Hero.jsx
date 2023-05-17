import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading className="text-danger"
            title="¿Estas buscando una motocicleta?"
            subtitle="Encuentra las mejores motocicletas en tu ciudad local con Yamaha."
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
