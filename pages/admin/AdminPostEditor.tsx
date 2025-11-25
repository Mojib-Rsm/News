
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNews } from '../../context/NewsContext';
import { CATEGORIES, AUTHORS, generateSlug } from '../../constants';
import { CategoryId } from '../../types';
import { RefreshCw } from 'lucide-react';

const AdminPostEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { articles, addArticle, updateArticle } = useNews();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: CategoryId.NATIONAL,
    author: AUTHORS[0].name,
    imageUrl: 'https://picsum.photos/800/450',
    tags: '',
    isBreaking: false,
    isFeatured: false,
  });

  useEffect(() => {
    if (isEditing && id) {
      const article = articles.find(a => a.id === id);
      if (article) {
        setFormData({
          title: article.title,
          slug: article.slug,
          excerpt: article.excerpt,
          content: article.content,
          category: article.category,
          author: article.author,
          imageUrl: article.imageUrl,
          tags: article.tags ? article.tags.join(', ') : '',
          isBreaking: article.isBreaking || false,
          isFeatured: article.isFeatured || false,
        });
      }
    }
  }, [isEditing, id, articles]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
       const checked = (e.target as HTMLInputElement).checked;
       setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
       setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleGenerateSlug = () => {
    if (formData.title) {
      setFormData(prev => ({ ...prev, slug: generateSlug(prev.title) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process tags
    const tagList = formData.tags.split(',').map(t => t.trim()).filter(t => t);

    const articleData = {
      ...formData,
      tags: tagList,
      views: isEditing ? articles.find(a => a.id === id)?.views || 0 : 0,
      publishedAt: isEditing ? articles.find(a => a.id === id)?.publishedAt || new Date().toISOString() : new Date().toISOString(),
    };

    if (isEditing && id) {
      updateArticle({ id, ...articleData });
      alert('নিউজ আপডেট করা হয়েছে!');
    } else {
      addArticle({ id: Date.now().toString(), ...articleData });
      alert('নতুন নিউজ প্রকাশিত হয়েছে!');
    }
    navigate('/admin/posts');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        {isEditing ? 'নিউজ এডিট করুন' : 'নতুন নিউজ লিখুন'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">শিরোনাম</label>
            <input 
              type="text" 
              name="title"
              value={formData.title} 
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="নিউজ শিরোনাম লিখুন"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Slug (URL)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                name="slug"
                value={formData.slug} 
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-mono text-sm"
                placeholder="news-title-slug"
              />
              <button 
                type="button" 
                onClick={handleGenerateSlug}
                className="bg-gray-100 px-4 py-2 rounded border border-gray-300 hover:bg-gray-200 text-gray-600"
                title="শিরোনাম থেকে অটো তৈরি করুন"
              >
                <RefreshCw size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Unique URL identifier (Example: padma-bridge-record)</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">বিভাগ</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none bg-white"
            >
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">লেখক</label>
            <select 
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none bg-white"
            >
              {AUTHORS.map(author => (
                <option key={author.name} value={author.name}>{author.name}</option>
              ))}
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
             <input 
              type="text" 
              name="imageUrl"
              value={formData.imageUrl} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
              placeholder="https://..."
            />
            {formData.imageUrl && (
              <img src={formData.imageUrl} alt="Preview" className="mt-2 h-32 w-auto rounded border" />
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">ট্যাগ (কমা দিয়ে লিখুন)</label>
            <input 
              type="text" 
              name="tags"
              value={formData.tags} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="যেমন: রাজনীতি, নির্বাচন, বাংলাদেশ"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">সারসংক্ষেপ (Excerpt)</label>
            <textarea 
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={2}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
              placeholder="ছোট বিবরণ..."
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">মূল সংবাদ (Content)</label>
            <textarea 
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={10}
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none font-serif"
              placeholder="বিস্তারিত সংবাদ লিখুন..."
            />
          </div>
          
           <div className="flex gap-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="isBreaking"
                  checked={formData.isBreaking}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-gray-700 font-medium">ব্রেকিং নিউজ</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-gray-700 font-medium">ফিচারড নিউজ</span>
              </label>
           </div>

        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
           <button 
            type="button" 
            onClick={() => navigate('/admin/posts')}
            className="px-6 py-3 rounded text-gray-600 hover:bg-gray-100 font-medium"
          >
            বাতিল
          </button>
          <button 
            type="submit" 
            className="px-8 py-3 bg-primary text-white rounded hover:bg-red-700 font-medium"
          >
            {isEditing ? 'আপডেট করুন' : 'প্রকাশ করুন'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPostEditor;
