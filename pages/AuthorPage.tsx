import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAuthorByName } from '../constants';
import { useNews } from '../context/NewsContext';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import { Mail, Facebook, Twitter, Linkedin, User, Award, FileText } from 'lucide-react';

const AuthorPage: React.FC = () => {
  const { authorName } = useParams<{ authorName: string }>();
  const { articles } = useNews();
  
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [authorName]);

  if (!authorName) {
    return <div className="text-center py-20">লেখক খুঁজে পাওয়া যায়নি</div>;
  }

  const decodedName = decodeURIComponent(authorName);
  const author = getAuthorByName(decodedName);
  
  // Filter articles by this author
  const authorArticles = articles.filter(a => a.author === decodedName);

  return (
    <div className="animate-fade-in">
      
      {/* Author Header Profile Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Avatar */}
        <div className="shrink-0 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-inner">
            <img 
              src={author.avatarUrl} 
              alt={author.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full border-2 border-white">
             <User className="w-4 h-4" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{author.name}</h1>
          <p className="text-primary font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
            <Award className="w-4 h-4" />
            {author.role}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
            {author.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
            {author.email && (
              <a href={`mailto:${author.email}`} className="flex items-center text-gray-500 hover:text-primary transition-colors border px-3 py-1 rounded-full">
                <Mail className="w-4 h-4 mr-2" />
                {author.email}
              </a>
            )}
            
            <div className="flex space-x-3 border-l pl-4 ml-2 border-gray-300">
               {author.socialLinks?.facebook && <a href={author.socialLinks.facebook} className="text-gray-400 hover:text-[#1877F2]"><Facebook className="w-5 h-5"/></a>}
               {author.socialLinks?.twitter && <a href={author.socialLinks.twitter} className="text-gray-400 hover:text-[#1DA1F2]"><Twitter className="w-5 h-5"/></a>}
               {author.socialLinks?.linkedin && <a href={author.socialLinks.linkedin} className="text-gray-400 hover:text-[#0A66C2]"><Linkedin className="w-5 h-5"/></a>}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 p-4 rounded-lg text-center min-w-[120px] border border-gray-100">
          <div className="text-3xl font-bold text-gray-900 mb-1">{authorArticles.length}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide font-medium flex items-center justify-center gap-1">
            <FileText className="w-3 h-3" /> সংবাদ
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Author's Articles List */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
             <h2 className="text-xl font-bold text-gray-800">
               {author.name}-এর সব খবর
             </h2>
          </div>

          {authorArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authorArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded text-gray-500">
              কোনো খবর পাওয়া যায়নি।
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>

      </div>
    </div>
  );
};

export default AuthorPage;