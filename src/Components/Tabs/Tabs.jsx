import { useState } from "react";

const Tabs = ({tabs}) => {
  const [currentTab, setCurrentTab] = useState("1");

  const className = {
    container: "m-0 md:w-full",
    tabs: "flex justify-between items-center",
    tabButton: "w-full py-4 border-b border-b-white/40 text-white/60 hover:text-white hover:border-b-white disabled:border-b-white disabled:text-white",
    title: "font-medium font-Playfair_Display mb-5 text-xl",
    content: "py-12 font-light text-justify",
    gridBox: "grid grid-cols-1 md:grid-cols-2 gap-20",
    img: "grayscale rounded w-full",

  }

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className={className.container}>
      <div className={className.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            className={className.tabButton}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={className.content}>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div className={className.gridBox}>
                <div>
                  <p className={className.title}>{tab.title}</p>
                  <p>{tab.content}</p>
                </div>

                <img src={tab.img} alt="" className={className.img}/>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
