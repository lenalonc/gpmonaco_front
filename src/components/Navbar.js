import React from "react";
import CreateRes from "./CreateReservation";

const Navbar = (props) => {
  const { isModalOpen, openModalHandler, closeModalHandler } = props;

  return (
    <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul className="spec" style={{ listStyleType: "none" }}>
          <li className="nav-item">
            <img
              id="f1"
              src={require("../img/logoF1.png")}
              height="130px"
              alt="formula1 logo"
            />
          </li>
        </ul>
        <a className="navbar-brand" href="#">
          Monaco Grand Prix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                See your Reservation
              </a>
            </li>
            <li className="nav-item">
              <a id="ikonice" className="nav-link text-secondary">
                <img
                  src={require("../img/telephone-01.png")}
                  height="20px"
                  alt="telefon"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary"  style={{ cursor: "pointer" }}>
                <img
                  src={require("../img/ticket-perforated-01.png")}
                  height="25px"
                  alt="a"
                  style={{ marginLeft: "40px" }}
                  onClick={openModalHandler}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <CreateRes closeModalHandler={closeModalHandler}></CreateRes>
      )}
    </nav>
  );
};

export default Navbar;

