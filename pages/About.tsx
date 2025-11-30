import React from 'react';
import { Target, Shield, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">من نحن</h1>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 leading-relaxed">
          نحن في <strong className="text-white">POWER PLUS</strong> نقدم حلولاً رقمية متقدمة لبيع المنتجات الرقمية بأعلى مستويات الأمان والسرعة. هدفنا توفير تجربة سلسة للمستخدمين مع ضمان جودة عالية ودعم فني مستمر.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl text-center hover:border-red-900/50 transition-colors">
          <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
            <Target size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">رؤيتنا</h3>
          <p className="text-gray-400 text-sm">قيادة السوق الرقمي من خلال توفير منصة متكاملة تلبي احتياجات المبدعين واللاعبين.</p>
        </div>
        <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl text-center hover:border-red-900/50 transition-colors">
          <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
            <Shield size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">أمانك أولويتنا</h3>
          <p className="text-gray-400 text-sm">نستخدم أحدث تقنيات التشفير لضمان سلامة بياناتك ومعاملاتك المالية في كل خطوة.</p>
        </div>
        <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl text-center hover:border-red-900/50 transition-colors">
          <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">مجتمعنا</h3>
          <p className="text-gray-400 text-sm">نبني مجتمعاً قوياً من المستخدمين والمطورين لتبادل الخبرات والمنتجات المميزة.</p>
        </div>
      </div>

      <div className="bg-[#111] rounded-2xl p-8 md:p-12 border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-4">لماذا تختار POWER PLUS؟</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          موقع POWER PLUS هو متجر رقمي متخصص في بيع المنتجات الرقمية بطريقة احترافية، مع واجهة حديثة مستوحاة من التصميمات القوية. المنصة مبنية بأحدث تقنيات الويب لضمان السرعة والأداء العالي، ومتوافقة مع جميع المتصفحات والأجهزة.
        </p>
        <p className="text-gray-400 leading-relaxed">
          تم تصميم الموقع ليكون خفيف جداً، سريع، وسهل الاستخدام لجميع الفئات، مع دعم كامل للأجهزة المحمولة واللوحية.
        </p>
      </div>
    </div>
  );
};