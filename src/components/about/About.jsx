import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back
          name="About Us"
          title="Sobre nosotros - Quienes somos?"
          cover={img}
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Nuestra historia"
              subtitle="Conozca la historia de nuestra empresa y nuestro trabajo"
            />

            <p>
              En la década de 1970 se ensamblaron las primeras motocicletas
              Yamaha en Colombia. Incolmotos Yamaha cumple más de 40 años
              liderando el sector de venta y distribución de motocicletas en el
              país, con más de 1 millón de unidades ensambladas y alrededor de
              900 personas trabajando para la Empresa.
            </p>
            <p>
              Después de ser filial de Coltejer, empresa independiente y de 24
              años de exitosa presencia en el país, Incolmotos Yamaha se
              constituye como tal en el año de 1999. Con participación
              mayoritaria de Yamaha Motor Co., Incolmotos entró a formar parte
              de las empresas del Grupo YAMAHA y a proyectarse por su compromiso
              con la educación, la calidad de vida de los colombianos y el medio
              ambiente.
            </p>
            <button className="btn2">
              {" "}
              <a

                href="https://www.incolmotos-yamaha.com.co/historia-de-yamaha-en-colombia/" 
                className="text-light" Target="_blank"
              >
                Más Sobre Nosotros
              </a> 
            </button>
          </div>{" "}
          <img
            src="./immio.jpg"
            alt=""
            className="img"
            width={100}
            height={100}
          />
        </div>
      </section>
    </>
  );
};

export default About;
