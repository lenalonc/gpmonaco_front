import api from "../api/Api";

const DeleteModal = (props) => {
  const { closeForm, closeThis, resId } = props;

  const handleDelete = () => {
    const deleteRes = async () => {
      try {
        const response = await api.delete("/reservation/" + resId);
        console.log("Reservation deleted successfully");
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

    deleteRes();

    closeForm();
    closeThis();
  };

  return (
    <div className="success-overlay">
      <div className="success-container">
        <div className="success-header">
          <h5 className="success-title">Update Successful</h5>
          <button
            type="button"
            className="success-close-btn"
            //  onClick={closeSuccess}
          >
            &times;
          </button>
        </div>
        <div className="success-body">
          <p style={{ fontSize: "larger" }}>Delete</p>
          <p
            style={{
              fontSize: 14,
              marginBottom: 5,
              fontStyle: "italic",
            }}
          >
            Are you sure you want to delete your reservation?
          </p>
        </div>
        <div className="success-footer">
          <button
            type="button"
            className="btn btn-primary no-btn"
            onClick={closeThis}
          >
            No
          </button>
          <button
            type="button"
            className="btn btn-primary success-button"
            onClick={handleDelete}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
