import axios from "axios";
import { Database } from "../../../Database/WholeData";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Datas = Database.ContactData;
export const ContactPage_1 = () => {
    const className = {
        container: "w-full text-center p-32 bg-dark-gray",
        title: "text-3xl font-medium font-Playfair_Display"
    };

    const Data = Datas.page_1;

    return(
        <div className={className.container}>
            <h1 className={className.title}>
                {Data.title}
            </h1>
        </div>
    )
};


export const ContactPage_2 = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    
    const addNewData = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/contacts", {
          name: name,
          email: email,
          service: service,
          phone: phone,
          message: message
        });
        console.log("Success!");
        navigate("/");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.msg);
        }
      }
    };

    const className = {
      container:
        "w-full grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center p-10",
      form: "w-full space-y-3 order-2 md:order-1",
      inlineForm: "w-full grid grid-cols-1 md:grid-cols-2 gap-3",
      input:
        "outline-none w-full rounded-lg bg-white/10 active:bg-white/30 py-3 px-5 placeholder-white/60 resize-none",
      button: "px-5 py-3 bg-[#037ef3] text-white rounded",
      innerBox: "space-y-5 order-1 md:order-2",
      list: "flex items-center gap-5",
      icon: "p-5 rounded-full border border-white"
    };

    const Data = Datas.page_2;

    return (
      <div className={className.container}>
        <form
          onSubmit={addNewData}
          className={className.form}
        >
          <div className={className.inlineForm}>
            <input
              type={Data.form.type}
              placeholder={Data.form.placeholder}
              className={className.input}
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type={Data.form1.type}
              placeholder={Data.form1.placeholder}
              className={className.input}
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value.toString())}
            />
          </div>

          <div className={className.inlineForm}>
            <input
              type={Data.form2.type}
              placeholder={Data.form2.placeholder}
              className={className.input}
              value={service}
              required
              onChange={(e) => setService(e.target.value)}
            />
            <input
              type={Data.form3.type}
              placeholder={Data.form3.placeholder}
              className={className.input}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            placeholder={Data.placeholder}
            className={`${className.input} h-[300px]`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={className.button} type="submit">
            {Data.submit.title}
          </button>
        </form>

        <div className={className.innerBox}>
          {Data.lists.map((data, idx) => (
            <div key={idx} className={className.list}>
              <div className={className.icon}>{data.icon}</div>
              <p className={className.paragraph}>{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
}


export const ContactPage_3 = () => {
    const className = {
        container: "w-full h-[400px] border-0",
    };


    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.164328351821!2d106.8396407737406!3d-6.24206216112004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3bf5252f3af%3A0x1f27e45b12c0e6d6!2sGraha%20Mustika%20Ratu!5e0!3m2!1sen!2sid!4v1694925856058!5m2!1sen!2sid"
        className={className.container}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
}