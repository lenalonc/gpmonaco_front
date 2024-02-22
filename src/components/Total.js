import React, { useContext, useEffect, useState } from "react";
import { useMemo } from "react";
import { ReservationContext } from "../context/ReservationContext";
import CopmTotal from "./CompressedTotal";
import api from "../api/Api";

const Total = () => {
  const { getTickets } = useContext(ReservationContext);

  const tickets = useMemo(() => getTickets(), [getTickets]);

  const [total, setTotal] = useState();

  useEffect(() => {
    const reservationData = {
      tickets: getTickets(),
    };
    const fetchData = async () => {
      if (tickets.length > 0) {
        try {
          const response = await api.post(
            "/reservation/price",
            reservationData
          );
          setTotal(response.data);
        } catch (err) {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      } else {
        setTotal({ discount: 0, price: 0 });
      }
    };

    fetchData();
  }, [tickets]);

  return (
    <div>
      {total && (
        <div className="total-container">
          <div className="total-items">
            {tickets.map((ticket) => (
              <CopmTotal key={ticket.dailyPlan.id} ticket={ticket} />
            ))}
          </div>

          <div className="total-label">
            <span className="discount">Discount: {total.discount}%</span>
            <span className="total-amount">Total: {total.price}&euro;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Total;
