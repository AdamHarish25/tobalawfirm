import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { ServicePage_1, ServicePage_2 } from "./Pages/Pages";

const Service = () => {
    const className = {
      container: "w-full font-Roboto text-white bg-dark-white",
    };

    return (
        <div className={className.container}>
            <Navbar/>
            <ServicePage_1 />
            <ServicePage_2 />
            <Footer/>
        </div>
    )
}

export default Service;