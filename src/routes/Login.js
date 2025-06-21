import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../Attachments/Image/Logo.jpg";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        setMsg(null);
      }
    }
  };

  const className = {
    outerBox:
      "bg-gray-700 min-h-screen w-full py-32 flex items-center justify-center relative",
    box: "mx-auto flex justify-center",
    link: "absolute md:left-16 top-5",
    logo: "h-20 rounded-md",
    title: "font-semibold font-Poppins text-2xl mb-10 text-center",
    innerBox: "w-96",
    form: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    warnText: "text-center text-red-500 mb-4",
    formSpacing: "mb-4",
    formLabel: "block text-gray-700 text-sm font-bold mb-2",
    formInput:
      "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    submitBox: "flex mt-2 items-center justify-between",
    formSubmit:
      "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
  };

  return (
    <section className={className.outerBox}>
      <a href="/" className={className.link}>
        <img src={Logo} className={className.logo} />
      </a>
      <div className={className.box}>
        <div className={className.innerBox}>
          <form onSubmit={Auth} className={className.form}>
            <h2 className={className.title}>Login</h2>
            <div className={className.formSpacing}>
              <label className={className.formLabel}>Email or Username</label>
              <input
                type="text"
                className={className.formInput}
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={className.formSpacing}>
              <label className={className.formLabel}>Password</label>
              <input
                type="password"
                className={className.formInput}
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className={className.warnText}>{msg}</p>

            <div className={className.submitBox}>
              <button type="submit" className={className.formSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
