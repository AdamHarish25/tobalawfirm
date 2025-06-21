import { useNavigate } from "react-router";
import { Database } from "../../../Database/WholeData";
import { FaChevronRight } from "react-icons/fa";
import Tabs from "../../../Components/Tabs/Tabs";
import Accordion from "../../../Components/Accordion/Accordion";
import { useState } from "react";
import axios from "axios";

const Datas = Database.HomeData;

export const HomePage_1 = () => {
  const className = {
    container:
      "w-full h-screen bg-background1 bg-top bg-blend-darken place-items-center bg-black/50 bg-cover grid grid-cols-1 lg:grid-cols-2 p-10 font-Playfair_Display relative",
    innerBox: "w-full space-y-8 text-white z-10",
    darkBox: "w-full h-full absolute backdrop-filter backdrop-grayscale",
    title: "text-4xl md:text-5xl font-bold",
    subtitle: "text-sm text-white/60",
    buttonBox: "flex items-center gap-2 font-Roboto",
    button1: "flex items-center text-xs gap-5 bg-blue-600 rounded-sm p-3",
    button2:
      "flex items-center text-xs gap-5 bg-transparent rounded-sm border border-white p-3 hover:border-0 hover:bg-white hover:text-black",
  };

  const Data = Datas.page_1;

  const navigateTo = useNavigate();

  return (
    <div className={className.container}>
      <div className={className.darkBox} />

      <div></div>
      <div className={className.innerBox}>
        <h1 className={className.title}>{Data.title}</h1>
        <p className={className.subtitle}>{Data.subtitle}</p>
        <div className={className.buttonBox}>
          {Data.button.map((data, index) => (
            <button
              className={index > 0 ? className.button2 : className.button1}
              onClick={() => navigateTo(data.link)}
            >
              <p>{data.title}</p> <FaChevronRight />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HomePage_2 = () => {
  const className = {
    container:
      "w-full h-full grid grid-cols-1 gap-10 md:grid-cols-2 place-items-center p-10",
    innerBox: "space-y-5 text-white order-2 md:order-1",
    title: "text-3xl md:text-4xl font-Playfair_Display font-bold",
    subtitle: "text-xs text-white/60 whitespace-pre-line",
    button: "flex items-center text-xs gap-5 bg-blue-600 rounded-sm p-3",
    img: "grayscale h-auto md:h-[500px] rounded-lg order-1 md:order-2",
  };

  const Data = Datas.page_2;

  const navigateTo = useNavigate();

  return (
    <div className={className.container}>
      <div className={className.innerBox}>
        <h1 className={className.title}>{Data.title}</h1>
        <p className={className.subtitle}>{Data.subtitle}</p>

        <button
          onClick={() => navigateTo(Data.button.link)}
          className={className.button}
        >
          <p>{Data.button.title}</p> <FaChevronRight />
        </button>
      </div>

      <img src={Data.img} alt="" className={className.img} />
    </div>
  );
};

export const HomePage_3 = () => {
  const className = {
    container: "w-full p-10 space-y-16 bg-dark-gray font-Roboto text-white",
    headerBox: "w-full text-center",
    title:
      "text-3xl md:text-4xl font-Playfair_Display font-medium px-5 md:px-0",
    subtitle: "text-xs text-white/60",

    cardBox: "w-full grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center",
    card: "p-5 flex flex-col items-center text-center gap-5",
    cardIcon: "text-4xl",
    cardTitle: "text-xl md:text-2xl font-medium font-Playfair_Display",
    cardSubtitle: "text-[10px] text-white/60",
  };

  const Data = Datas.page_3;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <div className={className.cardBox}>
        {Data.cards.map((data, index) => (
          <div className={className.card}>
            <p className={className.cardIcon}>{data.icon}</p>
            <h1 className={className.cardTitle}>{data.title}</h1>
            <p className={className.cardSubtitle}>{data.subtitle}</p>
          </div>
        ))}
      </div>

      <div className={className.headerBox}>
        <p className={className.subtitle}>{Data.subtitle}</p>
      </div>
    </div>
  );
};

export const HomePage_4 = () => {
  const className = {
    container: "w-full space-y-8 text-white p-10",
    title: "text-3xl md:text-4xl font-medium font-Playfair_Display pl-5",
    gridBox:
      "p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 w-full",
    flexBox: "w-full flex items-center gap-10 justify-between",
    button:
      "px-4 py-2 rounded-lg border border-white hover:text-black hover:bg-white flex items-center gap-4 text-xs",

    card: "space-y-5 w-full h-full",
    cardTitle: "text-lg font-Playfair_Display",
    cardIcon:
      "p-5 w-fit grid place-items-center font-Playfair_Display font-bold rounded-tl-lg rounded-br-lg bg-[#037ef3] text-2xl",
    cardSubtitle: `text-ellipsis h-fit transform transition-all duration-200 overflow-y-hidden text-[10px] text-white/60 `,
  };

  const Data = Datas.page_4;

  const navigateTo = useNavigate();

  return (
    <div className={className.container}>
      <div className={className.flexBox}>
        <h1 className={className.title}>{Data.title}</h1>
        <button
          onClick={() => navigateTo(Data.button.link)}
          className={className.button}
        >
          <p>{Data.button.title}</p> <FaChevronRight />
        </button>
      </div>

      <div className={className.gridBox}>
        {Data.services.slice(0, 6).map((data, index) => (
          <div className={className.card}>
            <div className={className.cardIcon}>
              <h1 className="absolute">{index + 1}</h1>
            </div>
            <h4 className={className.cardTitle}>{data.title}</h4>
            <p className={className.cardSubtitle}>{data.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HomePage_5 = () => {
  const className = {
    container: "w-full p-10 space-y-10 bg-dark-gray",
    headerBox: "w-full text-center",
    title: "text-2xl md:text-4xl font-Playfair_Display font-medium",
  };

  const Data = Datas.page_5;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <h1 className={className.title}>{Data.title}</h1>
      </div>

      <Tabs tabs={Data.tabs} />
    </div>
  );
};

const AccordionChild = ({ header, children, icon }) => {
  <>
    <div>{icon}</div>
    <div>{header}</div>
    <div>{children}</div>
  </>;
};

export const HomePage_6 = () => {
  const className = {
    container: "w-full space-y-10 p-10 text-white",
    card: "w-full grid grid-cols-1 gap-10 md:grid-cols-2 place-items-center p-10",
    title: "text-4xl font-Playfair_Display font-medium",
    list: "w-full space-y-3 text-white/60 list-decimal",
  };

  const Data = Datas.page_6;

  return (
    <div className={className.container}>
      <Accordion>
        {Data.map((data, index) => (
          <AccordionChild key={index} header={data.title} icon={data.icon}>
            <div className={className.card}>
              <h1 className={className.title}>{data.title}</h1>

              <ul className={className.list}>
                {data.content.map((data2, index2) => (
                  <li key={index2}>{data2.title}</li>
                ))}
              </ul>
            </div>
          </AccordionChild>
        ))}
      </Accordion>
    </div>
  );
};

export const HomePage_7 = () => {

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
         message: message,
       });
       console.log("Success!");
       window.location.reload();
     } catch (error) {
       if (error.response) {
         console.log(error.response.data.msg);
       }
     }
   };

  const className = {
    container: "w-full p-10 lg:p-20 space-y-7 bg-dark-gray",
    title: "text-2xl md:text-3xl font-medium font-Playfair_Display",
    form: "w-full space-y-3 ",
    inlineForm: "w-full grid grid-cols-1 md:grid-cols-2 gap-2",
    input:
      "outline-none w-full rounded-lg bg-white/10 active:bg-white/30 py-3 px-5 placeholder-white/60 resize-none",
    button: "px-5 py-3 bg-[#037ef3] text-white rounded",
  };

  const Data = Datas.page_7;

  return (
    <div className={className.container}>
      <h1 className={className.title}>{Data.title}</h1>

      <form onSubmit={addNewData} className={className.form}>
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
          className={`${className.input} h-[200px]`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className={className.button}>
          {Data.submit.title}
        </button>
      </form>
    </div>
  );
};
