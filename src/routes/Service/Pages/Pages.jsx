import { useEffect, useState } from "react";
import { Database } from "../../../Database/WholeData";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";

const Datas = Database.ServiceData;

export const ServicePage_1 = () => {
  const className = {
    container: "w-full bg-dark-gray p-32 text-center",
    title: "text-3xl font-medium font-Playfair_Display",
  };

  const Data = Datas.page_1;

  return (
    <div className={className.container}>
      <h1 className={className.title}>{Data.title}</h1>
    </div>
  );
};

export const ServicePage_2 = () => {
  const className = {
    container:
      "w-full px-10 py-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-20",

    card: "space-y-5 w-full h-full",
    cardTitle: "text-lg font-Playfair_Display",
    cardIcon:
      "p-5 w-fit grid place-items-center font-Playfair_Display font-bold rounded-tl-lg rounded-br-lg bg-yellow-500 text-black text-2xl",
    cardSubtitle: `text-ellipsis h-fit transform transition-all duration-200 overflow-y-hidden text-[15px] text-white/60 `,
  };

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // === NEW: Fetch data from Firestore ===
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const servicesRef = collection(db, "services");
        // Query to get only published services, you can order by title or another field
        const q = query(
          servicesRef,
          where("isPublished", "==", true),
          orderBy("title", "asc") // Sort alphabetically by title
        );
        const querySnapshot = await getDocs(q);

        const servicesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty array means this runs once on component load

  if (loading) {
    return (
      <div className="text-center py-20 text-white h-screen w-full">Loading services...</div>
    );
  }

  return (
    <div className={className.container}>
      {services.map((data, index) => (
        <Link
          to={`/layanan/${data.slug}`}
          key={index}
          className={className.card}
        >
          <div className={className.cardIcon}>
            <h1 className="absolute">{index + 1}</h1>
          </div>
          <h4 className={className.cardTitle}>{data.title}</h4>
          {data.subtitle && (
            <p className={className.cardSubtitle}>{data.subtitle}</p>
          )}
        </Link>
      ))}
    </div>
  );
};
