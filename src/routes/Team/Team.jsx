import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { TeamPage_1, TeamPage_2, TeamPage_3 } from "./Pages/Pages";

const Team = () => {
  const className = {
    container: "w-full font-Roboto text-white bg-dark-white",
  };

  return (
    <div className={className.container}>
      <Helmet>
        <title>Tim Kami - Toba Lawfirm</title>
        <meta
          name="description"
          content="Lawfirm yang baik memiliki tim yang solid, berpengalaman, dan profesional. Pelajari lebih lanjut tentang tim kami di Toba Lawfirm."
        />
      </Helmet>
      <Navbar />
      <TeamPage_2 />
      <TeamPage_1 />
      <TeamPage_3 />
      <Footer />
    </div>
  );
};

export default Team;
