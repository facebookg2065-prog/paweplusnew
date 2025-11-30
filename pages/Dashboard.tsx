import React from 'react';
import { Package, Download, User, Settings, CreditCard, LogOut } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';

export const Dashboard: React.FC = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">لوحة التحكم</h1>
        <Button variant="outline" className="flex items-center gap-2 text-red-500 border-red-900/30 hover:bg-red-900/10">
            <LogOut size={18} />
            <span>تسجيل الخروج</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800 text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                </div>
                <h3 className="text-white font-bold text-lg">مستخدم جديد</h3>
                <p className="text-gray-500 text-sm">user@example.com</p>
            </div>

            <nav className="flex flex-col gap-2">
                <button className="flex items-center gap-3 px-4 py-3 bg-red-900/20 text-red-500 rounded-lg font-bold border border-red-900/30">
                    <Package size={20} />
                    <span>منتجاتي</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                    <Download size={20} />
                    <span>التحميلات</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                    <CreditCard size={20} />
                    <span>الفواتير</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                    <Settings size={20} />
                    <span>الإعدادات</span>
                </button>
            </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
                    <p className="text-gray-500 text-sm mb-1">إجمالي المشتريات</p>
                    <h3 className="text-2xl font-bold text-white">3 منتجات</h3>
                </div>
                <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
                    <p className="text-gray-500 text-sm mb-1">المبلغ المصروف</p>
                    <h3 className="text-2xl font-bold text-white">$190.50</h3>
                </div>
                <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
                    <p className="text-gray-500 text-sm mb-1">رصيد المحفظة</p>
                    <h3 className="text-2xl font-bold text-green-500">$0.00</h3>
                </div>
            </div>

            {/* My Products Table */}
            <div className="bg-[#111] rounded-xl border border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                    <h3 className="font-bold text-white">آخر المشتريات</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-900/50 text-gray-400 text-sm">
                            <tr>
                                <th className="px-6 py-4 font-medium">المنتج</th>
                                <th className="px-6 py-4 font-medium">التاريخ</th>
                                <th className="px-6 py-4 font-medium">السعر</th>
                                <th className="px-6 py-4 font-medium">الحالة</th>
                                <th className="px-6 py-4 font-medium">إجراء</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[PRODUCTS[0], PRODUCTS[2]].map((item) => (
                                <tr key={item.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/30">
                                    <td className="px-6 py-4 font-medium">{item.title}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">2023/10/01</td>
                                    <td className="px-6 py-4">${item.price}</td>
                                    <td className="px-6 py-4"><span className="text-green-500 text-xs border border-green-900 bg-green-900/20 px-2 py-1 rounded">مكتمل</span></td>
                                    <td className="px-6 py-4">
                                        <button className="text-red-500 hover:text-red-400 text-sm font-bold">تحميل</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};