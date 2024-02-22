import React, { useState } from "react";

const ValForm = (props) => {
  const { onSubmit, onClose } = props;
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, token });
  };

  return (
    <div className="val-overlay">
      {" "}
      <div className="val-form-container">
        <div className="val-form-header">
          <button type="button" className="val-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="val-form-body">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                className="val-input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="token">Token:</label>
              <input
                className="val-input"
                type="text"
                id="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="val-form-footer">
            <button
              className="btn btn-primary go"
              type="submit"
              onSubmit={onSubmit}
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValForm;
