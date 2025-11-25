
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { CATEGORIES } from '../constants';
import { Clock } from 'lucide-react';

interface NewsCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'compact' | 'sidebar';
}

const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'standard' }) => {
  const categoryLabel = CATEGORIES.find(c => c.id === article.category)?.label || article.category;
  
  // Format Time
  const timeAgo = (dateString: string) => {
    const diff = new Date().getTime() - new Date(dateString).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 1) return 'কিছুক্ষণ আগে';
    if (hours < 24) return `${hours} ঘণ্টা আগে`;
    return new Date(dateString).toLocaleDateString('bn-BD');
  };

  const linkPath = `/news/${article.slug}`;

  if (variant === 'featured') {
    return (
      <Link to={linkPath} className="group block h-full relative overflow-hidden rounded shadow-sm">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
          <span className="bg-primary text-white text-xs px-2 py-1 rounded w-max mb-2 font-bold">{categoryLabel}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 group-hover:underline decoration-primary underline-offset-4">
            {article.title}
          </h2>
          <p className="text-gray-300 text-sm line-clamp-2 hidden md:block">{article.excerpt}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'sidebar') {
    return (
      <Link to={linkPath} className="flex gap-3 group mb-4 items-start">
        <div className="w-24 h-16 shrink-0 overflow-hidden rounded bg-gray-200">
           <img src={article.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <h4 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h4>
          <span className="text-xs text-gray-500 mt-1 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {timeAgo(article.publishedAt)}
          </span>
        </div>
      </Link>
    );
  }

  // Standard and Compact
  return (
    <Link to={linkPath} className="group flex flex-col h-full bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`overflow-hidden relative ${variant === 'compact' ? 'h-32' : 'h-48'}`}>
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
         <span className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-0.5 rounded shadow">{categoryLabel}</span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className={`font-bold leading-tight mb-2 group-hover:text-primary transition-colors ${variant === 'compact' ? 'text-base' : 'text-xl'}`}>
          {article.title}
        </h3>
        {variant !== 'compact' && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-3 flex-1">
            {article.excerpt}
          </p>
        )}
        <div className="text-xs text-gray-400 mt-auto flex items-center justify-between border-t pt-2">
           <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {timeAgo(article.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
