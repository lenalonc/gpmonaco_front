import Customer from "./Customer";
import DayCard from "./DayCard";
import ZoneCard from "./ZoneCard";
import { useState } from "react";

const CreateRes = (props) => {
  const { dates, closeModalHandler } = props;

  const zones = [
    { id: 1, name: "Zone 1", description: "Description for item 1" },
    { id: 2, name: "Zone 2", description: "Description for item 2" },
    { id: 3, name: "Zone 3", description: "Description for item 3" },
    { id: 4, name: "Zone 4", description: "Description for item 4" },
    { id: 5, name: "Zone 5", description: "Description for item 5" },
  ];

  const [customer, setCustomer] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    postalCode: "",
    place: "",
    country: "",
  });

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
                  dates.map((date, index) => (
                    <div className="col" key={index}>
                      <DayCard date={date} />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="container" style={{ padding: 0 }}>
            <div className="zones">
              {zones &&
                zones.map((zone) => (
                  <div className="col" key={zone.id}>
                    <ZoneCard zone={zone} />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: 80 }}>
          <Customer setCustomer={setCustomer} />
        </div>

        <div className="modal-footer-custom">
          <button type="button" className="btn" onClick={closeModalHandler}>
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRes;
