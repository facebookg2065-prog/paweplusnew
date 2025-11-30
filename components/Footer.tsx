import React from 'react';
import { Bitcoin, Wallet, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black italic metallic-text mb-4">POWER PLUS</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              منصة رقمية متطورة توفر أفضل المنتجات الرقمية بآلية آمنة وسريعة. نسعى دائماً لتقديم الأفضل لعملائنا مع دعم فني متميز على مدار الساعة.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">روابط سريعة</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-red-500 transition-colors">الرئيسية</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">المنتجات</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">من نحن</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">الدعم القانوني</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/privacy" className="hover:text-red-500 transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" className="hover:text-red-500 transition-colors">الشروط والأحكام</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} POWER PLUS. جميع الحقوق محفوظة.
          </p>
          
          <div className="flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2" title="Crypto">
              <Bitcoin size={20} />
              <span className="text-xs font-bold">Crypto</span>
            </div>
            <div className="flex items-center gap-2" title="ETH">
              <span className="font-bold text-lg">Ξ</span>
              <span className="text-xs font-bold">ETH</span>
            </div>
            <div className="flex items-center gap-2" title="PayPal">
              <Wallet size={20} />
              <span className="text-xs font-bold">PayPal</span>
            </div>
            <div className="flex items-center gap-2" title="Payeer">
              <CreditCard size={20} />
              <span className="text-xs font-bold">PAYEER</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};