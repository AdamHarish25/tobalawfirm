import Tabs from "../../../Components/Tabs/Tabs";
import { Database } from "../../../Database/WholeData";
import { Link } from "react-router-dom";

const Datas = Database.TeamData;

export const TeamPage_1 = () => {
  const className = {
    container: "w-full p-32 text-center bg-dark-gray",
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
    container: "w-full p-10 space-y-10",
    headerBox: "w-full text-center",
    paragraph: "text-white/60",
  };

  const Data = Datas.page_2;

  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <p className={className.paragraph}>{Data.paragraph}</p>
      </div>

      <Tabs tabs={Data.tabs} />
    </div>
  );
};

export const TeamPage_3 = () => {
  const className = {
    container:
      "w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center bg-dark-gray",
    card: "md:w-full space-y-10 grid md:place-items-center gap-5 p-5",
    innerBox: "space-y-4",
    img: "w-60 h-60 rounded-full object-cover object-top",
    title: "text-3xl md:text-4xl font-semibold font-Playfair_Display",
    role: "text-lg font-Poppins font-medium text-blue-500",
    listBox: "flex items-center gap-5 list-none",
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
