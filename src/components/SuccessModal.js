const SuccessModal = (props) => {
  const { reservationToken, promoCode, closeModalHandler } = props;

  return (
    <div className="success-overlay">
      <div className="success-container">
        <div className="success-header">
          <h5 className="success-title">Reservation Successful</h5>
          <button
            type="button"
            className="success-close-btn"
            onClick={closeModalHandler}
          >
            &times;
          </button>
        </div>
        <div className="success-body">
          <p style={{ fontSize: "larger" }}>Your reservation was successful!</p>
          <p style={{ color: "#b63f07", fontWeight: "bolder" }}>
            Reservation Token:
          </p>
          <div className="token-container">
            <p className="token">{reservationToken}</p>
          </div>
          <p
            style={{
              fontSize: 14,
              marginBottom: 5,
              fontStyle: "italic",
            }}
          >
            Save this token in case you want to alter your reservation! You will
            need to provide the token and the email you put in.
          </p>
          <br></br>
          <p
            style={{
              fontSize: 14,
              marginBottom: 5,
            }}
          >
            You can share this promo code to your friend so that they get extra
            5% discount!: <span className="promo">{promoCode}</span>
          </p>
        </div>
        <div className="success-footer">
          <button
            type="button"
            className="btn btn-primary success-button"
            onClick={closeModalHandler}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
