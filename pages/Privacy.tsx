import React from 'react';
import { Lock, Eye, Database, Cookie } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">سياسة الخصوصية</h1>
      
      <div className="space-y-8">
        <section className="bg-[#111] p-8 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <Database className="text-red-500" size={24} />
            <h2 className="text-xl font-bold text-white">آلية جمع البيانات</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            نقوم بجمع البيانات الأساسية اللازمة لإتمام عمليات الشراء وتسجيل العضوية، مثل الاسم، البريد الإلكتروني، وتفاصيل الدفع المشفرة. نحن نضمن أن هذه البيانات تستخدم فقط لغرض تحسين تجربتك في الموقع.
          </p>
        </section>

        <section className="bg-[#111] p-8 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <Lock className="text-red-500" size={24} />
            <h2 className="text-xl font-bold text-white">حماية المعلومات</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            نلتزم بأعلى معايير الأمان العالمية لحماية معلوماتك الشخصية. يتم تشفير جميع البيانات الحساسة باستخدام بروتوكولات SSL المتقدمة ولا يتم مشاركتها مع أي طرف خارجي دون موافقتك الصريحة.
          </p>
        </section>

        <section className="bg-[#111] p-8 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="text-red-500" size={24} />
            <h2 className="text-xl font-bold text-white">ملفات الارتباط (Cookies)</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            يستخدم الموقع ملفات تعريف الارتباط لتحسين أداء الموقع وتخصيص تجربتك. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك في أي وقت.
          </p>
        </section>

        <section className="bg-[#111] p-8 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <Eye className="text-red-500" size={24} />
            <h2 className="text-xl font-bold text-white">حقوق المستخدم</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            لديك الحق الكامل في الوصول إلى بياناتك، تعديلها، أو طلب حذفها من سجلاتنا. نحن نحترم خصوصيتك ونلتزم بشفافية كاملة في كيفية التعامل مع بياناتك.
          </p>
        </section>
      </div>
    </div>
  );
};