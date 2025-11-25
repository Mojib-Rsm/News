import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">ডেইলি দেশ<span className="text-primary">২৪</span></h3>
            <p className="text-sm leading-relaxed mb-6">
              দেশের সব খবর সবার আগে। সত্য ও বস্তুনিষ্ঠ সংবাদ পরিবেশনে আমরা অঙ্গীকারবদ্ধ। ২৪ ঘণ্টা আপনার সাথে।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-primary pl-3">গুরুত্বপূর্ণ লিংক</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary hover:underline">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/contact" className="hover:text-primary hover:underline">যোগাযোগ</Link></li>
              <li><Link to="/terms" className="hover:text-primary hover:underline">শর্তাবলী</Link></li>
              <li><Link to="/privacy" className="hover:text-primary hover:underline">গোপনীয়তা নীতি</Link></li>
              <li><Link to="/advertise" className="hover:text-primary hover:underline">বিজ্ঞাপন দিন</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-primary pl-3">বিভাগসমূহ</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="hover:text-primary hover:underline">{cat.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-primary pl-3">যোগাযোগ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span>কারওয়ান বাজার, ঢাকা-১২১৫, বাংলাদেশ</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span>+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span>editor@dailydesh24.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Daily Desh 24. All rights reserved. | Developed by React Expert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;