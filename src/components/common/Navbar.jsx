<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
=======
import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26
import "./NavabarStyle.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

export const Navbar = () => {
<<<<<<< HEAD
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

=======
  const location = useLocation();
>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26
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

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

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
<<<<<<< HEAD
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
=======
            {location.pathname !== "/" ? (
              <div className="col m-3">
                <NavLink>
                  <button className="btn" onClick={() => logOut()}>
                    Logout <i className="fa-solid fa-right-to-bracket me-2" />
                  </button>
                </NavLink>
              </div>
            ) : (
              <div className="col m-3">
                <NavLink to="/login">
                  <button className="btn">
                    Login <i className="fa-solid fa-right-to-bracket me-2" />
                  </button>
                </NavLink>
              </div>
>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26
            )}
          </div>
        </div>{" "}
      </nav>
      <Outlet />
    </div>
  );
};
