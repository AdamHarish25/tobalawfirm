import React from "react";
import axios from "axios";
import Logo from "../Attachments/Image/Logo.jpg";
import { useNavigate } from "react-router-dom";

const DashBar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className="bg-gray-700 py-4"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container mx-auto">
        <div
          id="navbarBasicExample"
          className="lg:flex lg:items-center lg:w-auto hidden"
        >
          <div className="lg:flex lg:mr-auto">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              <img src={Logo} className="h-20 rounded-md" alt="logo" />
            </a>
          </div>

          <div className="lg:flex lg:w-auto">
            <div className="mt-4 lg:mt-0">
              <button
                onClick={Logout}
                className="text-white border border-white font-bold py-2 px-4 rounded hover:text-gray-700 hover:bg-white"
              >
                Keluar akun
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashBar;
