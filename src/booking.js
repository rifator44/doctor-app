// src/Booking.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Booking() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Book Service #{serviceId}</h1>
      <p>Please fill out the form below to schedule your appointment.</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          alert(`You’ve booked service ${serviceId}!`);
          navigate('/services');
        }}
      >
        <label>
          Your Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Preferred Date:
          <input type="date" name="date" required />
        </label>
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;