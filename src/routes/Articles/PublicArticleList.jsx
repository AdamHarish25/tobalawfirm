// src/pages/ArticleListPage.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Helmet } from 'react-helmet-async';

function ArticleListPage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articlesRef = collection(db, 'articles');
                // Query to get only PUBLISHED articles, ordered by date
                const q = query(
                    articlesRef,
                    where('isPublished', '==', true),
                    orderBy('createdAt', 'desc') // <-- THIS IS THE PROBLEM
                );
                const querySnapshot = await getDocs(q);

                const articlesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setArticles(articlesData);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    if (loading) {
        return <div className="min-h-screen bg-dark-white text-white p-8 text-center">Loading articles...</div>;
    }

    return (
        <div className="bg-dark-white min-h-screen text-white">
            <Helmet>
                <title>Artikel - Toba Lawfirm</title>
                <meta name="description" content="Baca artikel terbaru dari Toba Lawfirm." />
            </Helmet>
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
                <header className="text-center mt-20 mb-12">
                    <h1 className="text-5xl font-bold font-Playfair_Display">Articles</h1>
                    <p className="text-lg text-gray-400 mt-2">Insights from Toba Lawfirm</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map(article => (
                        <Link
                            to={`/artikel/${article.slug}`}
                            key={article.id}
                            className="block bg-dark-gray rounded-lg shadow-lg overflow-hidden group hover:shadow-yellow-500/20 transition-shadow duration-300"
                        >
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.featuredImageUrl || 'https://via.placeholder.com/400'})` }}></div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold font-Playfair_Display text-white mb-2 group-hover:text-yellow-500 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-gray-400">
                                    {new Date(article.createdAt?.seconds * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ArticleListPage;