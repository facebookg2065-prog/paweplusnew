import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">تواصل معنا</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          هل لديك استفسار أو واجهت مشكلة؟ فريق الدعم لدينا جاهز لمساعدتك على مدار الساعة.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
                <Mail className="text-red-500 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-1">البريد الإلكتروني</h3>
                <p className="text-gray-400 text-sm">support@powerplus.com</p>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
                <Phone className="text-red-500 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-1">الهاتف</h3>
                <p className="text-gray-400 text-sm">+1 234 567 890</p>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
                <MapPin className="text-red-500 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-1">العنوان</h3>
                <p className="text-gray-400 text-sm">المنطقة الرقمية، شارع الإنترنت</p>
            </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('تم الإرسال بنجاح!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="الاسم الكامل" placeholder="أدخل اسمك" />
                    <Input label="البريد الإلكتروني" type="email" placeholder="example@email.com" />
                </div>
                <Input label="الموضوع" placeholder="عنوان الرسالة" />
                <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-sm font-medium">الرسالة</label>
                    <textarea 
                        className="bg-[#0f0f0f] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none transition-all duration-200 min-h-[150px]"
                        placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                </div>
                <Button variant="primary" className="w-full md:w-auto !px-10">إرسال الرسالة</Button>
            </form>
        </div>
      </div>
    </div>
  );
};