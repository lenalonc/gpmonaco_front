import React from "react";

const DayCard = (props) => {
  const date = props.date;
  console.log(date);
  return (
    <div className="col-md-4 mb-3">
      <div className="card day" style={{ width: "18rem", margin: "10px" }}>
        <div className="card-body card-custom">
          <h3
            className="card-title"
            style={{
              fontWeight: "bolder",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {date}
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
