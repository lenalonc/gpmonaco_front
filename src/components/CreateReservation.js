import Customer from "./Customer";
import DayCard from "./DayCard";
import ZoneCard from "./ZoneCard";
import { useState, useEffect, useContext } from "react";
import api from "../api/Api";
import { ReservationContext } from "../context/ReservationContext";
import Total from "./Total";

const CreateRes = (props) => {
  const { dates, closeModalHandler, handleReservationSuccess } = props;

  const [plans, setPlans] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);

  const { getTickets, customer, resetTicketQuantities } =
    useContext(ReservationContext);

  const handleSaveChanges = async () => {
    try {
      const reservationData = {
        tickets: getTickets(),
        customer: customer,
      };

      const response = await api.post("/reservation", reservationData);
      console.log("Reservation saved successfully:", response.data);

      handleReservationSuccess(response.data.token);
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

  useEffect(() => {
    const getPlans = async () => {
      try {
        const response = await api.get("/plans");
        setPlans(response.data);
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
    getPlans();
  }, []);

  useEffect(() => {
    resetTicketQuantities();
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const filteredPlans = selectedDate
    ? plans.filter((plan) => plan.day.date === selectedDate)
    : [];

  return (
    <div className="modal-overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5 className="modal-title">Secure Your Reservation</h5>
          <button
            type="button"
            className="close-btn"
            onClick={closeModalHandler}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="days">
              <div className="row mt-5 row-cols-3">
                {dates &&
                  dates.map((date) => (
                    <div className="col" key={date.id}>
                      <DayCard
                        date={date}
                        handleDateClick={handleDateClick}
                        isSelected={selectedDate === date.date}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {selectedDate && (
            <div
              style={{
                fontStyle: "italic",
                marginBottom: 0,
                marginTop: 20,
                marginLeft: 20,
                color: "#b63f07",
                fontSize: "large",
                textAlign: "left",
              }}
            >
              Each day booked gives you an extra 10% discount!
              <br />
              Catch the early bird discount! Book your seats by March 16th and
              get an extra 10% discount.
            </div>
          )}

          <div className="container" style={{ padding: 0 }}>
            <div className="zones">
              {selectedDate === null ? (
                <p>Plese select a day to view available tickets.</p>
              ) : filteredPlans.length === 0 ? (
                <p>No plans available for the selected date.</p>
              ) : (
                filteredPlans.map((plan) => (
                  <div className="col" key={plan.id}>
                    <ZoneCard plan={plan} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="conatiner">
          <Total />
        </div>

        <div className="container" style={{ marginTop: 50 }}>
          <Customer />
        </div>
        <div className="modal-footer-custom">
          <button type="button" className="btn" onClick={closeModalHandler}>
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSaveChanges}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRes;
