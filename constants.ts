import { Article, Category, CategoryId, Author } from './types';

export const CATEGORIES: Category[] = [
  { id: CategoryId.NATIONAL, label: 'জাতীয়', slug: '/category/national' },
  { id: CategoryId.INTERNATIONAL, label: 'আন্তর্জাতিক', slug: '/category/international' },
  { id: CategoryId.POLITICS, label: 'রাজনীতি', slug: '/category/politics' },
  { id: CategoryId.SPORTS, label: 'খেলাধুলা', slug: '/category/sports' },
  { id: CategoryId.ENTERTAINMENT, label: 'বিনোদন', slug: '/category/entertainment' },
  { id: CategoryId.TECH, label: 'প্রযুক্তি', slug: '/category/tech' },
  { id: CategoryId.ECONOMY, label: 'অর্থনীতি', slug: '/category/economy' },
  { id: CategoryId.LIFESTYLE, label: 'লাইফস্টাইল', slug: '/category/lifestyle' },
  { id: CategoryId.OPINION, label: 'মতামত', slug: '/category/opinion' },
];

const LOREM_IPSUM_BN = `
লরেম ইপসাম ডলার সিট আমেত, কনসেকটেচার এডিপিস্কিং ইলিট। নাল্লাম ভেরিয়াস, নিস এ ইন্টারডাম মলিস, কোয়াম স্যাপিয়েন ভেনেনটিস নিসি, ইন টেম্পর এরাট দুয়েস নন এনতে। 

সাসপেন্ডিস পোটেনটি। ভিভামাস ইন লিগুলা উট নেকিউ টেম্পর কনডিমেন্টাম। কুইস্ক ওডিও জাস্টো, ফাউসিবস এট ম্যাক্সিমাস ভিটায়, পোরটটিটর এসি জাস্টো। ইন হ্যাক হ্যাবিটাস প্লেটো ডিকটুমস্ট।

এই ঘটনার পর সাধারণ মানুষের মধ্যে ব্যাপক চাঞ্চল্য সৃষ্টি হয়েছে। প্রশাসন জানিয়েছে তারা দ্রুত পদক্ষেপ গ্রহণ করছে। বিশেষজ্ঞদের মতে, এটি একটি দীর্ঘমেয়াদী প্রভাব ফেলতে পারে। তবে আশার কথা হলো, স্থানীয় জনগণ এগিয়ে এসেছেন সাহায্যের জন্য।
`;

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'পদ্মা সেতুতে নতুন রেকর্ড: একদিনে সর্বোচ্চ টোল আদায়',
    excerpt: 'ঈদের ছুটিতে পদ্মা সেতু দিয়ে যাতায়াতকারী যানবাহনের সংখ্যা অতীতের সব রেকর্ড ছাড়িয়ে গেছে।',
    content: `পদ্মা সেতুতে টোল আদায়ে নতুন রেকর্ড সৃষ্টি হয়েছে। ${LOREM_IPSUM_BN}`,
    author: 'নিজস্ব প্রতিবেদক',
    publishedAt: '2023-10-27T10:00:00Z',
    category: CategoryId.NATIONAL,
    imageUrl: 'https://picsum.photos/seed/news1/800/450',
    views: 12500,
    isBreaking: true,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'বিশ্ববাজারে তেলের দাম কমলো, প্রভাব পড়বে কি দেশে?',
    excerpt: 'আন্তর্জাতিক বাজারে অপরিশোধিত তেলের দাম কমলেও দেশের বাজারে এর প্রভাব নিয়ে সংশয় রয়েছে।',
    content: `বিশ্ববাজারে অপরিশোধিত তেলের দাম ব্যারেল প্রতি ৮০ ডলারের নিচে নেমে এসেছে। ${LOREM_IPSUM_BN}`,
    author: 'অর্থনীতি ডেস্ক',
    publishedAt: '2023-10-27T09:30:00Z',
    category: CategoryId.ECONOMY,
    imageUrl: 'https://picsum.photos/seed/news2/800/450',
    views: 8400,
    isBreaking: false,
    isFeatured: true,
  },
  {
    id: '3',
    title: 'ক্রিকেটে নতুন নিয়ম চালু করলো আইসিসি',
    excerpt: 'স্লো ওভার রেটের জন্য এখন থেকে জরিমানার পাশাপাশি মাঠেই শাস্তি পেতে হবে।',
    content: `আইসিসি তাদের নতুন নির্দেশনায় জানিয়েছে... ${LOREM_IPSUM_BN}`,
    author: 'ক্রীড়া প্রতিবেদক',
    publishedAt: '2023-10-27T11:15:00Z',
    category: CategoryId.SPORTS,
    imageUrl: 'https://picsum.photos/seed/news3/800/450',
    views: 15200,
    isBreaking: true,
  },
  {
    id: '4',
    title: 'কৃত্রিম বুদ্ধিমত্তার নতুন যুগে গুগল জেমিনি',
    excerpt: 'গুগল তাদের নতুন এআই মডেল জেমিনি উন্মুক্ত করেছে যা চ্যাটজিপিটিকে টেক্কা দেবে।',
    content: `প্রযুক্তি বিশ্বে নতুন বিপ্লব ঘটাতে আসছে গুগলের জেমিনি। ${LOREM_IPSUM_BN}`,
    author: 'টেক রিপোর্টার',
    publishedAt: '2023-10-26T18:00:00Z',
    category: CategoryId.TECH,
    imageUrl: 'https://picsum.photos/seed/news4/800/450',
    views: 22000,
    isFeatured: true,
  },
  {
    id: '5',
    title: 'ঢাকায় আজ বৃষ্টির সম্ভাবনা, বাড়তে পারে শীত',
    excerpt: 'আবহাওয়া অধিদপ্তর জানিয়েছে, আগামী ২৪ ঘণ্টায় দেশের বিভিন্ন স্থানে হালকা বৃষ্টির সম্ভাবনা রয়েছে।',
    content: `কার্তিকের শেষে শীতের আমেজ। ${LOREM_IPSUM_BN}`,
    author: 'আবহাওয়া অফিস',
    publishedAt: '2023-10-27T08:00:00Z',
    category: CategoryId.NATIONAL,
    imageUrl: 'https://picsum.photos/seed/news5/800/450',
    views: 5600,
  },
  {
    id: '6',
    title: 'নতুন সিনেমার ঘোষণা দিলেন সুপারস্টার শাকিব খান',
    excerpt: 'আগামী ঈদে মুক্তি পাবে বিগ বাজেটের এই সিনেমা।',
    content: `ঢালিউড সুপারস্টার শাকিব খান... ${LOREM_IPSUM_BN}`,
    author: 'বিনোদন প্রতিবেদক',
    publishedAt: '2023-10-26T20:00:00Z',
    category: CategoryId.ENTERTAINMENT,
    imageUrl: 'https://picsum.photos/seed/news6/800/450',
    views: 35000,
  },
  {
    id: '7',
    title: 'গাজায় মানবিক সহায়তা পৌঁছানো জরুরি: জাতিসংঘ',
    excerpt: 'জরুরি ভিত্তিতে যুদ্ধবিরতি ও ত্রাণ সহায়তার আহ্বান জানিয়েছে জাতিসংঘ।',
    content: `গাজা পরিস্থিতি নিয়ে গভীর উদ্বেগ প্রকাশ করেছেন জাতিসংঘ মহাসচিব। ${LOREM_IPSUM_BN}`,
    author: 'আন্তর্জাতিক ডেস্ক',
    publishedAt: '2023-10-27T12:00:00Z',
    category: CategoryId.INTERNATIONAL,
    imageUrl: 'https://picsum.photos/seed/news7/800/450',
    views: 45000,
    isBreaking: true,
  },
  // New Articles for extended categories
  {
    id: '8',
    title: 'নির্বাচন কমিশন গঠনে নতুন আইন প্রস্তাব',
    excerpt: 'জাতীয় সংসদে নির্বাচন কমিশন গঠন সংক্রান্ত নতুন বিল উত্থাপন করা হয়েছে।',
    content: `নির্বাচন কমিশন গঠনে স্বচ্ছতা আনতে সরকার নতুন আইনের খসড়া প্রস্তুত করেছে। ${LOREM_IPSUM_BN}`,
    author: 'নিজস্ব প্রতিবেদক',
    publishedAt: '2023-10-28T14:00:00Z',
    category: CategoryId.POLITICS,
    imageUrl: 'https://picsum.photos/seed/news8/800/450',
    views: 18000,
    isBreaking: true,
  },
  {
    id: '9',
    title: 'রাজনৈতিক দলগুলোর মধ্যে সংলাপের আহ্বান',
    excerpt: 'বিশিষ্ট নাগরিকরা রাজনৈতিক সংকট নিরসনে দলগুলোর মধ্যে সংলাপের আহ্বান জানিয়েছেন।',
    content: `দেশের চলমান রাজনৈতিক পরিস্থিতি নিয়ে উদ্বেগ প্রকাশ করেছেন বিশিষ্টজনেরা। ${LOREM_IPSUM_BN}`,
    author: 'নিজস্ব প্রতিবেদক',
    publishedAt: '2023-10-28T11:00:00Z',
    category: CategoryId.POLITICS,
    imageUrl: 'https://picsum.photos/seed/news9/800/450',
    views: 11000,
  },
  {
    id: '10',
    title: 'অস্কারের দৌড়ে বাংলাদেশের সিনেমা',
    excerpt: '৯৬তম অস্কার আসরে আন্তর্জাতিক ফিচার ফিল্ম বিভাগে লড়বে বাংলাদেশের ছবি।',
    content: `বাংলাদেশের চলচ্চিত্র অঙ্গনে নতুন ইতিহাস। ${LOREM_IPSUM_BN}`,
    author: 'বিনোদন প্রতিবেদক',
    publishedAt: '2023-10-28T09:00:00Z',
    category: CategoryId.ENTERTAINMENT,
    imageUrl: 'https://picsum.photos/seed/news10/800/450',
    views: 29000,
    isFeatured: true,
  },
  {
    id: '11',
    title: 'মেট্রোরেলের সময়সূচিতে পরিবর্তন',
    excerpt: 'যাত্রীদের সুবিধার্থে মেট্রোরেল চলাচলের সময় বাড়ানোর সিদ্ধান্ত নিয়েছে কর্তৃপক্ষ।',
    content: `আগামী মাস থেকে রাত ৮টা পর্যন্ত চলবে মেট্রোরেল। ${LOREM_IPSUM_BN}`,
    author: 'নিজস্ব প্রতিবেদক',
    publishedAt: '2023-10-28T08:30:00Z',
    category: CategoryId.NATIONAL,
    imageUrl: 'https://picsum.photos/seed/news11/800/450',
    views: 42000,
  },
  {
    id: '12',
    title: 'যুক্তরাষ্ট্রের নির্বাচনে হাড্ডাহাড্ডি লড়াইয়ের আভাস',
    excerpt: 'জনমত জরিপে দেখা যাচ্ছে ডেমোক্র্যাট ও রিপাবলিকান প্রার্থীর মধ্যে ব্যবধান খুবই কম।',
    content: `আসন্ন মার্কিন নির্বাচন নিয়ে বিশ্বজুড়ে কৌতূহল। ${LOREM_IPSUM_BN}`,
    author: 'আন্তর্জাতিক ডেস্ক',
    publishedAt: '2023-10-28T16:00:00Z',
    category: CategoryId.INTERNATIONAL,
    imageUrl: 'https://picsum.photos/seed/news12/800/450',
    views: 31000,
  },
  {
    id: '13',
    title: 'ডেঙ্গু পরিস্থিতি নিয়ে নতুন সতর্কতা',
    excerpt: 'স্বাস্থ্য অধিদপ্তর জানিয়েছে, ডেঙ্গু প্রতিরোধে সবাইকে সচেতন হতে হবে।',
    content: `হাসপাতালগুলোতে ডেঙ্গু রোগীর চাপ বাড়ছে। ${LOREM_IPSUM_BN}`,
    author: 'স্বাস্থ্য প্রতিবেদক',
    publishedAt: '2023-10-28T10:00:00Z',
    category: CategoryId.NATIONAL,
    imageUrl: 'https://picsum.photos/seed/news13/800/450',
    views: 19500,
  }
];

