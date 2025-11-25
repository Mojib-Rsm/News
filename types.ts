
export interface Article {
  id: string;
  slug: string; // Unique URL identifier
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  author: string;
  publishedAt: string;
  category: CategoryId;
  tags: string[]; // List of tags
  imageUrl: string;
  views: number;
  isBreaking?: boolean;
  isFeatured?: boolean;
}

export enum CategoryId {
  NATIONAL = 'national',
  INTERNATIONAL = 'international',
  POLITICS = 'politics',
  SPORTS = 'sports',
  ENTERTAINMENT = 'entertainment',
  TECH = 'tech',
  ECONOMY = 'economy',
  LIFESTYLE = 'lifestyle',
  OPINION = 'opinion'
}

export interface Category {
  id: CategoryId;
  label: string;
  slug: string;
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}
