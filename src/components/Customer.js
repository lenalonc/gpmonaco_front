const Customer = (props) => {
  const { setCustomer } = props;

  return (
    <div className="customer-info-container">
      <h2>Customer Information</h2>
      <form>
        <div className="customer-field">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            className="input-customer"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="customer-field">
          <label htmlFor="firstName">
            First Name<span>*</span>
          </label>
          <input
            className="input-customer"
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </div>
        <div className="customer-field">
          <label htmlFor="lastName">
            Last Name<span>*</span>
          </label>
          <input
            className="input-customer"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <div className="customer-field">
          <label htmlFor="company">Company</label>
          <input
            className="input-customer"
            type="text"
            id="company"
            name="company"
          />
        </div>
        <div className="customer-field">
          <label htmlFor="address1">
            Address Line 1<span>*</span>
          </label>
          <input
            className="input-customer"
            type="text"
            id="address1"
            name="address1"
            required
          />
        </div>
        <div className="customer-field">
          <label htmlFor="address2">Address Line 2</label>
          <input
            className="input-customer"
            type="text"
            id="address2"
            name="address2"
          />
        </div>
        <div className="customer-field">
          <label htmlFor="postalCode">
            Postal Code<span>*</span>
          </label>
          <input
            className="input-customer"
            type="text"
            id="postalCode"
            name="postalCode"
            required
          />
        </div>
        <div className="customer-field">
          <label htmlFor="place">
            Place<span>*</span>
          </label>
          <input
            className="input-customer"
            type="text"
            id="place"
            name="place"
            required
          />
        </div>
        <div className="customer-field">
          <label htmlFor="country">
            Country<span>*</span>
          </label>
          <input
            className="input-customer"
            type="text"
            id="country"
            name="country"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Customer;
