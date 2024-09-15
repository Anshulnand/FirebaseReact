import React, { useState } from "react";
import "./contact.css"; // Import the CSS file

const Reactcontact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });

  const { name, email, mobile, address, message } = formData;

  const handleSubmit = async (e) => {
    if (name && email && mobile && address && message) {
      e.preventDefault();
      const res = await fetch(
        "https://fir-form-b7c47-default-rtdb.firebaseio.com/fierbasereact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            address,
            message,
          }),
        }
      );

      if (res) {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          message: "",
        });
      }
    }
    alert("datastored");
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" method="POST">
      <h2 className="form-title">Get In Touch</h2>

      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Name"
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Mobile Number"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Address"
        />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Your Message"
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  );
};

export default Reactcontact;
