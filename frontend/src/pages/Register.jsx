import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${config.AUTH_SERVICE_URL}/register`, user)
      .then(response => {
        console.log('Registration Success:', response.data);
        alert('Registration Successful!');
      })
      .catch(error => {
        console.error('Registration Failed:', error);
        alert('Registration Error');
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
