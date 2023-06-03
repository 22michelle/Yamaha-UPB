import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contacto</h3>
            <p>
              <a
                href="https://www.google.com/search?q=yamaha+san+diego&rlz=1C1ALOY_esCO1038CO1038&oq=ya&aqs=chrome.1.69i60j69i59j46i199i433i465i512j69i60l5.4416j0j7&sourceid=chrome&ie=UTF-8#rlimm=11441585810653034062&lpg=cid:CgIgAQ%3D%3D,ik:CAoSLEFGMVFpcFBnd1V1LWREclZqUE14WUFyRHlLR1Z3UmJWXzlxbERRVzU1Vkds"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-location-dot me-1" />
                Cl. 37 #45-15 YAMAHA San Diego
              </a>
            </p>
            <a href="tel:42321316">
              <i class="fa-solid fa-phone me-1"></i>Teléfono: 42321316
            </a>
            <br />
            <a href="mailto:ejeyd@example.com">
              <i class="fa-solid fa-envelope me-1 mt-3"></i>Email:
              info@incolmotos-yamaha.com.co
            </a>
          </div>
          <div className="col-md-6">
            <h3>Síguenos en redes sociales</h3>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.facebook.com/yamahamundoyamaha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                  <span className="p-1">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mundoyamaha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="p-1">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/mundoyamaha1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                  <span className="p-1">Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row1">
          <div className="col-md-12">
            <p className="text-center">&copy; {currentYear} Diseñado por UPB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
