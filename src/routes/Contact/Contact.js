import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { ContactPage_1, ContactPage_2, ContactPage_3 } from "./Pages/Pages";

const Contact = () => {
    const className = {
        container: "w-full text-white font-Roboto bg-dark-white",
    }

    return(
        <div className={className.container}>
            <Navbar/>
            <ContactPage_1 />
            <ContactPage_2 />
            <ContactPage_3 />
            <Footer/>
        </div>
    )
}

export default Contact;