import Card from "./Card";
import Details from "./Details";
import Footer from "./Footer";
import MainText from "./MainText";
import Pricing from "./Pricing";
import CreateRes from "./CreateReservation";
import { useState, useEffect, useContext } from "react";
import api from "../api/Api";
import SuccessModal from "./SuccessModal";
import { ReservationContext } from "../context/ReservationContext";

const Main = (props) => {
  const { isModalOpen, openModalHandler, closeModalHandler } = props;

  const [dates, setD] = useState([]);
  const [minPrice, setMinPrice] = useState([]);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [reservationToken, setReservationToken] = useState("");

  const { resetTicketQuantities } = useContext(ReservationContext);

  const handleReservationSuccess = (token) => {
    setReservationToken(token);
    setShowSuccessModal(true);
    closeModalHandler();
    resetTicketQuantities();
  };

  useEffect(() => {
    const getDates = async () => {
      try {
        const response = await api.get("/days");
        setD(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    getDates();
  }, []);

  useEffect(() => {
    const getMinPrice = async () => {
      try {
        const response = await api.get("/days/minprice");
        setMinPrice(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    getMinPrice();
  }, []);

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
        {dates.map((date) => (
          <Card
            key={date.id}
            date={date}
            minPrice={minPrice}
            openModalHandler={openModalHandler}
          />
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
          handleReservationSuccess={handleReservationSuccess}
        ></CreateRes>
      )}
      {showSuccessModal && (
        <SuccessModal
          reservationToken={reservationToken}
          closeModalHandler={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default Main;
