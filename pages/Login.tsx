import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 animate-in fade-in duration-500">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-900" />
        
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">تسجيل الدخول</h1>
            <p className="text-gray-500">مرحباً بعودتك! الرجاء إدخال بياناتك</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
            <Input label="البريد الإلكتروني" type="email" placeholder="name@company.com" required />
            <Input label="كلمة المرور" type="password" placeholder="••••••••" required />
            
            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-gray-300">
                <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-red-600 focus:ring-red-600" />
                <span>تذكرني</span>
                </label>
                <a href="#" className="text-red-500 hover:text-red-400">نسيت كلمة المرور؟</a>
            </div>

            <Button variant="primary" fullWidth className="!py-3 shadow-red-900/20">
                تسجيل الدخول
            </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
            ليس لديك حساب؟{' '}
            <Link to="/register" className="text-red-500 font-bold hover:underline">
                اشترك الآن
            </Link>
        </div>
      </div>
    </div>
  );
};