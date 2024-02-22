import React from "react";
import moment from "moment";

const DayCard = (props) => {
  const { date, handleDateClick, isSelected } = props;
  const normalDateFormat = moment(date.date).format("MMMM DD");

  return (
    <div className="col-md-4 mb-3" onClick={() => handleDateClick(date.date)}>
      <div
        className={`card day ${isSelected ? "selected" : ""}`}
        style={{ width: "18rem", margin: "10px" }}
      >
        <div className="card-body card-custom">
          <h3
            className="card-title"
            style={{
              fontWeight: "bolder",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {normalDateFormat}
          </h3>
          <p className="card-text" style={{ fontWeight: "bold" }}>
            Morning race: 10am <br />
            Afternoon race: 1pm <br />
            Evening race: 10pm
          </p>
          <p
            style={{
              fontSize: "xx-small",
              textAlign: "center",
              marginTop: "1em",
              marginBottom: "1px",
            }}
          >
            © 2024 GRAND PRIXDE MONACO&trade;
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
