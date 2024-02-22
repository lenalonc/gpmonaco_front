import Total from "./Total";
import { ReservationContext } from "../context/ReservationContext";
import { useEffect, useContext, useCallback, useState } from "react";
import api from "../api/Api";
import DayCard from "./DayCard";
import ZoneCard from "./ZoneCard";
import SuccessUpdate from "./SuccessUpdate";
import DeleteModal from "./DeleteModal";

const UpdateRes = (props) => {
  const { reservation, setReservation, closeForm } = props;
  const { tickets, getTickets, updateTicketQuantity, resetTicketQuantities } =
    useContext(ReservationContext);

  const [dates, setD] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [plans, setPlans] = useState([]);
  const [success, setSuccess] = useState(false);
  const [deletion, setDeletion] = useState(false);

  const initializeTicketQuantities = useCallback(() => {
    if (reservation) {
      reservation.tickets.forEach((rt) => {
        const update = tickets.find((ticket) => ticket.id === rt.dailyPlan.id);
        if (update) {
          updateTicketQuantity(update.id, "set", rt.quantity);
        }
      });
    }
  }, [reservation, updateTicketQuantity]);

  useEffect(() => {
    handleReset();
  }, []);

  useEffect(() => {
    initializeTicketQuantities();
  }, [reservation]);

  const handleReset = () => {
    resetTicketQuantities();
    initializeTicketQuantities();
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

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const filteredPlans = selectedDate
    ? plans.filter((plan) => plan.day.date === selectedDate)
    : [];

  const ticketsGoodForm = () => {
    const preTickets = getTickets();

    const updatedTickets = preTickets.map((tick) => {
      const update = reservation.tickets.find(
        (ticket) => ticket.dailyPlan.id === tick.dailyPlan.id
      );
      if (update) {
        return {
          ...tick,
          id: update.id,
        };
      } else {
        return tick;
      }
    });

    return updatedTickets;
  };

  const handleDelete = () => {
    // const deleteRes = async () => {
    //   try {
    //     const response = await api.delete("/reservation/" + reservation.id);
    //     console.log("Reservation deleted successfully");
    //   } catch (err) {
    //     if (err.response) {
    //       console.log(err.response.data);
    //       console.log(err.response.status);
    //       console.log(err.response.headers);
    //     } else {
    //       console.log(`Error: ${err.message}`);
    //     }
    //   }
    // };

    setDeletion(true);
    // deleteRes();
    // closeForm();
  };

  const handleSave = async () => {
    console.log(getTickets());
    console.log(ticketsGoodForm());

    let updatedReservation;

    await setReservation((prevReservation) => {
      updatedReservation = {
        ...prevReservation,
        tickets: ticketsGoodForm(),
      };
      return updatedReservation;
    });

    try {
      const response = await api.put(
        "/reservation/" + reservation.id,
        updatedReservation
      );
      console.log("Reservation updated successfully:", response.data);
      setSuccess(true);
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

  const handleClose = () => {
    handleReset();
    closeForm();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5 className="modal-title">Update Your Reservation</h5>
          <button type="button" className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="conatiner">
            <Total />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleReset}
          >
            Reset
          </button>

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

        <div className="modal-footer-custom update-footer">
          <div className="col" style={{ flex: 0 }}>
            <button
              type="button"
              className="btn btn-primary dlt"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn" onClick={handleClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
      {success && (
        <div>
          <SuccessUpdate
            closeSuccess={() => setSuccess(false)}
            closeUpdateForm={closeForm}
          />
        </div>
      )}
      {deletion && (
        <div>
          <DeleteModal
            closeForm={closeForm}
            closeThis={() => setDeletion(false)}
            resId={reservation.id}
          />
        </div>
      )}
    </div>
  );
};

export default UpdateRes;
