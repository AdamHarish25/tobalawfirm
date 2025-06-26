// src/pages/CreateArticlePage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { EditorContent, useEditor } from "@tiptap/react";
import TiptapToolbar from "../../Components/toolbar/TiptapToolbar";
import StarterKit from "@tiptap/starter-kit";
import { toast } from "sonner";
// Import storage functions
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { v4 as uuidv4 } from 'uuid'; // To give images unique names. Run: npm install uuid

// Helper function to create a URL-friendly slug from the title
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
};

function CreateArticlePage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  // const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState("Toba Lawfirm"); // Default author
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const [uploading, setUploading] = useState(false);

  // === TIPTAP EDITOR INITIALIZATION ===
  const editor = useEditor({
    extensions: [
      StarterKit, // This includes paragraph, bold, italic, headings, etc.
    ],
    content: "<p>Start writing your amazing article here...</p>", // Initial content
    editorProps: {
      attributes: {
        // Apply Tailwind classes to the editor area itself
        class:
          "prose prose-invert max-w-none p-4 min-h-[300px] border border-gray-600 border-t-0 rounded-b-lg focus:outline-none bg-gray-800",
      },
    },
  });

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(createSlug(newTitle));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const htmlContent = editor.getHTML();

    if (!title || htmlContent === "<p></p>") {
      // Check for empty content
      setError("Title and Content are required.");
      setLoading(false);
      return;
    }

    try {
      let imageUrl = ""; // This will hold the final URL from Cloudinary

      // --- NEW CLOUDINARY UPLOAD LOGIC ---
      if (imageUpload) {
        setUploading(true);

        // 1. Get your cloud name and upload preset from environment variables
        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

        // 2. Create the upload URL
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        // 3. Create a FormData object to send the file
        const formData = new FormData();
        formData.append("file", imageUpload);
        formData.append("upload_preset", uploadPreset);

        // 4. Use fetch to send the POST request
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.secure_url) {
          imageUrl = data.secure_url; // Get the secure URL of the uploaded image
        } else {
          throw new Error("Image upload failed, no secure_url returned.");
        }

        setUploading(false);
      }

      const articlesCollectionRef = collection(db, "articles");
      await addDoc(articlesCollectionRef, {
        title,
        slug,
        content: htmlContent,
        authorName,
        isPublished: false,
        createdAt: serverTimestamp(),
        featuredImageUrl: imageUrl, // <-- SAVE THE CLOUDINARY URL
      });

      toast.success("Article saved successfully!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500); // Redirect after 1 second
    } catch (err) {
      console.error("Error creating article:", err);
      setError("Failed to save article. Please try again.");
      toast.error(error)
      setLoading(false);
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-gray text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold font-Playfair_Display">
            Create New Article
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* === NEW: FEATURED IMAGE INPUT === */}
          <div>
            <label
              htmlFor="featuredImage"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Featured Image
            </label>
            <input
              type="file"
              id="featuredImage"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-black hover:file:bg-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              URL Slug (auto-generated)
            </label>
            <input
              type="text"
              id="slug"
              value={slug}
              readOnly
              className="w-full p-3 bg-gray-800 text-gray-400 rounded border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Content
            </label>
            <TiptapToolbar editor={editor} />
            <EditorContent editor={editor} />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading || uploading}
              className="..."
            >
              {loading
                ? "Saving..."
                : uploading
                ? "Uploading Image..."
                : "Save as Draft"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="text-gray-300 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateArticlePage;
