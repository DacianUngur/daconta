import { useState, useEffect } from "react";
import "./buttonorder.css";

function ButtonOrder() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datele introduse:", formData);
    setShowForm(false);
  };
  return (
    <div className="button-main-order">
      <div
        className="button-style modified-button-details"
        onClick={() => setShowForm(true)}
      >
        ÎL VREAU !
      </div>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <h2>Completează datele pentru a fi contactat</h2>
            <form onSubmit={handleSubmit}>
              <div className="line-form-checkout">
                <label>
                  Nume:
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Prenume:
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="line-form-checkout">
                <label>
                  Compania:
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <h4>Produsul tău:</h4>
              <p>Abonament Promovare Online</p>
              <p>
                Prețutile încep de la{" "}
                <span className="text-bold">50 EURO / Lună</span>
              </p>
              <button type="submit">VREAU SĂ FIU CONTACTAT</button>
              <div className="close-button" onClick={() => setShowForm(false)}>
                X
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonOrder;
