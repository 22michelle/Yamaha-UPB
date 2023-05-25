import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand bs-secondary-bg" href="#">
            <img
              src="/src/assets/yamaha-12.svg"
              alt="Yamaha"
              width={150}
              height={30}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};
