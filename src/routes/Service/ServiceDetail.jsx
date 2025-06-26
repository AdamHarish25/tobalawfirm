// src/pages/ServiceDetailPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs, limit } from 'firebase/firestore'; 
import { db } from '../../firebase';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import image from '../../Attachments/Image/backgroundService.jpg'; // Adjust the path as necessary

function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div className="min-h-screen bg-dark-white flex items-center justify-center text-white">Loading...</div>;
  }

  if (error || !service) {
    return <div className="min-h-screen bg-dark-white text-white text-center p-8">Error: {error}</div>;
  }

  return (
    <div className="bg-dark-white">
      <Navbar />
      <main className="text-gray-300 font-Roboto">
        {/* Header with featured image as background */}
        <header 
          className="h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-black/50 bg-blend-darken"
          style={{backgroundImage: `url(${image})`}}
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
          <div className="text-center mt-16">
            <Link 
              to="/contact" 
              className="inline-block bg-yellow-500 text-black font-bold text-lg py-4 px-8 rounded hover:bg-yellow-400 transition-colors"
            >
              Mulai Konsultasi dengan kami Gratis!
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ServiceDetailPage;