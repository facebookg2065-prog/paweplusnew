import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { Star, ShieldCheck, Download, ArrowRight, Share2, Heart } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Handle case where ID might have suffix from the mock list in Products.tsx
  const cleanId = id?.split('-')[0]; 
  const product = PRODUCTS.find(p => p.id === cleanId);

  if (!product) {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl text-white">المنتج غير موجود</h2>
            <Link to="/products">
                <Button variant="secondary">العودة للمنتجات</Button>
            </Link>
        </div>
    );
  }

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto animate-in fade-in duration-500">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
            <Link to="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <ArrowRight size={18} />
                <span>الرجوع للمنتجات</span>
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Image */}
            <div className="lg:col-span-5">
                <div className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 sticky top-24">
                    <img src={product.imageUrl} alt={product.title} className="w-full h-auto object-cover" />
                </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-900/30 text-red-500 px-3 py-1 rounded-full text-xs font-bold border border-red-900/50">
                        {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                        <Star size={16} fill="currentColor" />
                        <span className="font-bold">{product.rating}</span>
                        <span className="text-gray-500">(50+ تقييم)</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {product.title}
                </h1>

                <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-4xl font-bold text-red-500">${product.price}</span>
                    <span className="text-gray-500 line-through text-lg">${(product.price * 1.2).toFixed(2)}</span>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 border-b border-gray-800 pb-8">
                    {product.longDescription || product.description}
                </p>

                {/* Features */}
                {product.features && (
                    <div className="mb-8">
                        <h3 className="text-white font-bold mb-4">المميزات:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {product.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-400">
                                    <ShieldCheck className="text-red-500 flex-shrink-0" size={18} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <Button variant="primary" className="!py-4 flex-grow text-lg flex items-center justify-center gap-2">
                        <Download size={20} />
                        شراء وتحميل الآن
                    </Button>
                    <Button variant="secondary" className="!py-4 !px-4">
                        <Heart size={20} />
                    </Button>
                    <Button variant="secondary" className="!py-4 !px-4">
                        <Share2 size={20} />
                    </Button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ShieldCheck size={16} />
                    <span>دفع آمن 100% · تسليم فوري</span>
                </div>
            </div>
        </div>
    </div>
  );
};