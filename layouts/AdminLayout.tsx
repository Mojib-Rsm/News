import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut, PlusCircle, User } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col fixed h-full">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-serif font-bold">
            ডেইলি দেশ<span className="text-primary">২৪</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link 
            to="/admin/dashboard" 
            className={`flex items-center space-x-3 px-4 py-3 rounded transition-colors ${isActive('/admin/dashboard') ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <LayoutDashboard size={20} />
            <span>ড্যাশবোর্ড</span>
          </Link>
          <Link 
            to="/admin/posts" 
            className={`flex items-center space-x-3 px-4 py-3 rounded transition-colors ${isActive('/admin/posts') ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <FileText size={20} />
            <span>সকল নিউজ</span>
          </Link>
          <Link 
            to="/admin/posts/new" 
            className={`flex items-center space-x-3 px-4 py-3 rounded transition-colors ${isActive('/admin/posts/new') ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <PlusCircle size={20} />
            <span>নতুন নিউজ</span>
          </Link>
          <Link 
            to="/admin/settings" 
            className={`flex items-center space-x-3 px-4 py-3 rounded transition-colors ${isActive('/admin/settings') ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Settings size={20} />
            <span>সেটিংস</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-gray-800 hover:text-red-300 w-full rounded transition-colors"
          >
            <LogOut size={20} />
            <span>লগ আউট</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
          <h2 className="text-xl font-bold text-gray-800">অ্যাডমিন প্যানেল</h2>
          <div className="flex items-center space-x-4">
            <Link to="/" target="_blank" className="text-sm text-blue-600 hover:underline">
              ওয়েবসাইট ভিজিট করুন
            </Link>
            <div className="flex items-center space-x-2 border-l pl-4 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={16} className="text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Administrator</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8 overflow-y-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;