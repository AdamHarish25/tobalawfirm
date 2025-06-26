// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import AdminArticleList from "../Articles/AdminArticleList";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { toast } from "sonner";
import AdminServiceList from "../Service/Admin/AdminServiceList";

function AdminDash() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  // === NEW: STATE FOR ARTICLES AND LOADING ===
  const [articles, setArticles] = useState([]);
  const [services, setServices] = useState([]); // <-- NEW STATE FOR SERVICES
  const [loading, setLoading] = useState(true);

  // === NEW: FETCH ARTICLES LOGIC ===
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const articlesRef = collection(db, "articles");
      const servicesRef = collection(db, "services"); // <-- Ref to services
      const q = query(articlesRef, orderBy("createdAt", "desc"));
      const servicesQuery = query(servicesRef, orderBy("createdAt", "desc"));
      const [articlesSnapshot, servicesSnapshot] = await Promise.all([
        getDocs(q),
        getDocs(servicesQuery),
      ]);

      const articlesData = articlesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const servicesData = servicesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setArticles(articlesData);
      setServices(servicesData); // <-- Set services data
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/edit-article/${id}`);
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this article? This cannot be undone."
      )
    ) {
      try {
        const articleDoc = doc(db, "articles", id);
        await deleteDoc(articleDoc);
        toast.success("Article deleted successfully!");
        // Refresh the list after deleting
        fetchArticles();
      } catch (error) {
        console.error("Error deleting article:", error);
        toast.error("Failed to delete article.");
        alert("Failed to delete article.");
      }
    }
  };

  const handleTogglePublish = async (id, newStatus) => {
    try {
      const articleDoc = doc(db, "articles", id);
      await updateDoc(articleDoc, {
        isPublished: newStatus,
      });

      toast.success(
        `Article ${newStatus ? "published" : "Moved to drafts"} successfully!`
      );
      // Refresh the list to show the new status
      fetchArticles();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status.");
      alert("Failed to update status.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleEditService = (id) => navigate(`/admin/edit-service/${id}`);

  const handleDeleteService = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      await deleteDoc(doc(db, "services", id));
      toast.success("Service deleted.");
      fetchData(); // Refetch all data
    }
  };

  const handleToggleServicePublish = async (id, newStatus) => {
    await updateDoc(doc(db, "services", id), { isPublished: newStatus });
    toast.success(
      `Service status updated to ${newStatus ? "Published" : "Draft"}.`
    );
    fetchData(); // Refetch all data
  };

  return (
    <div className="min-h-screen bg-dark-gray text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold font-Playfair_Display">
            TobaLaw Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-500 transition-colors"
          >
            Logout
          </button>
        </header>

        <section>
          <p className="mb-4">
            Welcome,{" "}
            <span className="font-bold text-yellow-500">
              {user ? user.email : "Admin"}
            </span>
            !
          </p>
          <p className="mb-6">
            This is your admin dashboard where you can manage articles.
          </p>
          <section className="bg-dark-white p-6 rounded-lg flex gap-4">
            <Link
              to="/admin/create-article"
              className="inline-block bg-yellow-500 text-black font-bold py-3 px-6 rounded hover:bg-yellow-400 transition-colors"
            >
              + Create New Article
            </Link>
            <Link
              to="/admin/create-service"
              className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-400"
            >
              + Create New Service
            </Link>
          </section>

          {/* <p>From here, you will be able to create, edit, and delete articles.</p> */}

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Existing Articles</h2>
            <p className="text-gray-400">
              Your list of articles will appear here.
            </p>

            <AdminArticleList
              articles={articles}
              loading={loading}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onTogglePublish={handleTogglePublish}
            />
          </section>

          <AdminServiceList
            services={services}
            loading={loading}
            onEdit={handleEditService}
            onDelete={handleDeleteService}
            onTogglePublish={handleToggleServicePublish}
          />
        </section>
      </div>
    </div>
  );
}

export default AdminDash;
