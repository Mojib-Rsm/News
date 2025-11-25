import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BreakingNewsTicker from './components/BreakingNewsTicker';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AuthorPage from './pages/AuthorPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPostList from './pages/admin/AdminPostList';
import AdminPostEditor from './pages/admin/AdminPostEditor';
import { NewsProvider } from './context/NewsContext';

// Layout for public pages
const PublicLayout: React.FC = () => (
  <div className="min-h-screen flex flex-col font-sans">
    <Header />
    <BreakingNewsTicker />
    <main className="container mx-auto px-4 py-8 flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <NewsProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/author/:authorName" element={<AuthorPage />} />
            <Route path="/category/:id" element={<div className="text-center py-20 text-xl">এই বিভাগের খবর খুব শীঘ্রই আসছে... <br/> <a href="/" className="text-primary hover:underline text-base block mt-4">হোমপেজে ফিরে যান</a></div>} />
          </Route>

          {/* Authentication */}
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="posts" element={<AdminPostList />} />
            <Route path="posts/new" element={<AdminPostEditor />} />
            <Route path="posts/edit/:id" element={<AdminPostEditor />} />
            <Route path="settings" element={<div className="p-8">সেটিংস পেজ শীঘ্রই আসছে...</div>} />
          </Route>
        </Routes>
      </Router>
    </NewsProvider>
  );
};

export default App;