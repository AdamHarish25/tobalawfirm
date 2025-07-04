import { useNavigate } from "react-router";
import { Database } from "../../../Database/WholeData";
import { FaChevronRight } from "react-icons/fa";
import Tabs from "../../../Components/Tabs/Tabs";
import Accordion from "../../../Components/Accordion/Accordion";
import { useState } from "react";
import { Link } from "react-router-dom";
// import {axios} from "axios";

const Datas = Database.HomeData;

export const HomePage_1 = () => {
  const className = {
    container:
      "w-full h-screen bg-background2 bg-top bg-blend-darken place-items-center bg-black/50 bg-cover grid grid-cols-1 lg:grid-cols-2 p-10 font-Playfair_Display relative",
    innerBox: "w-full space-y-8 text-white z-10",
    darkBox: "w-full h-full absolute backdrop-filter backdrop-grayscale",
    title: "text-4xl md:text-5xl font-bold",
    subtitle: "text-white/80",
    buttonBox: "flex items-center gap-2 font-Roboto",
    button1: "flex items-center text-xs gap-5 bg-yellow-500 text-black rounded-sm p-3",
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
    innerBox: "space-y-10 grid place-items-center text-justify text-white order-2 md:order-1",
    title: "text-3xl md:text-4xl font-Playfair_Display font-bold",
    subtitle: "text-white/60 whitespace-pre-line",
    button: "flex items-center text-xs gap-5 bg-yellow-500 text-black rounded-sm p-3",
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
    headerBox: "w-full text-start",
    headerBox2: "w-full text-center",
    title:
      "text-3xl md:text-4xl font-Playfair_Display font-medium px-5 md:px-0",
    subtitle: "text-white/60",

    cardBox: "w-full grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center",
    card: "p-5 flex flex-col items-center text-center gap-5",
    cardIcon: "text-4xl",
    cardTitle: "text-xl md:text-2xl font-medium font-Playfair_Display",
    cardSubtitle: "text-[14px] text-white/60",
  };

  const Data = Datas.page_3;

  return (
    <div className={className.container}>
      <div className={className.headerBox2}>
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
        <p className={className.subtitle}>*{Data.subtitle}</p>
      </div>
    </div>
  );
};

export const HomePage_4 = () => {
  const className = {
    container: "w-full space-y-8 text-white p-10",
    title: "text-3xl md:text-4xl font-medium font-Playfair_Display md:pl-5",
    gridBox:
      "p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-20 w-full",
    flexBox: "w-full flex xs:flex-col gap-10 xs:items-start xs:justify-center lg:flex-row lg:items-center lg:justify-between",
    button:
      "px-4 py-2 rounded-lg border border-white hover:text-black hover:bg-white flex items-center gap-4 text-xs",

    card: "space-y-5 w-full h-full",
    cardTitle: "text-xl font-Playfair_Display",
    cardIcon:
      "p-5 w-fit grid place-items-center font-Playfair_Display font-bold rounded-tl-lg rounded-br-lg bg-yellow-500 text-black text-2xl",
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

  const className = {
    // Kita buat layoutnya lebih berfokus pada visual dan ajakan
    container: "w-full p-10 lg:p-20 text-center bg-dark-gray text-white space-y-8",
    title: "text-3xl md:text-4xl font-bold font-Playfair_Display",
    subtitle: "max-w-2xl mx-auto text-gray-300", // Deskripsi singkat
    button: "inline-block bg-yellow-500 text-black font-bold text-lg py-4 px-8 rounded hover:bg-yellow-400 transition-colors duration-300",
  };

  const Data = Datas.page_7;

  return (
    <div className={className.container}>
      <h1 className={className.title}>{Data.title}</h1>
      <p className={className.subtitle}>
        Siap untuk mendiskusikan kebutuhan hukum Anda? Tim kami yang berdedikasi siap membantu. Klik di bawah untuk menemukan cara terbaik menghubungi kami.
      </p>
      
      {/* Tombol yang mengarahkan ke halaman Kontak */}
      <Link to="/Contact" className={className.button}>
        Hubungi Kami Sekarang
      </Link>
    </div>
  );
};
