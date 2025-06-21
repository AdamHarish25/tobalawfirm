import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import DashBar from "../Components/DashBar";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getContacts();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getContacts = async () => {
    const response = await axiosJWT.get("http://localhost:5000/allContacts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setContacts(response.data);
  };

  return (
    <div className="w-full space-y-5 h-screen bg-slate-600 text-white">
      <DashBar />
      <div className="w-full px-10">
        <h1 className="text-2xl font-semibold mb-5">
          Selamat datang 👋 {name}
        </h1>
        <table className="table-auto w-full flex-col items-center justify-center overflow-y-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Nama</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Layanan</th>
              <th className="px-4 py-2 border">No Telp</th>
              <th className="px-4 py-2 border">Pesan</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{contact.name}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.service}</td>
                <td className="border px-4 py-2">{contact.phone}</td>
                <td className="border px-4 py-2">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
