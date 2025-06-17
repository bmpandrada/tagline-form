'use client';

import { useState } from 'react';
import { validateForm } from '../utils/validation.js';


export default function FormValidation() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    if (_.isEmpty(newErrors)) {
      alert('Form submitted!');
      setForm({ name: '', email: '', password: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className={`form-group ${errors.password ? 'error' : ''}`}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error-msg">{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
      <footer>
        <p>Powered by:</p>
        <img src="tgc_logo_on_web-min.png" alt="Tagline form" className="logo-form" />
      </footer>
    </div>
  );
}
