import { createContext, useState, useEffect } from "react";
import api from "../api/Api";

export const ReservationContext = createContext(null);

export const ReservationContextProvider = (props) => {
  const [tickets, setTickets] = useState([]);

  const [customer, setCustomer] = useState({
    email: "",
    firstname: "",
    lastname: "",
    company: "",
    address1: "",
    address2: "",
    postalCode: "",
    place: "",
    country: "",
  });

  useEffect(() => {
    const initializeTickets = async () => {
      try {
        const response = await api.get("/plans");
        const initialTickets = response.data.map((plan) => ({
          ...plan,
          quantity: 0,
        }));
        setTickets(initialTickets);
      } catch (error) {
        console.error("Error initializing tickets:", error);
      }
    };

    initializeTickets();
  }, []);

  const updateTicketQuantity = (ticketId, action, value) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) => {
        if (ticket.id === ticketId) {
          if (action === "increment") {
            return { ...ticket, quantity: ticket.quantity + 1 };
          } else if (action === "decrement") {
            return { ...ticket, quantity: Math.max(ticket.quantity - 1, 0) };
          } else if (action === "set") {
            return { ...ticket, quantity: value };
          }
        }
        return ticket;
      })
    );
  };

  const getTickets = (id) => {
    const selectedTickets = [];
    //console.log("ovde");
    //console.log(tickets);
    tickets.forEach((ticket) => {
      if (ticket.quantity > 0) {
        selectedTickets.push({
          dailyPlan: {
            ...ticket,
          },
          quantity: ticket.quantity,
        });
      }
    });

    return selectedTickets;
  };

  const resetTicketQuantities = () => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) => ({ ...ticket, quantity: 0 }))
    );
  };

  const addIdToTickets = (id) => {
    const updatedTickets = tickets.map((ticket) => ({
      ...ticket,
      id: id,
    }));
    return updatedTickets;
  };

  return (
    <ReservationContext.Provider
      value={{
        tickets,
        updateTicketQuantity,
        getTickets,
        resetTicketQuantities,
        customer,
        setCustomer,
        addIdToTickets,
      }}
    >
      {props.children}
    </ReservationContext.Provider>
  );
};
