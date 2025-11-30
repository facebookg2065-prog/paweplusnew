import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'حزمة الأسلحة المتقدمة',
    description: 'مجموعة كاملة من الأسلحة الرقمية عالية الدقة للألعاب.',
    price: 49.99,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    rating: 4.8,
    category: 'Games'
  },
  {
    id: '2',
    title: 'سكربت الحماية الفائق',
    description: 'نظام حماية متطور ضد الهجمات والاختراقات.',
    price: 120.00,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    rating: 5.0,
    category: 'Security'
  },
  {
    id: '3',
    title: 'قالب لوحة تحكم',
    description: 'واجهة مستخدم احترافية بنمط داكن.',
    price: 25.50,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    rating: 4.5,
    category: 'Templates'
  },
  {
    id: '4',
    title: 'أدوات التصميم الجرافيكي',
    description: 'حزمة فرش وتدرجات لونية للمصممين المحترفين.',
    price: 15.00,
    imageUrl: 'https://picsum.photos/800/600?random=4',
    rating: 4.7,
    category: 'Design'
  }
];

export const NAV_LINKS = [
  { label: 'الرئيسية', path: '/' },
  { label: 'المنتجات', path: '/publisher' },
  { label: 'من نحن', path: '/about' },
  { label: 'سياسة الخصوصية', path: '/privacy' },
  { label: 'الشروط والأحكام', path: '/terms' },
];