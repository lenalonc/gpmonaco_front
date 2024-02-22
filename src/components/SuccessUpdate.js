const SuccessUpdate = (props) => {
  const { closeSuccess, closeUpdateForm } = props;

  const handleClose = () => {
    closeSuccess();
    closeUpdateForm();
  };

  return (
    <div className="success-overlay">
      <div className="success-container">
        <div className="success-header">
          <h5 className="success-title">Update Successful</h5>
          <button
            type="button"
            className="success-close-btn"
            onClick={closeSuccess}
          >
            &times;
          </button>
        </div>
        <div className="success-body">
          <p style={{ fontSize: "larger" }}>
            Your reservation update was successful!
          </p>
          <p
            style={{
              fontSize: 14,
              marginBottom: 5,
              fontStyle: "italic",
            }}
          >
            Do you wanna update your reservation again?
          </p>
        </div>
        <div className="success-footer">
          <button
            type="button"
            className="btn btn-primary no-btn"
            onClick={handleClose}
          >
            No
          </button>
          <button
            type="button"
            className="btn btn-primary success-button"
            onClick={closeSuccess}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessUpdate;
