import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 animate-in fade-in duration-500">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-900" />
        
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">حساب جديد</h1>
            <p className="text-gray-500">انضم إلينا واحصل على أفضل المنتجات الرقمية</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
            <Input label="الاسم الكامل" placeholder="الاسم" required />
            <Input label="البريد الإلكتروني" type="email" placeholder="name@company.com" required />
            <Input label="كلمة المرور" type="password" placeholder="••••••••" required />
            <Input label="تأكيد كلمة المرور" type="password" placeholder="••••••••" required />
            
            <div className="flex items-start gap-2 text-sm text-gray-500">
                <input type="checkbox" className="mt-1 rounded bg-gray-800 border-gray-700 text-red-600 focus:ring-red-600" required />
                <span>
                    أوافق على <Link to="/terms" className="text-red-500 hover:underline">الشروط والأحكام</Link> و <Link to="/privacy" className="text-red-500 hover:underline">سياسة الخصوصية</Link>
                </span>
            </div>

            <Button variant="primary" fullWidth className="!py-3 shadow-red-900/20">
                إنشاء حساب
            </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
            لديك حساب بالفعل؟{' '}
            <Link to="/login" className="text-red-500 font-bold hover:underline">
                تسجيل الدخول
            </Link>
        </div>
      </div>
    </div>
  );
};