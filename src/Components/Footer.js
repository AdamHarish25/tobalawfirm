import { useNavigate } from "react-router";
import { Database } from "../Database/WholeData";
import {Link} from 'react-router-dom';

const Footer = () => {
    const className = {
        container: "w-full p-10 grid grid-cols-1 place-items-start md:grid-cols-2 gap-5 md:place-items-center",
        innerBox: "h-full flex flex-col justify-start gap-6 text-white/60",
        title: "font-medium font-Playfair_Display text-white",
        paragraph: "text-white/80",
        listBox: "space-y-3 list-none",
        list: "hover:text-white hover:font-medium transform duration-200 cursor-pointer",
        socialListBox: "flex items-center gap-5",
        socialList: "block w-fit p-4 rounded-full bg-white/20 text-white hover:bg-blue-600 transform duration-200 cursor-pointer"
    };

    const Data = Database.FooterData;

    const contactData = Data.contact;
    const linksData = Data.links;

    const navigateTo = useNavigate();

    return (
      <div className={className.container}>
        <div className={className.innerBox}>
          <h1 className={className.title}>{contactData.title}</h1>
          <p className={className.paragraph}>{contactData.address}</p>
          <ul className={className.listBox}>
            {contactData.list.map((data, idx) => (
              <li key={idx}>
                <Link
                  className={className.list}
                  target={"_blank"}
                  to={data.link}
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={className.innerBox}>
          <h1 className={className.title}>{linksData.title}</h1>
          <ul className={className.listBox}>
            {linksData.list.map((data, idx) => (
              <li
                className={className.list}
                key={idx}
                onClick={() => navigateTo(data.link)}
              >
                {data.title}
              </li>
            ))}
          </ul>

          <ul className={className.socialListBox}>
            {linksData.socialList.map((data, idx) => (
              <li key={idx}>
                <Link
                  to={data.link}
                  target={"_blank"}
                  className={className.socialList}
                >
                  {data.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}


export default Footer;