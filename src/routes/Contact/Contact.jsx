import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ContactPage from "./Pages/Pages";

const Contact = () => {
  const className = {
    container: "w-full text-white font-Roboto bg-dark-white",
  };

  return (
    <div className={className.container}>
      <Helmet>
        <title>Kontak - Toba Lawfirm</title>
        <meta
          name="description"
          content="Hubungi Toba Lawfirm untuk konsultasi hukum profesional."
        />
      </Helmet>
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contact;
