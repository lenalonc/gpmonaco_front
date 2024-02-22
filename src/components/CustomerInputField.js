import Select from "react-select";
import { ReservationContext } from "../context/ReservationContext";
import { useContext, useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

const CustomerInput = ({
  name,
  label,
  type,
  required,
  handleChange,
  countries,
  value,
  setCountry,
  country,
  cities,
}) => {
  const { customer, setCustomer } = useContext(ReservationContext);
  const [plchldCity, setPlchldCity] = useState(
    "Please select your country first"
  );

  useEffect(() => {
    setPlchldCity("Choose your city");
  }, [country]);

  const handleCountryChange = (selectedOption) => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      country: selectedOption.label,
      place: null,
    }));
    setCountry(selectedOption.value);
  };

  const handleCityChange = (selectedOption) => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      place: selectedOption ? selectedOption.value : null,
    }));
  };

  return (
    <div className="customer-field">
      <label htmlFor={name} style={{ textAlign: "left" }}>
        {label}
        {required && <span>*</span>}
      </label>
      {name === "country" ? (
        <Select
          id={name}
          name={name}
          required={required}
          options={countries}
          placeholder="Select a country"
          value={countries.find((country) => country.label === value)}
          classNamePrefix="custom-select"
          onChange={(selectedOption) => handleCountryChange(selectedOption)}
        />
      ) : name === "place" ? (
        <Select
          id={name}
          name={name}
          required={required}
          options={cities.map((city) => ({
            value: city.name,
            label: city.name,
          }))}
          placeholder={plchldCity}
          onChange={handleCityChange}
          isDisabled={!country}
          classNamePrefix="custom-select city"
        />
      ) : (
        <input
          className="input-customer"
          type={type}
          id={name}
          name={name}
          required={required}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default CustomerInput;
