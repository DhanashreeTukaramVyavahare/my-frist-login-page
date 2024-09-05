// src/LoginPage.js
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsButtonDisabled(!(email.trim() && password.trim()));
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and password are required.');
      return;
    }

    console.log('Submitted Data:', { email, password });

    setSuccessMessage('Login successful!');
    setErrorMessage('');

    setTimeout(() => {
      window.location.reload(); // Refresh the page
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
        </div>
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 flex items-center">
              <FaEnvelope className="absolute left-3 text-gray-500" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 flex items-center">
              <FaLock className="absolute left-3 text-gray-500" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`w-full py-2 px-4 font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              isButtonDisabled
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            Login
          </button>
          {successMessage && (
            <div className="text-green-600 text-center mt-4">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="text-red-600 text-center mt-4">{errorMessage}</div>
          )}
          <div className="text-center mt-4">
            <Link to="/register" className="text-indigo-600 hover:text-indigo-800">Don't have an account? Register here.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
