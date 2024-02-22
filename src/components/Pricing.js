import React, { useState, useEffect } from "react";
import api from "../api/Api";

const Pricing = () => {
  const prices = [800, 200, 500, 1200, 2500];
  const [zones, setZones] = useState([]);

  useEffect(() => {
    const getZones = async () => {
      try {
        const response = await api.get("/zones");
        setZones(response.data);
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
    getZones();
  }, []);

  return (
    <div
      className="container-fluid py-5 jmb"
      style={{ paddingBottom: "20px !important" }}
    >
      <h3
        className="display-5 fw-bold jumbo-my"
        style={{ textAlign: "center" }}
      >
        Pricing
      </h3>
      <p className="col-md-12 fs-4 custom-text" style={{ marginTop: "35px" }}>
        Introducing our meticulously crafted selection of pricing tiers and
        seating options for the Monaco Grand Prix, designed to cater to every
        discerning race enthusiast's preferences and budget.
      </p>
      <div className="custom-text">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <strong style={{ color: "#f77234" }}>Main Grandstand:</strong>{" "}
            Located in the heart of the circuit, the Main Grandstand offers
            unparalleled views of the start/finish line, pit lane action, and
            thrilling overtakes.
          </li>
          <li>
            <strong style={{ color: "#f77234" }}>Turn 1 Grandstand:</strong>{" "}
            Positioned near the first corner, the Turn 1 Grandstand provides
            spectators with a close-up view of the high-speed maneuvers and
            intense braking as cars approach the first turn.
          </li>
          <li>
            <strong style={{ color: "#f77234" }}>Infield Grandstand:</strong>{" "}
            Situated in the middle of the track, the Infield Grandstand offers
            panoramic views of the circuit's twists and turns, providing an
            immersive experience amidst the excitement of the race.
          </li>
          <li>
            <strong style={{ color: "#f77234" }}>VIP Tribunes:</strong> Enjoy
            the ultimate luxury experience with our VIP Tribunes, offering
            exclusive seating areas, gourmet catering, and VIP access to the
            most coveted spots on the circuit.
          </li>
          <li>
            <strong style={{ color: "#f77234" }}>General Admission:</strong>{" "}
            Ideal for fans seeking flexibility and affordability, General
            Admission tickets grant access to various viewing areas around the
            circuit, allowing you to soak up the atmosphere from different
            vantage points.
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="image-with-text">
          <img className="mapa" src={require("../img/mapa.jpg")} alt="map" />
          <div className="pricing">
            <h2 className="pricing-h2">Pricing:</h2>
            <div className="custom-list">
              {zones.length > 0 && (
                <>
                  <ul style={{ listStyleType: "none" }}>
                    <li className="li-price">
                      <strong className="price-strong">
                        [1] Turn 1 Grandstand:
                      </strong>{" "}
                      from{" "}
                      <span
                        className="price-span"
                        style={{ fontWeight: "bolder", fontSize: "large" }}
                      >
                        {zones[3].features.price}&euro;
                      </span>
                    </li>
                    <li className="li-price">
                      <strong className="price-strong">
                        [2, 3, 4, 5] General Admission:
                      </strong>{" "}
                      from{" "}
                      <span
                        className="price-span"
                        style={{ fontWeight: "bolder", fontSize: "large" }}
                      >
                        {zones[0].features.price}&euro;
                      </span>
                    </li>
                    <li className="li-price">
                      <strong className="price-strong">
                        [6 - 11] Infield Grandstand:
                      </strong>{" "}
                      from{" "}
                      <span
                        className="price-span"
                        style={{ fontWeight: "bolder", fontSize: "large" }}
                      >
                        {zones[1].features.price}&euro;
                      </span>
                    </li>
                    <li className="li-price">
                      <strong className="price-strong">
                        [12 - 16] Main Grandstand:
                      </strong>{" "}
                      from{" "}
                      <span
                        className="price-span"
                        style={{ fontWeight: "bolder", fontSize: "large" }}
                      >
                        {zones[2].features.price}&euro;
                      </span>
                    </li>
                    <li className="li-price">
                      <strong className="price-strong">
                        [17, 18, 19] VIP Tribunes:
                      </strong>{" "}
                      from{" "}
                      <span
                        className="price-span"
                        style={{ fontWeight: "bolder", fontSize: "large" }}
                      >
                        {zones[4].features.price}&euro;
                      </span>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
