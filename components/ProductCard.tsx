import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-[#111] border border-gray-800 hover:border-red-900/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-xs text-white font-bold">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-red-500 transition-colors">
            {product.title}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <Star size={14} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-white">
            ${product.price}
          </span>
          <Button variant="primary" className="!px-4 !py-2 text-sm flex items-center gap-2">
            <ShoppingCart size={16} />
            شراء
          </Button>
        </div>
      </div>
    </div>
  );
};