// src/pages/EditArticlePage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapToolbar from '../../Components/toolbar/TiptapToolbar';
import { toast } from 'sonner';

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove special characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
};


function EditArticlePage() {
  const { id } = useParams(); // Get the article ID from the URL
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [authorName, setAuthorName] = useState('Toba Lawfirm');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: { class: 'prose prose-invert max-w-none p-4 min-h-[300px] border border-gray-600 border-t-0 rounded-b-lg focus:outline-none bg-gray-800' },
    },
  });

  // === NEW: FETCH EXISTING ARTICLE DATA ON LOAD ===
  useEffect(() => {
    if (!id) return;
    const fetchArticleData = async () => {
      const docRef = doc(db, 'articles', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setSlug(data.slug);
        setAuthorName(data.authorName);
        // Set the editor content
        if (editor) {
          editor.commands.setContent(data.content);
        }
      } else {
        setError("Article not found.");
      }
    };
    fetchArticleData();
  }, [id, editor]); // Rerun if ID or editor instance changes

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(createSlug(newTitle));
  };

  // === NEW: USE `updateDoc` INSTEAD OF `addDoc` ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const htmlContent = editor.getHTML();
    
    try {
      const docRef = doc(db, 'articles', id);
      await updateDoc(docRef, {
        title,
        slug,
        content: htmlContent,
        authorName,
        // We don't update createdAt, but could add an `updatedAt` field
        updatedAt: serverTimestamp(),
      });

      toast.success("Article updated successfully!");

      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err) {
      console.error("Error updating document:", err);
      setError("Failed to update article.");
      toast.error(error);
      setLoading(false);
    }
  };

  if (!editor) { return null; }

  return (
    <div className="min-h-screen bg-dark-gray text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold font-Playfair_Display">Edit Article</h1>
        </header>
        {/* The form JSX is almost identical to CreateArticlePage */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ... Title, Slug inputs ... */}
          <div>
            <label>Content</label>
            <TiptapToolbar editor={editor} />
            <EditorContent editor={editor} />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center gap-4">
            <button type="submit" disabled={loading} className="...">{loading ? 'Saving...' : 'Save Changes'}</button>
            <button type="button" onClick={() => navigate('/dashboard')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditArticlePage;