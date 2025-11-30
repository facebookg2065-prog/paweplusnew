import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'حزمة الأسلحة المتقدمة',
    description: 'مجموعة كاملة من الأسلحة الرقمية عالية الدقة للألعاب.',
    longDescription: 'احصل على التميز في ساحة المعركة مع هذه الحزمة الحصرية التي تتضمن أكثر من 50 نموذج سلاح عالي الدقة، مصممة بعناية فائقة لتناسب أحدث محركات الألعاب. تتضمن الحزمة أسلحة هجومية، مسدسات، وقناصات مع مواد (Textures) بدقة 4K.',
    features: ['50+ نموذج 3D', 'دقة 4K', 'متوافق مع Unreal & Unity', 'تحديثات مجانية'],
    price: 49.99,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    rating: 4.8,
    category: 'Games'
  },
  {
    id: '2',
    title: 'سكربت الحماية الفائق',
    description: 'نظام حماية متطور ضد الهجمات والاختراقات.',
    longDescription: 'نظام حماية متكامل لموقعك أو خادمك الشخصي. يوفر حماية في الوقت الفعلي ضد هجمات DDoS، وحقن SQL، والمحاولات المشبوهة للدخول. يتميز بلوحة تحكم سهلة وتنبيهات فورية.',
    features: ['حماية DDoS', 'جدار ناري ذكي', 'سجلات مفصلة', 'دعم فني 24/7'],
    price: 120.00,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    rating: 5.0,
    category: 'Security'
  },
  {
    id: '3',
    title: 'قالب لوحة تحكم',
    description: 'واجهة مستخدم احترافية بنمط داكن.',
    longDescription: 'قالب React متكامل لبناء لوحات التحكم (Dashboards). يأتي مع أكثر من 30 مكون جاهز، دعم للوضع الداكن (Dark Mode) بشكل افتراضي، ورسوم بيانية تفاعلية.',
    features: ['مبني بـ React & Tailwind', 'متجاوب 100%', '30+ مكون جاهز', 'كود نظيف وموثق'],
    price: 25.50,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    rating: 4.5,
    category: 'Templates'
  },
  {
    id: '4',
    title: 'أدوات التصميم الجرافيكي',
    description: 'حزمة فرش وتدرجات لونية للمصممين المحترفين.',
    longDescription: 'ارتق بتصاميمك إلى المستوى التالي مع هذه المجموعة المختارة من الفرش (Brushes)، التدرجات اللونية (Gradients)، والملفات المفتوحة (PSD). مثالية لمصممي الإعلانات والسوشيال ميديا.',
    features: ['1000+ أصل رقمي', 'فرش Photoshop احترافية', 'مؤثرات نصية', 'رخصة تجارية'],
    price: 15.00,
    imageUrl: 'https://picsum.photos/800/600?random=4',
    rating: 4.7,
    category: 'Design'
  }
];

export const NAV_LINKS = [
  { label: 'الرئيسية', path: '/' },
  { label: 'المنتجات', path: '/products' },
  { label: 'من نحن', path: '/about' },
  { label: 'تواصل معنا', path: '/contact' },
  // Dashboard and Login are handled separately in the Navbar
];