import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BreakingNewsTicker from './components/BreakingNewsTicker';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AuthorPage from './pages/AuthorPage';
import TagPage from './pages/TagPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPostList from './pages/admin/AdminPostList';
import AdminPostEditor from './pages/admin/AdminPostEditor';
import { NewsProvider } from './context/NewsContext';
import { FileQuestion } from 'lucide-react';

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

// 404 Not Found Component
const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <FileQuestion className="w-16 h-16 text-gray-300 mb-4" />
    <h1 className="text-4xl font-bold text-gray-800 mb-2">৪০৪</h1>
    <p className="text-gray-500 text-lg mb-6">দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি।</p>
    <Link to="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
      হোমপেজে ফিরে যান
    </Link>
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
            <Route path="/news/:slug" element={<ArticlePage />} />
            <Route path="/author/:authorName" element={<AuthorPage />} />
            <Route path="/tag/:tagSlug" element={<TagPage />} />
            <Route path="/category/:id" element={<div className="text-center py-20 text-xl">এই বিভাগের খবর খুব শীঘ্রই আসছে... <br/> <a href="/" className="text-primary hover:underline text-base block mt-4">হোমপেজে ফিরে যান</a></div>} />
            {/* Catch-all 404 for public layout */}
            <Route path="*" element={<NotFound />} />
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