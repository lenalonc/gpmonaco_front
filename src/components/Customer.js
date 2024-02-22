import React, { useState, useContext, useMemo, useEffect } from "react";
import { ReservationContext } from "../context/ReservationContext";
import Select from "react-select";
import countryList from "react-select-country-list";
import CustomerInput from "./CustomerInputField";
import { Country, State, City } from "country-state-city";

const Customer = () => {
  const { customer, setCustomer } = useContext(ReservationContext);
  const [cities, setCities] = useState([]);

  //console.log(City.getAllCities());

  const countries = useMemo(() => countryList().getData(), []);

  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (country) {
      setCities(City.getCitiesOfCountry(country));
      //console.log(City.getCitiesOfCountry(country));
    } else {
      setCities([]);
    }
  }, [country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  return (
    <div className="customer-info-container">
      <h2>Customer Information</h2>
      <form>
        {Object.entries(customer).map(([key, value]) => (
          <CustomerInput
            key={key}
            name={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            type="text"
            required={
              key === "email" ||
              key === "firstName" ||
              key === "lastName" ||
              key === "address1" ||
              key === "postalCode" ||
              key === "country" ||
              key === "place"
            }
            handleChange={handleChange}
            value={value}
            countries={countries}
            setCountry={setCountry}
            country={country}
            cities={cities}
          />
        ))}
      </form>
    </div>
  );
};

export default Customer;
