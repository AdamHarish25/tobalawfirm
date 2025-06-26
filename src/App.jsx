import { Route, Routes, useNavigate } from 'react-router';
import './App.css';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Service from './routes/Service/Service';
import Team from './routes/Team/Team';
import Home from './routes/Home/Home';
import LoginPage from './routes/Dash/Login';
import RegisterPage from './routes/Dash/Register';
import AdminDash from './routes/Dash/AdminDash';
import ProtectedRoute from './routes/Dash/ProtectedRoute';
import CreateArticlePage from './routes/Articles/CreateArticle';
import EditArticlePage from './routes/Articles/EditArticle';
import SingleArticlePage from './routes/Articles/SingleArticlePage';
import ArticleListPage from './routes/Articles/PublicArticleList';
import { Toaster } from 'sonner';
import ServiceDetailPage from './routes/Service/ServiceDetail';
import CreateServicePage from './routes/Service/Admin/CreateServicePage';
import EditServicePage from './routes/Service/Admin/EditServicePage';

function App() {



  return (
    <div id="App" className="w-screen overflow-hidden relative">
      <Toaster richColors theme='dark'/>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/artikel" element={<ArticleListPage />} />

        {/* This path is for a single article, using the dynamic slug */}
        <Route path="/artikel/:slug" element={<SingleArticlePage />} />
        {/* --- ADMIN AUTH ROUTES --- */}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />

         {/* === ADD THIS NEW DYNAMIC ROUTE FOR SERVICES === */}
        <Route path="/layanan/:slug" element={<ServiceDetailPage />} />

        {/* --- PROTECTED ADMIN ROUTE --- */}
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <AdminDash />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create-article"
          element={
            <ProtectedRoute>
              <CreateArticlePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-article/:id"
          element={
            <ProtectedRoute>
              <EditArticlePage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create-service/"
          element={
            <ProtectedRoute>
              <CreateServicePage />

            </ProtectedRoute>
          }
        />

         <Route
          path="/admin/edit-service/:id"
          element={
            <ProtectedRoute>
              <EditServicePage />

            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

// export default App;


// src/App.jsx (NEW SIMPLIFIED VERSION)

// import React from 'react';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import './index.css';

// // We are ONLY importing the pages needed for this test.
// import RegisterPage from './routes/Dash/Register';
// import LoginPage from './routes/Dash/Login';
// import AdminDashboard from './routes/Dash/AdminDash';
// import HomePage from './routes/Home/Home'; // Your existing homepage

// function App() {
//   return (

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>

//   );
// }

export default App;