import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import { CATEGORIES } from '../constants';
import Sidebar from '../components/Sidebar';
import { Calendar, User, Eye, Share2, Sparkles, MessageSquare, Printer, Link as LinkIcon, Check, Facebook, MessageCircle } from 'lucide-react';
import { summarizeArticle } from '../services/geminiService';
import NewsCard from '../components/NewsCard';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { articles } = useNews();
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [copied, setCopied] = useState(false);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
    setSummary(null); // Reset summary
    setCopied(false);
  }, [id]);

  const article = articles.find(a => a.id === id);
  const relatedNews = articles.filter(a => a.category === article?.category && a.id !== id).slice(0, 3);

  if (!article) {
    return <div className="text-center py-20 text-xl text-gray-500">খবরটি পাওয়া যায়নি।</div>;
  }

  const categoryLabel = CATEGORIES.find(c => c.id === article.category)?.label;

  const handleSummarize = async () => {
    setLoadingSummary(true);
    const result = await summarizeArticle(article.content);
    setSummary(result);
    setLoadingSummary(false);
  };

  const handleShare = (platform: 'facebook' | 'whatsapp') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
    } else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Main Article Content */}
      <div className="lg:col-span-8 bg-white p-6 md:p-8 rounded shadow-sm border border-gray-100">
        
        {/* Breadcrumb */}
        <div className="text-sm text-primary font-bold mb-4 uppercase tracking-wider">
          {categoryLabel}
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4 border-b border-gray-200 pb-4">
          <Link to={`/author/${encodeURIComponent(article.author)}`} className="flex items-center group">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-2 group-hover:bg-primary group-hover:text-white transition-colors">
              <User className="w-4 h-4" />
            </div>
            <span className="font-semibold text-gray-700 group-hover:text-primary transition-colors">{article.author}</span>
          </Link>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(article.publishedAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </div>
           <div className="flex items-center">
            <Eye className="w-4 h-4 mr-2" />
            {article.views.toLocaleString('bn-BD')} বার পঠিত
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded overflow-hidden">
          <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover" />
          <p className="text-xs text-gray-500 mt-2 italic text-right">ছবি: সংগৃহীত</p>
        </div>

        {/* Gemini AI Summary Box */}
        <div className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border border-blue-100 rounded-lg p-6 no-print">
          <div className="flex items-center justify-between mb-3">
             <h3 className="flex items-center text-blue-800 font-bold text-lg">
               <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
               AI সারসংক্ষেপ (Gemini)
             </h3>
             {!summary && (
               <button 
                 onClick={handleSummarize}
                 disabled={loadingSummary}
                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all disabled:opacity-50"
               >
                 {loadingSummary ? 'তৈরি হচ্ছে...' : 'সারসংক্ষেপ দেখুন'}
               </button>
             )}
          </div>
          
          {summary && (
            <div className="animate-fade-in bg-white/60 p-4 rounded border border-blue-100 text-gray-800 leading-relaxed font-medium">
              {summary}
            </div>
          )}
          {!summary && !loadingSummary && (
             <p className="text-sm text-gray-500">পুরো খবর পড়ার সময় নেই? এক ক্লিকে মূল অংশ জেনে নিন।</p>
          )}
        </div>

        {/* Main Content */}
        <article className="prose prose-lg prose-red max-w-none mb-8 text-gray-800 font-serif leading-8">
           {article.content.split('\n').map((paragraph, idx) => (
             <p key={idx} className="mb-4 text-justify">{paragraph}</p>
           ))}
        </article>

        {/* Share Buttons */}
        <div className="flex flex-wrap items-center gap-3 border-t border-b border-gray-200 py-6 mb-8 no-print">
          <span className="font-bold text-gray-700 flex items-center mr-2"><Share2 className="w-5 h-5 mr-2"/> শেয়ার করুন:</span>
          
          <button 
            onClick={() => handleShare('facebook')}
            className="flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Facebook className="w-4 h-4" /> Facebook
          </button>

          <button 
            onClick={() => handleShare('whatsapp')}
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </button>

          <button 
            onClick={handleCopyLink}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <LinkIcon className="w-4 h-4" />}
            {copied ? 'Copied' : 'Link'}
          </button>

          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors text-sm font-medium ml-auto"
            title="প্রিন্ট করুন"
          >
            <Printer className="w-4 h-4" /> Print
          </button>
        </div>

        {/* Comment Section (Mock) */}
        <div className="mb-12 no-print">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-primary"/> মন্তব্যসমূহ
          </h3>
          <div className="bg-gray-50 p-6 rounded text-center border border-gray-200">
            <p className="text-gray-500 mb-4">মন্তব্য করতে লগইন করুন</p>
            <button className="bg-primary text-white px-6 py-2 rounded hover:bg-red-700">লগইন</button>
          </div>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="no-print">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-3">আরও পড়ুন</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map(a => (
                <NewsCard key={a.id} article={a} variant="compact" />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4">
        <Sidebar />
      </div>

    </div>
  );
};

export default ArticlePage;