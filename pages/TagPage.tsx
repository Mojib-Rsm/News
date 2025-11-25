
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import { Hash } from 'lucide-react';

const TagPage: React.FC = () => {
  const { tagSlug } = useParams<{ tagSlug: string }>();
  const { articles } = useNews();
  
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tagSlug]);

  if (!tagSlug) {
    return <div className="text-center py-20">বিষয় খুঁজে পাওয়া যায়নি</div>;
  }

  const decodedTag = decodeURIComponent(tagSlug);
  
  // Filter articles by tag (case insensitive search)
  const tagArticles = articles.filter(a => 
    a.tags && a.tags.some(t => t.toLowerCase() === decodedTag.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      
      <div className="bg-gray-100 p-8 rounded-lg mb-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full mb-3 shadow-sm">
           <Hash className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-gray-900">
           {decodedTag}
        </h1>
        <p className="text-gray-500 mt-2">
           এই বিষয়ে মোট {tagArticles.length}টি সংবাদ পাওয়া গেছে
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Article List */}
        <div className="lg:col-span-8">
          {tagArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tagArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded text-gray-500 border border-gray-200">
              দুঃখিত, এই বিষয়ে কোনো খবর পাওয়া যায়নি।
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

export default TagPage;
