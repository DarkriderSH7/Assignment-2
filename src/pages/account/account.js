import React, { useState } from 'react';

export const Account = ({ user, updateUser }) => {
  // If there's no user, start with empty fields. Otherwise, fill with user data.
  const [formData, setFormData] = useState({
    fullName: user ? user.fullName : '',
    email: user ? user.email : '',
    address: user ? user.address : '',
    city: user ? user.city : '',
    postalCode: user ? user.postalCode : '',
    country: user ? user.country : '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert('Account details updated!');
  };

  return (
    <div>
      <h2>{user ? 'Edit Your Shipping Details' : 'Create an Account'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{user ? 'Update Account' : 'Create Account'}</button>
      </form>
    </div>
  );
};
