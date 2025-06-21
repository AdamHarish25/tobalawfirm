import { useNavigate } from "react-router";
import { Database } from "../../../Database/WholeData";
import { FaChevronRight } from "react-icons/fa";
import Accordion from "../../../Components/Accordion/Accordion";

const Datas = Database.AboutData;

export const AboutPage_1 = () => {
    const className = {
      container: "w-full p-32 bg-dark-gray text-center",
      title: "text-3xl font-medium font-Playfair_Display",
    };

    const Data = Datas.page_1

    return (
      <div className={className.container}>
        <h1 className={className.title}>{Data.title}</h1>
      </div>
    );
}

export const AboutPage_2 = () => {
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

const AccordionChild = ({ header, children, icon }) => {
  <>
    <div>{icon}</div>
    <div>{header}</div>
    <div>{children}</div>
  </>;
};

export const AboutPage_3 = () => {
  const className = {
    container: "w-full space-y-10 p-10 text-white",
    card: "w-full grid grid-cols-1 gap-10 md:grid-cols-2 place-items-center p-10",
    title: "text-4xl font-Playfair_Display font-medium",
    list: "w-full space-y-3 text-white/60 list-decimal",
  };

  const Data = Datas.page_3;

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