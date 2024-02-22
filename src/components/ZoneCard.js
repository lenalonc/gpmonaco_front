import { useState, useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";

const ZoneCard = (props) => {
  const { plan } = props;
  const [amount, setAmount] = useState(0);

  const { tickets, updateTicketQuantity } = useContext(ReservationContext);
  const ticket = tickets.find((ticket) => ticket.id === plan.id);

  const handleMinus = () => {
    updateTicketQuantity(ticket.id, "decrement", 0);
  };

  const handlePlus = () => {
    updateTicketQuantity(ticket.id, "increment", 0);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value) || 0;
    updateTicketQuantity(ticket.id, "set", newQuantity);
  };

  return (
    <div className="zone-container">
      <div className="card w-5 mb-2 zone-card">
        <div className="card-body">
          <h5
            className="card-title"
            style={{ color: "#f77234", textAlign: "left" }}
          >
            {plan.zone.features.name}
          </h5>
          <p className="zone-txt" style={{ textAlign: "left" }}>
            TV:{" "}
            <span className="zone-spec">
              {plan.zone.features.tv ? (
                <span className="zone-spec">YES</span>
              ) : (
                <span className="zone-spec">NO</span>
              )}
            </span>
            <span style={{ marginLeft: 20 }}>Handicap accessible:</span>{" "}
            <span className="zone-spec">
              {plan.zone.features.dsb ? (
                <span className="zone-spec">YES</span>
              ) : (
                <span className="zone-spec">NO</span>
              )}
            </span>
            <span style={{ marginLeft: 20 }}>Seats left:</span>{" "}
            <span className="zone-spec">{plan.capacity}</span>
          </p>{" "}
        </div>
      </div>
      <div className="price-card">
        <p className="price">{plan.zone.features.price}&euro;</p>
      </div>
      <div className="amount">
        <button className="my-button" onClick={handleMinus}>
          -
        </button>
        <input
          type="text"
          className="input-field input-field-amount"
          value={ticket.quantity}
          onChange={handleQuantityChange}
        />
        <button
          className="my-button"
          style={{ marginRight: "2em" }}
          onClick={handlePlus}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ZoneCard;
