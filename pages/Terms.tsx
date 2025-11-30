import React from 'react';
import { FileText, AlertTriangle, RefreshCw, CheckCircle } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">الشروط والأحكام</h1>

      <div className="grid gap-6">
        <div className="bg-[#111] p-6 rounded-lg border-l-4 border-red-600">
          <div className="flex items-start gap-4">
            <FileText className="text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">شروط الشراء</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                جميع المشتريات عبر الموقع نهائية للمنتجات الرقمية بمجرد تحميلها أو استلام مفاتيح التفعيل، ما لم يكن هناك عطل فني مثبت من طرفنا.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] p-6 rounded-lg border-l-4 border-red-600">
          <div className="flex items-start gap-4">
            <RefreshCw className="text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">سياسة الاسترجاع</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                نظراً لطبيعة المنتجات الرقمية، لا يتم قبول طلبات الاسترجاع إلا في حالات استثنائية (مثل عدم تطابق المنتج مع الوصف بشكل جوهري) وخلال مدة لا تتجاوز 24 ساعة من الشراء.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] p-6 rounded-lg border-l-4 border-red-600">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">قواعد الاستخدام</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                يمنع منعاً باتاً إعادة بيع المنتجات أو مشاركتها بشكل غير قانوني. أي انتهاك لحقوق الملكية الفكرية سيؤدي إلى حظر الحساب والملاحقة القانونية.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] p-6 rounded-lg border-l-4 border-red-600">
          <div className="flex items-start gap-4">
            <CheckCircle className="text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">حقوق البائع والمشتري</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                تضمن المنصة حقوق الطرفين من خلال نظام وساطة آمن. في حال حدوث نزاع، يلتزم فريق الدعم بالتحقيق العادل وحل المشكلة بما يرضي الطرف المتضرر وفقاً للسياسات.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};