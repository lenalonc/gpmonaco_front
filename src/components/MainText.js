const MainText = () => {
  return (
    <div className="MainText">
      <div
        className="container-fluid py-5 jmb"
        style={{ paddingBottom: "20px !important" }}
      >
        <h1
          className="display-5 fw-bold jumbo-my"
          style={{ textAlign: "center" }}
        >
          Grand Prix de Monaco 2024
        </h1>
        <p className="col-md-12 fs-4 custom-text" style={{ marginTop: "35px" }}>
          <span
            style={{ color: "#f77234", fontSize: "large", fontWeight: "bold" }}
          >
            The Monaco Grand Prix
          </span>{" "}
          stands as one of the crown jewels in the world of motorsport, an
          iconic event that transcends mere racing to embody the epitome of
          prestige, glamour, and sheer adrenaline. Set against the backdrop of
          the picturesque Principality of Monaco, this legendary race weaves
          through the narrow streets of Monte Carlo, challenging drivers with
          its tight corners, unforgiving barriers, and unparalleled elegance.
          Since its inception in 1929, the Monaco Grand Prix has captured the
          imaginations of racing enthusiasts worldwide, drawing both seasoned
          veterans and eager newcomers to its hallowed grounds. For drivers,
          mastering the twists and turns of the Monaco circuit represents the
          ultimate test of skill and precision. From the iconic Casino Square to
          the infamous hairpin at Loews, every corner demands unwavering focus
          and nerves of steel, making victory in Monaco a badge of honor coveted
          by all. For spectators, the Monaco Grand Prix offers an experience
          like no other, combining the thrill of high-speed racing with the
          allure of the French Riviera's stunning scenery. Whether you're
          lounging on a yacht in the harbor or soaking up the atmosphere from
          the grandstands, the Monaco Grand Prix promises an unforgettable
          journey into the heart of motorsport history.
        </p>
        <p className="col-md-12 fs-4 custom-text">
          The Monaco Grand Prix is held on the streets of Monte Carlo, a
          district within the city-state of Monaco. Unlike traditional Formula 1
          races that take place on purpose-built circuits, the Monaco Grand Prix
          is unique in that it utilizes public roads and city streets for its
          circuit layout. The Circuit de Monaco, as it's officially known, winds
          its way through the narrow and winding streets of Monte Carlo,
          offering a challenging and thrilling course for drivers and spectators
          alike. The circuit is renowned for its tight corners, elevation
          changes, and close proximity to the city's iconic landmarks. One of
          the most famous sections of the Monaco Grand Prix circuit is the tight
          hairpin turn at the Fairmont Monte Carlo Hotel, known as the Fairmont
          Hairpin or simply the Hairpin. This slow-speed corner requires precise
          handling and careful navigation, making it a favorite spot for
          spectators to witness daring overtakes and dramatic moments.
        </p>
        <p className="col-md-12 fs-4 custom-text">
          This year's Monaco Grand Prix is scheduled to take place from May 25th
          to May 27th. Among the contestants confirmed to compete are Lewis
          Hamilton and Max Verstappen. For those eager to witness the thrilling
          action firsthand, tickets for various zones are now available for
          reservation:{" "}
          <span
            style={{ color: "#f77234", fontWeight: 640, fontSize: "large" }}
          >
            Main Grandstand, Turn 1 Grandstand, Infield Grandstand, VIP
            Tribunes, and General Admission.
          </span>
        </p>
        <p className="col-md-12 fs-4 custom-text" style={{ marginTop: "50px" }}>
          <b style={{ color: "#f77234" }}>
            Secure your place now for an unforgettable experience at the Monaco
            Grand Prix!
          </b>{" "}
          Book your spot for
          <span
            style={{ color: "#f77234", fontWeight: 640, fontSize: "larger" }}
          >
            {" "}
            1
          </span>
          ,
          <span
            style={{ color: "#f77234", fontWeight: 640, fontSize: "larger" }}
          >
            {" "}
            2
          </span>
          , or
          <span
            style={{ color: "#f77234", fontWeight: 640, fontSize: "larger" }}
          >
            {" "}
            3
          </span>{" "}
          days and enjoy a thrilling adventure amidst the heart-pounding action.
          Act fast to take advantage of our special offer: reserve for each day
          and{" "}
          <span
            style={{ color: "#f77234", fontWeight: 640, fontSize: "large" }}
          >
            receive a 10% discount on your ticket!
          </span>{" "}
          Once you've reserved your spot, you'll receive an
          <span
            style={{ color: "#f77234", fontWeight: 640, fontSize: "large" }}
          >
            {" "}
            exclusive code
          </span>{" "}
          that you can share with your friends. When they use this code, they'll
          enjoy a 5% discount on their ticket purchase too! Tickets are limited
          and subject to availability. Don't miss out on this incredible
          opportunity to witness the Monaco Grand Prix live from the best seats
          in the house! Reserve your spot today and get ready for an
          adrenaline-fueled weekend like no other!
        </p>
        <div className="button-container">
          <button
            className="btn btn-primary btn-lg custom-button"
            type="button"
            style={{
              marginTop: "20px",
              padding: "20px",
              fontSize: "large",
              fontWeight: 600,
            }}
          >
            <b>Book Now</b>
          </button>
        </div>
        <p className="col-md-12 fs-4 custom-text" style={{ marginTop: "50px" }}>
          For more information, check{" "}
          <b>
            <a href="#" style={{ fontSize: "large", fontStyle: "italic" }}>
              DETAILS
            </a>
          </b>
        </p>
      </div>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../img/karosel/f5.jpg")}
              className="d-block w-100 karosel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2
                style={{
                  color: "#f77234",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                GALLERY
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/karosel/f1.jpg")}
              className="d-block w-100 karosel"
              alt="slika 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/karosel/f3.jpg")}
              className="d-block w-100 karosel"
              alt="slika 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/karosel/f4.jpg")}
              className="d-block w-100 karosel"
              alt="slika 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/karosel/f6.avif")}
              className="d-block w-100 karosel"
              alt="slika 5"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/karosel/f7.jpg")}
              style={{ width: "73em !important" }}
              className="d-block w-100 karosel"
              alt="slika 6"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ marginLeft: "10em" }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ marginRight: "10em" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MainText;
