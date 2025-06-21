import { Database } from "../../../Database/WholeData";

const Datas = Database.ServiceData;

export const ServicePage_1 = () => {
    const className = {
        container: "w-full bg-dark-gray p-32 text-center",
        title: "text-3xl font-medium font-Playfair_Display"
    };

    const Data = Datas.page_1;

    return (
        <div className={className.container}>
            <h1 className={className.title}>
                {Data.title}
            </h1>
        </div>
    )
};


export const ServicePage_2 = () => {
    const className = {
      container:
        "w-full px-10 py-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-20",

      card: "space-y-5 w-full h-full",
      cardTitle: "text-lg font-Playfair_Display",
      cardIcon:
        "p-5 w-fit grid place-items-center font-Playfair_Display font-bold rounded-tl-lg rounded-br-lg bg-[#037ef3] text-2xl",
      cardSubtitle: `text-ellipsis h-fit transform transition-all duration-200 overflow-y-hidden text-[10px] text-white/60 `,
    };

    const Data = Datas.page_2;
    return (
      <div className={className.container}>
        {Data.map((data, index) => (
          <div className={className.card}>
            <div className={className.cardIcon}>
              <h1 className="absolute">{index + 1}</h1>
            </div>
            <h4 className={className.cardTitle}>{data.title}</h4>
            <p className={className.cardSubtitle}>{data.subtitle}</p>
          </div>
        ))}
      </div>
    );
}