export const BREAKING_NEWS = MOCK_ARTICLES.filter(a => a.isBreaking).map(a => a.title);

export const AUTHORS: Author[] = [
  {
    name: 'নিজস্ব প্রতিবেদক',
    role: 'সিনিয়র রিপোর্টার',
    bio: 'সাদাসিধে জীবনে বিশ্বাসী। সত্যের সন্ধানে অবিচল। ডেইলি দেশ ২৪-এর সাথে আছেন শুরু থেকেই। রাজনীতি ও সমসাময়িক বিষয় নিয়ে কাজ করতে পছন্দ করেন।',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'reporter@dailydesh24.com',
    socialLinks: { facebook: '#', twitter: '#' }
  },
  {
    name: 'অর্থনীতি ডেস্ক',
    role: 'বিজনেস এডিটর',
    bio: 'অর্থনীতি, ব্যাংক ও শেয়ার বাজার নিয়ে বিশ্লেষণধর্মী সংবাদ প্রকাশে দক্ষ। ১০ বছরের অভিজ্ঞতাসম্পন্ন সাংবাদিক।',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'economy@dailydesh24.com'
  },
  {
    name: 'ক্রীড়া প্রতিবেদক',
    role: 'স্পোর্টস জার্নালিস্ট',
    bio: 'মাঠের খবর সবার আগে পাঠকের কাছে পৌঁছে দিতে বদ্ধপরিকর। ক্রিকেট এবং ফুটবল নিয়ে বিশেষ আগ্রহ রয়েছে।',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socialLinks: { twitter: '#' }
  },
  {
    name: 'টেক রিপোর্টার',
    role: 'টেকনোলজি এনালিস্ট',
    bio: 'প্রযুক্তির খুঁটিনাটি এবং গ্যাজেট রিভিউ নিয়ে কাজ করেন। এআই এবং নতুন উদ্ভাবন নিয়ে লেখালেখি তার নেশা।',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'tech@dailydesh24.com'
  },
  {
    name: 'বিনোদন প্রতিবেদক',
    role: 'কালচারাল করেসপন্ডেন্ট',
    bio: 'শবিজ অঙ্গনের সব খবরাখবর এবং তারকাদের সাক্ষাৎকার নিয়ে কাজ করেন।',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socialLinks: { facebook: '#', twitter: '#' }
  },
  {
    name: 'আন্তর্জাতিক ডেস্ক',
    role: 'ফরেইন এফেয়ার্স এডিটর',
    bio: 'বিশ্ব রাজনীতির জটিল সমীকরণ সহজ ভাষায় পাঠকের কাছে তুলে ধরেন।',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'intl@dailydesh24.com'
  },
   {
    name: 'আবহাওয়া অফিস',
    role: 'আবহাওয়াবিদ',
    bio: 'বাংলাদেশ আবহাওয়া অধিদপ্তরের নিয়মিত বুলেটিন এবং পূর্বাভাসের উপর ভিত্তি করে রিপোর্ট করেন।',
    avatarUrl: 'https://ui-avatars.com/api/?name=Weather+Office&background=0D8ABC&color=fff',
  },
  {
    name: 'স্বাস্থ্য প্রতিবেদক',
    role: 'স্বাস্থ্য সাংবাদিক',
    bio: 'জনস্বাস্থ্য, চিকিৎসা এবং হাসপাতাল সংক্রান্ত খবরাখবর সংগ্রহ করেন।',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
];

export const getAuthorByName = (name: string): Author => {
  return AUTHORS.find(a => a.name === name) || {
    name: name,
    role: 'কন্ট্রিবিউটর',
    bio: 'ডেইলি দেশ ২৪ এর নিয়মিত লেখক। সত্য ও বস্তুনিষ্ঠ সংবাদের সাথে।',
    avatarUrl: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&background=random&color=fff',
  };
};