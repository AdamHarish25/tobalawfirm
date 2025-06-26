import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { HomePage_1, HomePage_2, HomePage_3, HomePage_4, HomePage_5, HomePage_6, HomePage_7 } from "./Pages/Pages";


const Home = () => {
    const className = {
      container: "w-full font-Roboto text-white bg-dark-white",
    };

    return(
        <div className={className.container}>
            <Helmet>
                <title>Beranda - Toba Lawfirm</title>
                <meta name="description" content="Selamat datang di Toba Lawfirm, tempat Anda menemukan layanan hukum profesional dan terpercaya." />
            </Helmet>
           <Navbar/>
           <HomePage_1 />
           <HomePage_2 />
           <HomePage_3 />
           <HomePage_4 />
           <HomePage_5 />
           <HomePage_6 />
           <HomePage_7 />
           <Footer/>
        </div>
    )
}

export default Home;
