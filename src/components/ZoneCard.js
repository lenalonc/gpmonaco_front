import { useState } from "react";

const ZoneCard = (props) => {
  const { zone } = props;
  const [amount, setAmount] = useState(0); // State to manage the input value

  const handleMinus = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 0));
  };

  const handlePlus = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  return (
    <div className="card w-5 mb-2 zone-card">
      <div className="card-body">
        <h5
          className="card-title"
          style={{ color: "#f77234", textAlign: "left" }}
        >
          {zone.id}. {zone.name}
        </h5>
        <p className="card-text " style={{ textAlign: "left" }}>
          {zone.description}
        </p>
        <div className="amount">
          <button className="my-button" onClick={handleMinus}>
            -
          </button>
          <input
            type="text"
            className="input-field input-field-amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="my-button"
            style={{ marginRight: "2em" }}
            onClick={handlePlus}
          >
            +
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default ZoneCard;
