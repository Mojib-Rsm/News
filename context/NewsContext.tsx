
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Article } from '../types';
import { MOCK_ARTICLES } from '../constants';

interface NewsContextType {
  articles: Article[];
  addArticle: (article: Article) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;
  getArticle: (id: string) => Article | undefined;
  getArticleBySlug: (slug: string) => Article | undefined;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>(MOCK_ARTICLES);

  const addArticle = (article: Article) => {
    setArticles(prev => [article, ...prev]);
  };

  const updateArticle = (updatedArticle: Article) => {
    setArticles(prev => prev.map(a => a.id === updatedArticle.id ? updatedArticle : a));
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  const getArticle = (id: string) => {
    return articles.find(a => a.id === id);
  };

  const getArticleBySlug = (slug: string) => {
    return articles.find(a => a.slug === slug);
  };

  return (
    <NewsContext.Provider value={{ articles, addArticle, updateArticle, deleteArticle, getArticle, getArticleBySlug }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};
