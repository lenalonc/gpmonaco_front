import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/Main.css";
import "./css/Modal.css";
import "./css/AlterRes.css";
import React, { useContext, useEffect, useState } from "react";
import api from "./api/Api";
import {
  ReservationContext,
  ReservationContextProvider,
} from "./context/ReservationContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <ReservationContextProvider>
        <Navbar
          isModalOpen={isModalOpen}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
        />
        <div className="Main">
          <Main
            isModalOpen={isModalOpen}
            openModalHandler={openModalHandler}
            closeModalHandler={closeModalHandler}
          />
        </div>
      </ReservationContextProvider>
    </div>
  );
}

export default App;
