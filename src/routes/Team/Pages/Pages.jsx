import { FaChevronRight } from "react-icons/fa";
import Tabs from "../../../Components/Tabs/Tabs";
import { Database } from "../../../Database/WholeData";
import { Link, useNavigate } from "react-router-dom";

const Datas = Database.TeamData;

export const TeamPage_1 = () => {
  const className = {
    container: "w-full p-20 text-center bg-dark-gray",
    title: "text-3xl font-Playfair_Display font-medium",
  };

  const Data = Datas.page_1;

  return (
    <div className={className.container}>
      <div className={className.title}>{Data.title}</div>
    </div>
  );
};

export const TeamPage_2 = () => {
  const className = {
    container:
      "w-full h-full grid grid-cols-1 gap-10 md:grid-cols-2 place-items-center px-10 py-44",
    innerBox: "space-y-10 grid place-items-center text-justify text-white order-2 md:order-1",
    title: "text-3xl md:text-4xl font-Playfair_Display font-bold",
    subtitle: " text-white/60 whitespace-pre-line",
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

export const TeamPage_3 = () => {
  const className = {
    container:
      "w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center bg-dark-gray",
    card: "md:w-full space-y-10 grid place-items-center gap-5 p-5",
    innerBox: "space-y-4 text-center",
    img: "w-60 h-60 rounded-full object-cover object-top",
    title: "text-2xl md:text-3xl font-semibold font-Playfair_Display",
    role: "text-lg font-Poppins font-medium text-yellow-500",
    listBox: "flex items-center justify-center gap-5 list-none",
    list: "cursor-pointer",
  };

  const Data = Datas.page_3;

  return (
    <div className={className.container}>
      {Data.map((data, idx) => (
        <div key={idx} className={`${className.card} ${data.class}`}>
          <img className={className.img} alt="" src={data.img} />
          <div className={className.innerBox}>
            <h1 className={className.title}>{data.name}</h1>
            <h4 className={className.role}>{data.role}</h4>
            <ul className={className.listBox}>
              {data.socials.map((data2, idx2) => (
                <li key={idx2}>
                  <Link to={data2.link} className={className.list}>
                    {data2.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
