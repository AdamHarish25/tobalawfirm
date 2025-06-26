// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Helmet } from "react-helmet-async";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-dark-white flex items-center justify-center">
      <Helmet>
        <title>Login - Toba Lawfirm</title>
        <meta
          name="description"
          content="Daftar sebagai admin di Toba Lawfirm untuk mengelola konten dan layanan kami. Bergabunglah dengan tim kami dan bantu kami memberikan layanan hukum terbaik."
        />
      </Helmet>
      <Link
        to="/"
        className="absolute top-4 left-4 text-yellow-500 hover:text-yellow-400"
      >
        {" "}
        &lt; Kembali ke Homepage
      </Link>
      {/* <Link
        to="/register"
        className="absolute top-4 right-4 text-yellow-500 hover:text-yellow-400"
      >
        Register Admin &gt;
      </Link> */}
      <div className="bg-dark-gray p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-Playfair_Display">
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-400 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
