// src/pages/ServiceDetailPage.jsx

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "../../firebase";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import image from "../../Attachments/Image/backgroundService.jpg"; // Adjust the path as necessary
import { Helmet } from "react-helmet-async";
import Poster from "../../Attachments/Image/Poster2.png";
import ImageModal from "../../Components/ImageModal";
import { FaWhatsapp } from "react-icons/fa";

function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const waMe = "https://wa.me/6285811165429";

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchServiceBySlug = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        const servicesRef = collection(db, "services"); // <-- Fetch from 'services' collection
        const q = query(
          servicesRef,
          where("slug", "==", slug),
          where("isPublished", "==", true),
          limit(1)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError("Service not found or is not currently available.");
        } else {
          setService(querySnapshot.docs[0].data());
        }
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("An error occurred while loading the service details.");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceBySlug();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <div className="min-h-screen ...">Loading service...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>Error - Toba Lawfirm</title>
        </Helmet>
        <div className="min-h-screen ...">{error}</div>
      </>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-white flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-dark-white text-white text-center p-8">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-dark-white">
      <Navbar />
      <main className="text-gray-300 font-Roboto">
        <Helmet>
          <title>{`${service.title} - Toba Lawfirm`}</title>
          {/* We can also set the meta description from the service content! */}
          {/* This is great for SEO. We'll take the first 155 chars of the content. */}
          <meta
            name="description"
            content={service.content.replace(/<[^>]+>/g, "").substring(0, 155)}
          />
        </Helmet>
        {/* Header with featured image as background */}
        <header
          className="h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-black/50 bg-blend-darken"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl lg:text-6xl font-bold font-Playfair_Display leading-tight">
              {service.title}
            </h1>
          </div>
        </header>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <article
            className="prose prose-lg lg:prose-xl prose-invert max-w-none prose-headings:font-Playfair_Display"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* Call to Action Button */}
          <div className="text-center my-16">
            <Link
              to="/contact"
              className="inline-block bg-yellow-500 text-black font-bold text-lg py-4 px-8 rounded hover:bg-yellow-400 transition-colors"
            >
              Mulai Konsultasi dengan kami Gratis!
            </Link>
          </div>

          <div className="mt-8 text-center space-y-5 grid grid-cols-1 place-items-center">
            <h2 className="text-2xl font-bold">Mungkin kamu juga tertarik</h2>
            <div className="relative group">
              <Link to={waMe}>
                <img
                  src={Poster}
                  alt="Disponsori"
                  className="rounded-3xl border-2 border-yellow-500 xs:h-auto md:h-[600px]"
                />
              </Link>
              <div
                className="
              absolute inset-0 flex items-center justify-center 
              bg-black/50 opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 pointer-events-none
            "
              >
                <div className="text-center text-white p-6 bg-dark-gray rounded-lg shadow-lg">
                  <FaWhatsapp
                    size={40}
                    className="mx-auto mb-3 text-green-400"
                  />
                  <p className="font-semibold text-lg">
                    Klik untuk Konsultasi via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {Poster && (
              <div className="text-center -mt-8 mb-16">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-yellow-500 text-black font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors"
                >
                  Lihat Gambar Selengkapnya
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={Poster}
        altText={service.title}
        urlTarget={waMe}
      />
    </div>
  );
}

export default ServiceDetailPage;
