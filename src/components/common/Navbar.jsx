import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavabarStyle.css";

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Aquí puedes realizar la lógica de autenticación, por ejemplo, verificar si hay un token válido en el almacenamiento local

    // Supongamos que la autenticación fue exitosa
    setIsAuthenticated(true);
  }, []);

  const handleLogout = () => {
    // Aquí puedes realizar la lógica de logout, por ejemplo, eliminar el token del almacenamiento local y redirigir al usuario a la página de inicio de sesión


    setIsAuthenticated(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("scrolled", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <NavLink to="/">
            <img
              className="logo"
              src="/src/assets/yamaha-12.svg"
              alt="Yamaha"
              width={150}
              height={30}
            />
          </NavLink>{" "}
          <div className="row flex-end text-wrap">
            {isAuthenticated ? (
              <div className="col m-3">
                <NavLink to="/">
                  <button className="btn" onClick={handleLogout}>
                  Logout
                </button>
                </NavLink>
                
              </div>
            ) : (
              <>
                <div className="col m-3">
                  <NavLink to="/register">
                    <button className="btn text-u">Registro</button>
                  </NavLink>
                </div>
                <div className="col m-3">
                  <NavLink to="/login">
                    <button className="btn">
                      Login <i className="fa-solid fa-right-to-bracket me-2" />
                    </button>
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>{" "}
      </nav>
      <Outlet />
    </div>
  );
};
