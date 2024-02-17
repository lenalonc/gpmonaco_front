import Card from "./Card";
import Details from "./Details";
import Footer from "./Footer";
import MainText from "./MainText";
import Pricing from "./Pricing";
import CreateRes from "./CreateReservation";
import { useState } from "react";

const Main = (props) => {
  const dates = ["MAY 25th", "MAY 26th", "MAY 27th"];

  const { isModalOpen, openModalHandler, closeModalHandler } = props;

  return (
    <div>
      <div
        id="prvi-tekst"
        className="p-5 text-center bg-body-tertiary rounded-3"
      >
        <img
          id="main-picture"
          src={require("../img/race-car-with-recoil.jpg")}
          width="80%"
          alt="formula"
        />
        <h1 className="text-body-emphasis ti">
          Get your tickets
          <span style={{ color: "#f77234", fontWeight: 640, marginLeft: 10 }}>
            NOW
          </span>
        </h1>
        <p
          className="col-lg-10 mx-auto fs-5 text-muted fix main-text"
          style={{ paddingTop: "100px !important" }}
        >
          The Monaco Grand Prix is one of the most iconic and prestigious events
          in motorsport, held annually on the Circuit de Monaco. This year, the
          event is scheduled to take place from
          <span style={{ color: "#f77234", fontWeight: 630, marginLeft: 5 }}>
            May 25th to May 27th.
          </span>
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {dates.map((date, index) => (
          <Card key={index} date={date} openModalHandler={openModalHandler} />
        ))}
      </div>
      <div id="about">
        <MainText openModalHandler={openModalHandler} />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="details">
        <Details />
      </div>
      <Footer />

      {isModalOpen && (
        <CreateRes
          dates={dates}
          closeModalHandler={closeModalHandler}
        ></CreateRes>
      )}
    </div>
  );
};

export default Main;
