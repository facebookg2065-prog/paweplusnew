import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-gray-400 text-sm font-medium">{label}</label>}
      <input 
        className={`bg-[#0f0f0f] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none transition-all duration-200 ${className}`}
        {...props}
      />
    </div>
  );
};