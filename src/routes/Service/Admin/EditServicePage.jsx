// src/pages/EditServicePage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';
import { toast } from 'sonner';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapToolbar from '../../../Components/toolbar/TiptapToolbar';

function EditServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: { class: 'prose prose-invert max-w-none p-4 min-h-[300px] border border-gray-600 border-t-0 rounded-b-lg focus:outline-none bg-gray-800' },
    },
  });

  useEffect(() => {
    if (!id || !editor) return;
    
    const fetchServiceData = async () => {
      const docRef = doc(db, 'services', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setSubtitle(data.subtitle);
        editor.commands.setContent(data.content || '');
      } else {
        toast.error("Service not found.");
        navigate('/dashboard');
      }
    };
    fetchServiceData();
  }, [id, editor, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const htmlContent = editor.getHTML();

    try {
      const docRef = doc(db, 'services', id);
      await updateDoc(docRef, {
        title,
        subtitle,
        content: htmlContent,
        updatedAt: serverTimestamp(),
      });
      toast.success("Service updated successfully!");
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      console.error("Error updating service:", err);
      toast.error("Failed to update service.");
      setLoading(false);
    }
  };

  if (!editor) return null;

  return (
    <div className="min-h-screen bg-dark-gray text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold font-Playfair_Display mb-10">Edit Service</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title">Service Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-gray-700 rounded" required />
          </div>
          <div>
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full p-3 bg-gray-700 rounded" required />
          </div>
          <div>
            <label>Detailed Content</label>
            <TiptapToolbar editor={editor} />
            <EditorContent editor={editor} />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" disabled={loading} className="bg-yellow-500 text-black font-bold py-3 px-6 rounded">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button type="button" onClick={() => navigate('/dashboard')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditServicePage;