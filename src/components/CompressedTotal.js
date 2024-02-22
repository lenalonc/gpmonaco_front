import moment from "moment";
import React, { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";

const CopmTotal = (props) => {
  const { ticket } = props;
  const { quantity, dailyPlan } = ticket;
  const { day, zone } = dailyPlan;
  const { date } = day;
  const { features } = zone;
  const { name } = features;
  const { price } = features;

  const { updateTicketQuantity } = useContext(ReservationContext);

  const handlePlus = () => {
    updateTicketQuantity(ticket.dailyPlan.id, "increment", 0);
  };

  const handleMinus = () => {
    updateTicketQuantity(ticket.dailyPlan.id, "decrement", 0);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value) || 0;
    updateTicketQuantity(ticket.dailyPlan.id, "set", newQuantity);
  };

  const normalDateFormat = moment(date).format("MMMM DD");

  return (
    <div className="comp-total">
      <div className="ticket-info">
        <p className="ticket-text">
          {`${normalDateFormat}, ${name} [${price} €]`}
        </p>
      </div>
      <div className="amount-total">
        <button className="my-button" onClick={handleMinus}>
          -
        </button>
        <input
          type="text"
          className="input-field input-field-amount"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button className="my-button" onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
};

export default CopmTotal;
