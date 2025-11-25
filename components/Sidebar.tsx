import React, { useState } from 'react';
import { useNews } from '../context/NewsContext';
import NewsCard from './NewsCard';
import { CloudSun, TrendingUp, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  const { articles } = useNews();
  const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest');

  // Sort mock data for tabs
  const latestNews = [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 5);
  const popularNews = [...articles].sort((a, b) => b.views - a.views).slice(0, 5);

  const list = activeTab === 'latest' ? latestNews : popularNews;

  return (
    <aside className="space-y-8">
      
      {/* Weather Widget */}
      <div className="bg-white p-4 rounded shadow-sm border border-blue-100 bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-gray-700">ঢাকা, বাংলাদেশ</h4>
            <div className="text-3xl font-bold text-primary mt-1">২৮°সে.</div>
            <p className="text-sm text-gray-500">আংশিক মেঘলা</p>
          </div>
          <CloudSun className="w-12 h-12 text-yellow-500" />
        </div>
      </div>

      {/* Tabs: Latest / Popular */}
      <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b">
          <button 
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider ${activeTab === 'latest' ? 'bg-white text-primary border-t-2 border-primary' : 'bg-gray-50 text-gray-500'}`}
            onClick={() => setActiveTab('latest')}
          >
            সর্বশেষ
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider ${activeTab === 'popular' ? 'bg-white text-primary border-t-2 border-primary' : 'bg-gray-50 text-gray-500'}`}
            onClick={() => setActiveTab('popular')}
          >
            জনপ্রিয়
          </button>
        </div>
        <div className="p-4">
          {list.map(article => (
            <NewsCard key={article.id} article={article} variant="sidebar" />
          ))}
        </div>
      </div>

      {/* Ad Square 300x250 */}
      <div className="bg-gray-100 w-full aspect-[6/5] flex items-center justify-center text-gray-400 border border-dashed border-gray-300">
        বিজ্ঞাপন (300x250)
      </div>

      {/* Newsletter */}
      <div className="bg-secondary text-white p-6 rounded text-center">
        <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
        <h3 className="font-bold text-lg mb-2">নিউজলেটার সাবস্ক্রাইব করুন</h3>
        <p className="text-xs text-gray-400 mb-4">প্রতিদিন সকালে গুরুত্বপূর্ণ খবর পেতে আপনার ইমেইল দিন।</p>
        <div className="flex flex-col gap-2">
          <input type="email" placeholder="আপনার ইমেইল..." className="px-3 py-2 text-gray-900 rounded focus:outline-none" />
          <button className="bg-primary text-white font-bold py-2 rounded hover:bg-red-700 transition-colors">
            সাবস্ক্রাইব
          </button>
        </div>
      </div>

      {/* Social Follow */}
      <div className="bg-white p-4 rounded shadow-sm">
         <h4 className="font-bold border-b pb-2 mb-4 flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-primary"/> কানেক্টেড থাকুন</h4>
         <div className="grid grid-cols-2 gap-2">
            <button className="bg-[#1877F2] text-white text-sm py-2 rounded flex items-center justify-center">Facebook</button>
            <button className="bg-[#1DA1F2] text-white text-sm py-2 rounded flex items-center justify-center">Twitter</button>
            <button className="bg-[#FF0000] text-white text-sm py-2 rounded flex items-center justify-center">Youtube</button>
            <button className="bg-[#E1306C] text-white text-sm py-2 rounded flex items-center justify-center">Instagram</button>
         </div>
      </div>

    </aside>
  );
};

export default Sidebar;