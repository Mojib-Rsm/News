import React from 'react';
import { useNews } from '../context/NewsContext';
import { CategoryId } from '../types';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { articles } = useNews();
  
  // Sort articles by date descending
  const sortedArticles = [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const featuredArticle = sortedArticles.find(a => a.isFeatured) || sortedArticles[0];
  const subFeaturedArticles = sortedArticles.filter(a => a.id !== featuredArticle.id).slice(0, 2);
  const otherNews = sortedArticles.filter(a => a.id !== featuredArticle.id && !subFeaturedArticles.includes(a)).slice(0, 6);

  // Group by category for blocks
  const nationalNews = sortedArticles.filter(a => a.category === CategoryId.NATIONAL).slice(0, 3);
  const politicsNews = sortedArticles.filter(a => a.category === CategoryId.POLITICS).slice(0, 3);
  const sportsNews = sortedArticles.filter(a => a.category === CategoryId.SPORTS).slice(0, 3);
  const entertainmentNews = sortedArticles.filter(a => a.category === CategoryId.ENTERTAINMENT).slice(0, 3);
  const techNews = sortedArticles.filter(a => a.category === CategoryId.TECH).slice(0, 3);
  const internationalNews = sortedArticles.filter(a => a.category === CategoryId.INTERNATIONAL).slice(0, 3);

  return (
    <div className="animate-fade-in">
      
      {/* Hero Section */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Lead News (8 cols) */}
          <div className="md:col-span-8 h-[400px] md:h-[500px]">
            <NewsCard article={featuredArticle} variant="featured" />
          </div>

          {/* Secondary News (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4 h-[500px]">
             {subFeaturedArticles.map(article => (
               <div key={article.id} className="flex-1">
                 <NewsCard article={article} variant="featured" /> 
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Content) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Latest News Grid */}
          <section>
            <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
              <h2 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-primary pl-3">সর্বশেষ খবর</h2>
              <Link to="/category/all" className="text-sm text-primary flex items-center hover:underline">আরও দেখুন <ChevronRight className="w-4 h-4"/></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {otherNews.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>

           {/* Category Block: National */}
           <section>
             <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
              <h2 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-primary pl-3">জাতীয়</h2>
              <Link to="/category/national" className="text-sm text-primary flex items-center hover:underline">সব খবর <ChevronRight className="w-4 h-4"/></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {nationalNews.length > 0 ? nationalNews.map(a => <NewsCard key={a.id} article={a} variant="compact" />) : <p className="text-gray-500">কোনো খবর পাওয়া যায়নি</p>}
            </div>
          </section>

          {/* Category Block: Politics */}
          {politicsNews.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
                <h2 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-primary pl-3">রাজনীতি</h2>
                <Link to="/category/politics" className="text-sm text-primary flex items-center hover:underline">সব খবর <ChevronRight className="w-4 h-4"/></Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="md:col-span-2">
                     <NewsCard article={politicsNews[0]} />
                 </div>
                 {politicsNews.slice(1).map(a => <NewsCard key={a.id} article={a} variant="sidebar" />)}
              </div>
            </section>
          )}

          {/* Category Block: Sports */}
          <section>
             <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
              <h2 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-primary pl-3">খেলাধুলা</h2>
              <Link to="/category/sports" className="text-sm text-primary flex items-center hover:underline">সব খবর <ChevronRight className="w-4 h-4"/></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {sportsNews.length > 0 ? sportsNews.map(a => <NewsCard key={a.id} article={a} variant="compact" />) : <p className="text-gray-500">কোনো খবর পাওয়া যায়নি</p>}
            </div>
          </section>

          {/* Ad Banner */}
          <div className="w-full h-32 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            বিজ্ঞাপন
          </div>

          {/* Category Block: Entertainment */}
          {entertainmentNews.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
                <h2 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-primary pl-3">বিনোদন</h2>
                <Link to="/category/entertainment" className="text-sm text-primary flex items-center hover:underline">সব খবর <ChevronRight className="w-4 h-4"/></Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {entertainmentNews.map(a => <NewsCard key={a.id} article={a} variant="compact" />)}
              </div>
            </section>
          )}

           {/* Category Block: Tech */}
           <section>
             <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
              <h2 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-primary pl-3">তথ্যপ্রযুক্তি</h2>
              <Link to="/category/tech" className="text-sm text-primary flex items-center hover:underline">সব খবর <ChevronRight className="w-4 h-4"/></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {techNews.length > 0 && (
                 <>
                   <div className="md:col-span-1">
                     <NewsCard article={techNews[0]} />
                   </div>
                   <div className="md:col-span-1 flex flex-col gap-4">
                      {techNews.slice(1).map(a => <NewsCard key={a.id} article={a} variant="sidebar" />)}
                   </div>
                 </>
               )}
            </div>
          </section>

           {/* Category Block: International */}
           {internationalNews.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
                <h2 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-primary pl-3">আন্তর্জাতিক</h2>
                <Link to="/category/international" className="text-sm text-primary flex items-center hover:underline">সব খবর <ChevronRight className="w-4 h-4"/></Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                 {internationalNews.map(a => <NewsCard key={a.id} article={a} variant="standard" />)}
              </div>
            </section>
          )}

        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>

      </div>
    </div>
  );
};

export default HomePage;