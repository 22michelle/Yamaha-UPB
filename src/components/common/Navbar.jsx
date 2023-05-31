import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavabarStyle.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary top-fixed">
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
            <div className="col m-3">
              <NavLink to="/register">
                <button className="btn text-u">Registro</button>
              </NavLink>
            </div>
            <div className="col m-3">
              <NavLink to="/login">
                <button className="btn">
                  Login <i class="fa-solid fa-right-to-bracket me-2" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>{" "}
      </nav>
      <Outlet />
    </div>
  );
};
