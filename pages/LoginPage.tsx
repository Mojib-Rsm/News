import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - allow any inputs for demo
    if (email && password) {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <div className="bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
             <Lock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">অ্যাডমিন লগইন</h2>
          <p className="text-gray-500 text-sm mt-1">আপনার ক্রেডেনশিয়াল দিয়ে প্রবেশ করুন</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="admin@dailydesh24.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-primary text-white rounded font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
          >
            প্রবেশ করুন
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-gray-400">
          ডেমো এক্সেস: যেকোনো ইমেইল এবং পাসওয়ার্ড ব্যবহার করুন
        </div>
      </div>
    </div>
  );
};

export default LoginPage;