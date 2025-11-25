import React from 'react';
import { useNews } from '../../context/NewsContext';
import { FileText, Eye, Users, TrendingUp, PlusCircle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { articles } = useNews();

  const totalViews = articles.reduce((acc, curr) => acc + curr.views, 0);
  const totalArticles = articles.length;
  // Mock active users
  const activeUsers = 124;

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center space-x-4">
      <div className={`p-4 rounded-full ${color} text-white`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="মোট নিউজ" value={totalArticles} icon={FileText} color="bg-blue-500" />
        <StatCard title="মোট ভিউ" value={totalViews.toLocaleString()} icon={Eye} color="bg-green-500" />
        <StatCard title="অ্যাক্টিভ ইউজার" value={activeUsers} icon={Users} color="bg-purple-500" />
        <StatCard title="ট্রেন্ডিং" value="৮টি" icon={TrendingUp} color="bg-red-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-800">সর্বশেষ প্রকাশিত নিউজ</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {articles.slice(0, 5).map(article => (
              <div key={article.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <img src={article.imageUrl} alt="" className="w-10 h-10 rounded object-cover" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{article.title}</h4>
                    <p className="text-xs text-gray-500">{new Date(article.publishedAt).toLocaleDateString('bn-BD')}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                  {article.views} ভিউ
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-4">দ্রুত অ্যাকশন</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-gray-200 rounded hover:border-primary hover:text-primary transition-colors flex flex-col items-center justify-center text-center">
              <PlusCircle size={24} className="mb-2" />
              <span className="font-medium text-sm">নতুন নিউজ লিখুন</span>
            </button>
            <button className="p-4 border border-gray-200 rounded hover:border-blue-500 hover:text-blue-500 transition-colors flex flex-col items-center justify-center text-center">
              <Users size={24} className="mb-2" />
              <span className="font-medium text-sm">রিপোর্টার যোগ করুন</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;