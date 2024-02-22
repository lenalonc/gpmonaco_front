import moment, { min } from "moment";

const Card = (props) => {
  const { date, minPrice, openModalHandler } = props;

  const normalDateFormat = moment(date.date).format("MMMM DD");

  return (
    <div className="col-md-4 mb-3">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary kartica">
          {" "}
          <h2
            className="my-0 fw-normal"
            style={{ fontWeight: "bolder !important" }}
          >
            {normalDateFormat}
          </h2>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            <small className="text-body-secondary fw-light">from </small>
            {minPrice[date.id]}$
          </h1>
          <p
            style={{
              fontSize: "medium",
              textAlign: "center",
              fontStyle: "oblique",
              fontWeight: 600,
              marginBottom: "25px",
            }}
          >
            Experience the Thrill of Monaco Grand Prix
          </p>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary"
            onClick={openModalHandler}
          >
            <b>SAVE YOUR SPOT</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
