import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { TeamPage_1, TeamPage_2, TeamPage_3 } from "./Pages/Pages";

const Team = () => {
    const className = {
      container: "w-full font-Roboto text-white bg-dark-white",
    };

    return(
        <div className={className.container}>
          <Navbar/>
          <TeamPage_1 />
          <TeamPage_2 />
          <TeamPage_3 />
          <Footer/>
        </div>
    )
}

export default Team;