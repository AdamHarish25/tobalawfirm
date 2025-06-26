import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { ServicePage_1, ServicePage_2 } from "./Pages/Pages";

const Service = () => {
    const className = {
      container: "w-full h-full font-Roboto text-white bg-dark-white",
    };

    return (
        <div className={className.container}>
            <Helmet>
                <title>Layanan Kami - Toba Lawfirm</title>
                <meta name="description" content="Kami menyediakan berbagai layanan hukum untuk memenuhi kebutuhan Anda" />
            </Helmet>
            <Navbar/>
            <ServicePage_1 />
            <ServicePage_2 />
            <Footer/>
        </div>
    )
}

export default Service;