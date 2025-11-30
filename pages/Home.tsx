import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Globe, Lock } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-12 px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-[#050505] to-[#050505] z-0 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0 pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left Content (Text & Showcase) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-white mb-2">القوة المطلقة</span>
              <span className="metallic-text text-transparent bg-clip-text">في يديك الآن</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              منصة POWER PLUS توفر لك أحدث المنتجات الرقمية، برمجيات الحماية، وأدوات الألعاب المتقدمة. سرعة، أمان، واحترافية لا تضاهى.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/products">
                <Button variant="primary" className="!px-8 !py-3 text-lg shadow-red-900/50">تصفح المنتجات</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="!px-8 !py-3 text-lg">اقرأ المزيد</Button>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="text-red-500" size={32} />
                <span className="font-bold text-sm">حماية قصوى</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Zap className="text-red-500" size={32} />
                <span className="font-bold text-sm">سرعة خارقة</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Globe className="text-red-500" size={32} />
                <span className="font-bold text-sm">دعم عالمي</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Lock className="text-red-500" size={32} />
                <span className="font-bold text-sm">دفع آمن</span>
              </div>
            </div>
          </div>

          {/* Right Content (Login Box - Sticky Look) */}
          <div className="lg:col-span-4 flex items-center">
            <div className="w-full bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-900" />
              
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">تسجيل الدخول</h2>
                <p className="text-gray-500 text-sm">أدخل بياناتك للمتابعة إلى لوحة التحكم</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = '#/dashboard'; }}>
                <Input placeholder="البريد الإلكتروني أو اسم المستخدم" />
                <Input type="password" placeholder="كلمة المرور" />
                
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group-hover:text-gray-300 text-gray-500 transition-colors">
                    <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-red-600 focus:ring-red-600" />
                    <span>تذكرني</span>
                  </label>
                  <a href="#" className="text-red-500 hover:text-red-400">نسيت كلمة المرور؟</a>
                </div>

                <Button variant="primary" fullWidth className="!py-3 shadow-none hover:shadow-lg hover:shadow-red-900/30">
                  تسجيل الدخول
                </Button>
                
                <Link to="/register">
                  <Button variant="secondary" fullWidth className="!py-3 mt-4">
                    إنشاء حساب جديد
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">أحدث المنتجات</h2>
              <p className="text-gray-400">تصفح أحدث الإضافات إلى متجرنا الرقمي</p>
            </div>
            <Link to="/products" className="text-red-500 hover:text-white transition-colors font-bold">
              عرض الكل &larr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};