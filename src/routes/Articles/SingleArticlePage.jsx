// src/pages/SingleArticlePage.jsx

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "../../firebase"; // Ensure path is correct

// You might need to install this if you haven't: npm install react-icons
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Helmet } from "react-helmet-async";

function SingleArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleBySlug = async () => {
      if (!slug) {
        setLoading(false);
        setError("Article slug is missing.");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const articlesRef = collection(db, "articles");
        // This query finds the article with the matching slug.
        // It also ensures we only get it if it's marked as 'isPublished'.
        const q = query(
          articlesRef,
          where("slug", "==", slug),
          where("isPublished", "==", true), // IMPORTANT: Only fetch published articles
          limit(1)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError("This article could not be found or is not published yet.");
        } else {
          const docData = querySnapshot.docs[0].data();
          setArticle({
            id: querySnapshot.docs[0].id,
            ...docData,
          });
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("An error occurred while loading the article.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticleBySlug();
  }, [slug]); // This effect re-runs whenever the URL slug changes

   if (loading) {
    return (
      <>
        <Helmet><title>Loading...</title></Helmet>
        <div className="min-h-screen ...">Loading article...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet><title>Error - Toba Lawfirm</title></Helmet>
        <div className="min-h-screen ...">{error}</div>
      </>
    );
  }

  // --- RENDER STATES ---

  // === THIS IS THE CRITICAL DEBUGGING STEP ===
  // ===========================================

  if (loading) {
    return (
      <div className="min-h-screen h-full bg-dark-white flex items-center justify-center text-white">
        <p>Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen h-full bg-dark-white flex flex-col items-center justify-center text-white p-8 text-center">
        <h1 className="text-3xl font-Playfair_Display text-red-500 mb-4">
          Error
        </h1>
        <p className="text-gray-400 mb-8">{error}</p>
        <Link to="/" className="text-yellow-500 hover:underline">
          ← Go back to Homepage
        </Link>
      </div>
    );
  }

  console.log("CONTENT BEING PASSED TO RENDER:", article.content);

  // Format the date for display
  const formattedDate = article.createdAt.toDate().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="bg-dark-white h-screen text-gray-300 font-Roboto overflow-y-auto">
      <Helmet>
        <title>{`${article.title} - Toba Lawfirm`}</title>
        {/* We can also set the meta description from the article content! */}
        {/* This is great for SEO. We'll take the first 155 chars of the content. */}
        <meta 
          name="description" 
          content={article.content.replace(/<[^>]+>/g, '').substring(0, 155)} 
        />
      </Helmet>
      <Navbar />
      <div className="max-w-4xl h-auto mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 ">
        {/* --- HEADER --- */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold font-Playfair_Display text-white leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-gray-400">
            By {article.authorName} • Published on {formattedDate}
          </p>
        </header>

        {/* --- FEATURED IMAGE --- */}
        {article.featuredImageUrl && (
          <figure className="mb-12 rounded-lg overflow-hidden shadow-2xl">
            <img
              src={article.featuredImageUrl}
              alt={article.title}
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </figure>
        )}

        {/* --- ARTICLE CONTENT RENDERED WITH PROSE --- */}
        <article
          className="
    prose prose-lg lg:prose-xl prose-invert max-w-none
    prose-headings:font-Playfair_Display prose-headings:text-white
    prose-p:text-gray-300 prose-p:leading-relaxed
    prose-a:text-yellow-500 prose-a:transition-colors hover:prose-a:text-yellow-400
    prose-strong:text-white
    prose-blockquote:border-l-yellow-500 prose-blockquote:text-gray-400
    prose-ul:list-disc prose-ol:list-decimal
  "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 text-black font-bold text-lg py-4 px-8 rounded hover:bg-yellow-400 transition-colors"
          >
            Mulai Konsultasi dengan kami Gratis!
          </Link>
        </div>

        {/* --- FOOTER & SOCIAL SHARE --- */}
        <hr className="border-gray-700 my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <h3 className="text-white font-semibold font-Poppins">
            Share this article:
          </h3>
          <div className="flex items-center gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${article.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${article.title} ${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </main>
  );
}

export default SingleArticlePage;
