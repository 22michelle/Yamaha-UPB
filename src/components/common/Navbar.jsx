import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./NavabarStyle.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

export const Navbar = () => {
  const location = useLocation();
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
          <NavLink to="/" onClick={() => logOut()}>
            <img
              className="logo"
              src="/src/assets/yamaha-12.svg"
              alt="Yamaha"
              width={150}
              height={30}
            />
          </NavLink>{" "}
          <div className="row flex-end text-wrap">
            {location.pathname === "/" || location.pathname === "/login" ? (
              <div className="col m-3">
                <NavLink to="/login">
                  <button className="btn">
                    Login <i className="fa-solid fa-right-to-bracket me-2" />
                  </button>
                </NavLink>
              </div>
            ) : (
              <div className="col m-3">
                <NavLink>
                  <button className="btn" onClick={() => logOut()}>
                    Logout <i className="fa-solid fa-right-to-bracket me-2" />
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        </div>{" "}
      </nav>
      <Outlet />
    </div>
  );
};
