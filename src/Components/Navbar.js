import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Database } from "../Database/WholeData";
import { useViewport } from "./Viewport";
import { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const className = {
    container: "w-full absolute top-0 inset-x-0 px-10 z-40 py-4 font-Roboto",
    mobile: "w-full flex items-center justify-between gap-10",
    desktop: "w-full grid grid-cols-3 place-items-center text-white gap-10",
    logo: "w-16 h-16 rounded-lg",
    icon: "p-2 rounded-full bg-gray-500/70 text-base group-hover:bg-transparent group-hover:border border-white transform duration-200",
    contactButton: "flex items-center gap-3 group text-xs",
    triggerBox: "flex items-center gap-8 text-white",

    navigationList: "flex items-center gap-8 text-white/70",
    navigationMenu:
      "text-sm list-none cursor-pointer hover:text-white transform duration-100",

    sidebar: `inset-y-0 -right-1 fixed bg-white shadow-xl shadow-gray-400 p-14 w-72 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } duration-300 ease-in-out space-y-5 text-black`,
    sidebarTrigger: "",
    sidebarMenu:
      "hover:text-blue-500 list-none cursor-pointer text-sm transform duration-200",
    closeButton: `absolute right-5 top-5 hover:text-xl transform duration-200 text-lg z-10`,
  };

  const viewport = useViewport().windowSize;

  const Data = Database.NavbarData;

  if (isOpen === true && viewport.innerWidth >= 1025) {
    setIsOpen(false);
  }

  const navigateTo = useNavigate();

  const path = "/" + window.location.hash;

  console.log(path);

  return (
    <div className={className.container}>
      {viewport.innerWidth < 1025 ? (
        <div className={className.mobile}>
          <img src={Data.logo} alt="" className={className.logo} />

          <div className={className.triggerBox}>
            <button
              onClick={() => navigateTo(Data.button.link)}
              className={className.contactButton}
            >
              <div className={className.icon}>{Data.button.icon}</div>
              <p>{Data.button.title}</p>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={className.sidebarTrigger}
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      ) : (
        <div className={className.desktop}>
          <img src={Data.logo} alt="" className={className.logo} />

          <ul className={className.navigationList}>
            {Data.navigateList.map((data, index) => (
              <li
                key={index}
                onClick={() => navigateTo(data.link)}
                className={`${className.navigationMenu} ${
                  path === `/#${data.link}` ? "text-white border-b-2" : ""
                }`}
              >
                {data.title}
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigateTo(Data.button.link)}
            className={className.contactButton}
          >
            <div className={className.icon}>{Data.button.icon}</div>
            <p>{Data.button.title}</p>
          </button>
        </div>
      )}

      <aside className={className.sidebar}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={className.closeButton}
        >
          <AiOutlineClose />
        </button>
        {Data.navigateList.map((data, index) => (
          <li
            key={index}
            onClick={() => {
              navigateTo(data.link);
              setIsOpen(!isOpen);
            }}
            className={`${className.sidebarMenu}
              ${path === `/#${data.link}` ? "text-blue-600" : ""}`}
          >
            {data.title}
          </li>
        ))}
      </aside>
    </div>
  );
};

export default Navbar;
