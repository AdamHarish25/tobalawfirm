import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { HomePage_1, HomePage_2, HomePage_3, HomePage_4, HomePage_5, HomePage_6, HomePage_7 } from "./Pages/Pages";


const Home = () => {
    const className = {
      container: "w-full font-Roboto text-white bg-dark-white",
    };

    return(
        <div className={className.container}>
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
