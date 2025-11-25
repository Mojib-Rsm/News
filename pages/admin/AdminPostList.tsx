import React, { useState } from 'react';
import { useNews } from '../../context/NewsContext';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Eye, Search } from 'lucide-react';
import { CATEGORIES } from '../../constants';

const AdminPostList: React.FC = () => {
  const { articles, deleteArticle } = useNews();
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id: string) => {
    if (window.confirm('আপনি কি নিশ্চিত যে আপনি এই নিউজটি ডিলিট করতে চান?')) {
      deleteArticle(id);
    }
  };

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-bold text-gray-800">সকল নিউজ ({articles.length})</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="খুঁজুন..." 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
              <th className="px-6 py-4 font-semibold">শিরোনাম</th>
              <th className="px-6 py-4 font-semibold">বিভাগ</th>
              <th className="px-6 py-4 font-semibold">লেখক</th>
              <th className="px-6 py-4 font-semibold">তারিখ</th>
              <th className="px-6 py-4 font-semibold text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredArticles.map(article => (
              <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img src={article.imageUrl} alt="" className="w-12 h-12 rounded object-cover" />
                    <span className="font-medium text-gray-900 line-clamp-1 max-w-xs" title={article.title}>
                      {article.title}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {CATEGORIES.find(c => c.id === article.category)?.label || article.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{article.author}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(article.publishedAt).toLocaleDateString('bn-BD')}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Link to={`/article/${article.id}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600">
                      <Eye size={18} />
                    </Link>
                    <Link to={`/admin/posts/edit/${article.id}`} className="p-2 text-gray-400 hover:text-green-600">
                      <Edit size={18} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(article.id)}
                      className="p-2 text-gray-400 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredArticles.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  কোনো নিউজ পাওয়া যায়নি
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPostList;