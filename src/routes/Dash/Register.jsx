// src/routes/Dash/Register.jsx (NEW SIMPLIFIED VERSION)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Direct import

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // This console log will now only run ONCE per click
    console.log("Attempting to register user...");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registration successful!");
      navigate('/login');
    } catch (err) {
      // This is where you see the real error now
      console.error("THE REAL ERROR IS:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-white flex items-center justify-center">
      <div className="bg-dark-gray p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-Playfair_Display">Register Admin</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600" required />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-400 disabled:bg-gray-500">
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;