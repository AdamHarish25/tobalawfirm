import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { AboutPage_1, AboutPage_2, AboutPage_3 } from "./Pages/Pages";

const About = () => {
    const className = {
      container: "w-full font-Roboto text-white bg-dark-white",
    };

    return (
        <div className={className.container}>
            <Helmet>
                <title>Tentang Kami - Toba Lawfirm</title>
                <meta name="description" content="Pelajari tentang Visi, Misi dan Sejarah TobaLawfirm." />
            </Helmet>
            <Navbar/>
            <AboutPage_1 />
            <AboutPage_2 />
            <AboutPage_3 />
            <Footer/>
        </div>
    )
}

export default About;