import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">المنتجات الرقمية</h1>
          <p className="text-gray-400">تصفح أحدث المنتجات الحصرية، البرمجيات، والتصاميم</p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-80">
            <input 
              type="text" 
              placeholder="ابحث عن منتج..." 
              className="w-full bg-[#111] border border-gray-800 rounded-lg pl-4 pr-10 py-3 text-white focus:border-red-700 outline-none transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>
          <button className="bg-[#111] border border-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* Mocking more products for demo */}
        {PRODUCTS.map(product => (
          <ProductCard key={`${product.id}-duplicate`} product={{...product, id: `${product.id}-dup`, title: `${product.title} (نسخة)`}} />
        ))}
      </div>
    </div>
  );
};