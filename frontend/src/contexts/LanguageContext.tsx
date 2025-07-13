
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.visas': 'Vizalar',
    'nav.apply': 'Ariza topshirish',
    'nav.status': 'Holat',
    'nav.prices': 'Narxlar',
    'nav.contact': 'Aloqa',
    
    // Hero Section
    'hero.title': 'Saudiya Arabistoni Vizasi',
    'hero.subtitle': 'Umra, Hajj, Turistik va Ishchi vizalar uchun onlayn ariza',
    'hero.cta': 'Ariza topshirish',
    
    // Visa Types
    'visa.umrah': 'Umra Vizasi',
    'visa.hajj': 'Hajj Vizasi',
    'visa.tourist': 'Turistik Viza',
    'visa.work': 'Ishchi Vizasi',
    
    // Common
    'common.apply': 'Ariza topshirish',
    'common.learn_more': 'Batafsil',
    'common.submit': 'Yuborish',
    'common.cancel': 'Bekor qilish',
    
    // Footer
    'footer.description': 'Saudiya Arabistoni vizalarini oson va tez olish uchun ishonchli xizmat.',
    'footer.quick_links': 'Tezkor havolalar',
    'footer.contact_info': 'Aloqa ma\'lumotlari',
    'footer.follow_us': 'Bizni kuzating',
    // Footer & Navigation (to‘liq)
    'footer.address': "Toshkent, O'zbekiston",
    'footer.phone': "+998 90 123 45 67",
    'footer.email': "info@evisa-saudi.uz",
    'footer.hours': "Dush-Juma: 9:00-18:00",
    'footer.privacy': "Maxfiylik siyosati",
    'footer.terms': "Foydalanish shartlari",
    'footer.social_phone': "Telegram",
    'footer.social_email': "Email",
    'footer.social_web': "Vebsayt",
    'footer.copyright': "© 2024 eVisa Saudi Arabia. Barcha huquqlar himoyalangan.",

    // Home page
    'home.visa_types': 'Viza turlari',
    'home.visa_types_desc': 'Har qanday maqsad uchun mos viza turini tanlang',
    'home.how_it_works': 'Qanday ishlaydi?',
    'home.how_it_works_desc': '3 ta oddiy qadam orqali vizangizni oling',
    'home.step1': "Ariza to'ldiring",
    'home.step1_desc': "Online forma orqali ma'lumotlaringizni kiriting va hujjatlarni yuklang",
    'home.step2': "To'lovni amalga oshiring",
    'home.step2_desc': "Xavfsiz to'lov tizimlari orqali visa narxini to'lang",
    'home.step3': 'Vizani oling',
    'home.step3_desc': "24-48 soat ichida tayyor vizani email orqali oling",
    'home.testimonials': 'Mijozlar fikri',
    'home.testimonials_desc': 'Bizning xizmatdan foydalangan mijozlarning fikrlari',
    'home.stats_clients': 'Mijozlar',
    'home.stats_success': 'Muvaffaqiyat',
    'home.stats_fast': 'Tez xizmat',
    'home.cta_title': 'Bugun ariza topshiring',
    'home.cta_desc': "Professional jamoamiz sizga tez va sifatli xizmat ko'rsatishga tayyor",
    // Home page - Testimonial & Visa details
    'home.testimonial1': 'Juda tez va sifatli xizmat. Umra vizasini 1 kunda oldim!',
    'home.testimonial1_loc': 'Toshkent',
    'home.testimonial2': 'Professional jamoa, barcha jarayonlar tushuntirildi.',
    'home.testimonial2_loc': 'Samarqand',
    'home.testimonial3': 'Ishonchli va qulay xizmat. Tavsiya qilaman!',
    'home.testimonial3_loc': 'Buxoro',
    'home.visa_umrah_desc': 'Muqaddas ziyorat uchun maxsus viza',
    'home.visa_umrah_price': 'dan $150',
    'home.visa_umrah_feat1': '30 kun amal qiladi',
    'home.visa_umrah_feat2': 'Bir marta kirish',
    'home.visa_umrah_feat3': '24 soat qayta ishlash',
    'home.visa_hajj_desc': 'Hajj mavsumi uchun rasmiy viza',
    'home.visa_hajj_price': 'dan $200',
    'home.visa_hajj_feat1': '45 kun amal qiladi',
    'home.visa_hajj_feat2': 'Bir marta kirish',
    'home.visa_hajj_feat3': 'Rasmiy litsenziya',
    'home.visa_tourist_desc': 'Sayohat va dam olish uchun',
    'home.visa_tourist_price': 'dan $80',
    'home.visa_tourist_feat1': '90 kun amal qiladi',
    'home.visa_tourist_feat2': "Ko'p marta kirish",
    'home.visa_tourist_feat3': 'Online rasmiylashtirish',
    'home.visa_work_desc': 'Ish faoliyati uchun viza',
    'home.visa_work_price': 'dan $300',
    'home.visa_work_feat1': '1 yil amal qiladi',
    'home.visa_work_feat2': "Ko'p marta kirish",
    'home.visa_work_feat3': 'Ishga ruxsat',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.visas': 'التأشيرات',
    'nav.apply': 'تقديم طلب',
    'nav.status': 'حالة الطلب',
    'nav.prices': 'الأسعار',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'تأشيرة المملكة العربية السعودية',
    'hero.subtitle': 'طلب عبر الإنترنت لتأشيرات العمرة والحج والسياحة والعمل',
    'hero.cta': 'تقديم طلب',
    
    // Visa Types
    'visa.umrah': 'تأشيرة العمرة',
    'visa.hajj': 'تأشيرة الحج',
    'visa.tourist': 'تأشيرة سياحية',
    'visa.work': 'تأشيرة عمل',
    
    // Common
    'common.apply': 'تقديم طلب',
    'common.learn_more': 'اقرأ المزيد',
    'common.submit': 'إرسال',
    'common.cancel': 'إلغاء',
    
    // Footer
    'footer.description': 'خدمة موثوقة للحصول على تأشيرات المملكة العربية السعودية بسهولة وسرعة.',
    'footer.quick_links': 'روابط سريعة',
    'footer.contact_info': 'معلومات الاتصال',
    'footer.follow_us': 'تابعنا',
    // Footer & Navigation (to‘liq)
    'footer.address': "طشقند، أوزبكستان",
    'footer.phone': "+998 90 123 45 67",
    'footer.email': "info@evisa-saudi.uz",
    'footer.hours': "الإثنين-الجمعة: 9:00-18:00",
    'footer.privacy': "سياسة الخصوصية",
    'footer.terms': "شروط الاستخدام",
    'footer.social_phone': "تيليجرام",
    'footer.social_email': "البريد الإلكتروني",
    'footer.social_web': "الموقع الإلكتروني",
    'footer.copyright': "© 2024 eVisa Saudi Arabia. جميع الحقوق محفوظة.",

    // Home page
    'home.visa_types': 'أنواع التأشيرات',
    'home.visa_types_desc': 'اختر نوع التأشيرة المناسب لأي غرض',
    'home.how_it_works': 'كيف يعمل؟',
    'home.how_it_works_desc': 'احصل على تأشيرتك في 3 خطوات بسيطة',
    'home.step1': 'املأ الطلب',
    'home.step1_desc': 'أدخل بياناتك عبر النموذج الإلكتروني وارفع المستندات',
    'home.step2': 'ادفع الرسوم',
    'home.step2_desc': 'ادفع رسوم التأشيرة عبر أنظمة دفع آمنة',
    'home.step3': 'استلم التأشيرة',
    'home.step3_desc': 'استلم التأشيرة الجاهزة عبر البريد الإلكتروني خلال 24-48 ساعة',
    'home.testimonials': 'آراء العملاء',
    'home.testimonials_desc': 'آراء العملاء الذين استخدموا خدمتنا',
    'home.stats_clients': 'العملاء',
    'home.stats_success': 'النجاح',
    'home.stats_fast': 'خدمة سريعة',
    'home.cta_title': 'قدّم طلبك اليوم',
    'home.cta_desc': 'فريقنا المحترف جاهز لخدمتك بسرعة وجودة عالية',
    // Home page - Testimonial & Visa details
    'home.testimonial1': 'خدمة سريعة وعالية الجودة. حصلت على تأشيرة العمرة في يوم واحد!',
    'home.testimonial1_loc': 'طشقند',
    'home.testimonial2': 'فريق محترف، تم شرح جميع الإجراءات.',
    'home.testimonial2_loc': 'سمرقند',
    'home.testimonial3': 'خدمة موثوقة وسهلة. أنصح بها!',
    'home.testimonial3_loc': 'بخارى',
    'home.visa_umrah_desc': 'تأشيرة خاصة للزيارة المقدسة',
    'home.visa_umrah_price': 'من $150',
    'home.visa_umrah_feat1': 'صالحة لمدة 30 يومًا',
    'home.visa_umrah_feat2': 'دخول مرة واحدة',
    'home.visa_umrah_feat3': 'معالجة خلال 24 ساعة',
    'home.visa_hajj_desc': 'تأشيرة رسمية لموسم الحج',
    'home.visa_hajj_price': 'من $200',
    'home.visa_hajj_feat1': 'صالحة لمدة 45 يومًا',
    'home.visa_hajj_feat2': 'دخول مرة واحدة',
    'home.visa_hajj_feat3': 'ترخيص رسمي',
    'home.visa_tourist_desc': 'للسياحة والاستجمام',
    'home.visa_tourist_price': 'من $80',
    'home.visa_tourist_feat1': 'صالحة لمدة 90 يومًا',
    'home.visa_tourist_feat2': 'دخول متعدد',
    'home.visa_tourist_feat3': 'تقديم عبر الإنترنت',
    'home.visa_work_desc': 'تأشيرة للعمل',
    'home.visa_work_price': 'من $300',
    'home.visa_work_feat1': 'صالحة لمدة سنة',
    'home.visa_work_feat2': 'دخول متعدد',
    'home.visa_work_feat3': 'تصريح عمل',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.visas': 'Visas',
    'nav.apply': 'Apply',
    'nav.status': 'Status',
    'nav.prices': 'Prices',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Saudi Arabia eVisa',
    'hero.subtitle': 'Online application for Umrah, Hajj, Tourist and Work visas',
    'hero.cta': 'Apply Now',
    
    // Visa Types
    'visa.umrah': 'Umrah Visa',
    'visa.hajj': 'Hajj Visa',
    'visa.tourist': 'Tourist Visa',
    'visa.work': 'Work Visa',
    
    // Common
    'common.apply': 'Apply',
    'common.learn_more': 'Learn More',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    
    // Footer
    'footer.description': 'Trusted service for obtaining Saudi Arabia visas easily and quickly.',
    'footer.quick_links': 'Quick Links',
    'footer.contact_info': 'Contact Information',
    'footer.follow_us': 'Follow Us',
    // Footer & Navigation (to‘liq)
    'footer.address': "Tashkent, Uzbekistan",
    'footer.phone': "+998 90 123 45 67",
    'footer.email': "info@evisa-saudi.uz",
    'footer.hours': "Mon-Fri: 9:00-18:00",
    'footer.privacy': "Privacy Policy",
    'footer.terms': "Terms of Use",
    'footer.social_phone': "Telegram",
    'footer.social_email': "Email",
    'footer.social_web': "Website",
    'footer.copyright': "© 2024 eVisa Saudi Arabia. All rights reserved.",

    // Home page
    'home.visa_types': 'Visa Types',
    'home.visa_types_desc': 'Choose the right visa type for any purpose',
    'home.how_it_works': 'How it works?',
    'home.how_it_works_desc': 'Get your visa in 3 simple steps',
    'home.step1': 'Fill the application',
    'home.step1_desc': 'Enter your details online and upload documents',
    'home.step2': 'Make payment',
    'home.step2_desc': 'Pay the visa fee via secure payment systems',
    'home.step3': 'Get your visa',
    'home.step3_desc': 'Receive your ready visa by email within 24-48 hours',
    'home.testimonials': 'Customer Reviews',
    'home.testimonials_desc': 'Feedback from customers who used our service',
    'home.stats_clients': 'Clients',
    'home.stats_success': 'Success',
    'home.stats_fast': 'Fast Service',
    'home.cta_title': 'Apply Today',
    'home.cta_desc': 'Our professional team is ready to serve you quickly and efficiently',
    // Home page - Testimonial & Visa details
    'home.testimonial1': 'Very fast and high-quality service. I got my Umrah visa in 1 day!',
    'home.testimonial1_loc': 'Tashkent',
    'home.testimonial2': 'Professional team, all processes were explained.',
    'home.testimonial2_loc': 'Samarkand',
    'home.testimonial3': 'Reliable and convenient service. I recommend it!',
    'home.testimonial3_loc': 'Bukhara',
    'home.visa_umrah_desc': 'Special visa for holy pilgrimage',
    'home.visa_umrah_price': 'from $150',
    'home.visa_umrah_feat1': 'Valid for 30 days',
    'home.visa_umrah_feat2': 'Single entry',
    'home.visa_umrah_feat3': '24h processing',
    'home.visa_hajj_desc': 'Official visa for Hajj season',
    'home.visa_hajj_price': 'from $200',
    'home.visa_hajj_feat1': 'Valid for 45 days',
    'home.visa_hajj_feat2': 'Single entry',
    'home.visa_hajj_feat3': 'Official license',
    'home.visa_tourist_desc': 'For travel and leisure',
    'home.visa_tourist_price': 'from $80',
    'home.visa_tourist_feat1': 'Valid for 90 days',
    'home.visa_tourist_feat2': 'Multiple entry',
    'home.visa_tourist_feat3': 'Online application',
    'home.visa_work_desc': 'Visa for work activity',
    'home.visa_work_price': 'from $300',
    'home.visa_work_feat1': 'Valid for 1 year',
    'home.visa_work_feat2': 'Multiple entry',
    'home.visa_work_feat3': 'Work permit',
  },
  // Vizalar page
  'visas.title': 'Viza turlari',
  'visas.apply': 'Ariza topshirish',
  'visas.details': 'Batafsil maʼlumot',
  'visas.desc': 'Saudiya Arabistoniga turli vizalar haqida ma\'lumot.',
  'visas.umrah_desc': "The Umrah visa is issued for religious pilgrimage to Saudi Arabia.",
  'visas.umrah_price': "Umrah visa price",
  'visas.price': "Price",
  'visas.umrah_duration': "Umrah visa duration",
  'visas.duration': "Duration",
  'visas.processing': "Processing time",
  'visas.umrah_processing': "Umrah visa processing time",
  'visas.entry': "Entry",
  'visas.umrah_entry': "Entry with Umrah visa",
  'visas.requirements': "Requirements",
  'visas.umrah_req1': "Valid passport",
  'visas.umrah_req2': "Photo",
  'visas.umrah_req3': "Payment receipt",
  'visas.umrah_req4': "Medical insurance",
  'visas.umrah_req5': "Ticket booking",
  'visas.features': "Features",
  'visas.umrah_feat1': "Fast processing",
  'visas.umrah_feat2': "Online application",
  'visas.umrah_feat3': "Multiple entry",
  'visas.umrah_feat4': "Additional services",
  'visas.umrah_feat5': "Support service",
  'visas.applyvisas.details': "More details",
  'visas.hajj_desc': "The Hajj visa is issued for the Hajj pilgrimage to Saudi Arabia.",
  'visas.hajj_price': "Hajj visa price",
  'visas.hajj_duration': "Hajj visa duration",
  'visas.hajj_processing': "Hajj visa processing time",
  'visas.hajj_entry': "Entry with Hajj visa",
  'visas.hajj_req1': "Valid passport",
  'visas.hajj_req2': "Photo",
  'visas.hajj_req3': "Payment receipt",
  'visas.hajj_req4': "Medical insurance",
  'visas.hajj_req5': "Ticket booking",
  'visas.hajj_feat1': "Fast processing",
  'visas.hajj_feat2': "Online application",
  'visas.hajj_feat3': "Multiple entry",
  'visas.hajj_feat4': "Additional services",
  'visas.hajj_feat5': "Support service",
  'visas.tourist_desc': "The tourist visa is issued for travel to Saudi Arabia.",
  'visas.tourist_price': "Tourist visa price",
  'visas.tourist_duration': "Tourist visa duration",
  'visas.tourist_processing': "Tourist visa processing time",
  'visas.tourist_entry': "Entry with tourist visa",
  'visas.tourist_req1': "Valid passport",
  'visas.tourist_req2': "Photo",
  'visas.tourist_req3': "Payment receipt",
  'visas.tourist_req4': "Medical insurance",
  'visas.tourist_req5': "Ticket booking",
  'visas.tourist_feat1': "Fast processing",
  'visas.tourist_feat2': "Online application",
  'visas.tourist_feat3': "Multiple entry",
  'visas.tourist_feat4': "Additional services",
  'visas.tourist_feat5': "Support service",
  'visas.work_desc': "The work visa is issued for employment in Saudi Arabia.",
  'visas.work_price': "Work visa price",
  'visas.work_duration': "Work visa duration",
  'visas.work_processing': "Work visa processing time",
  'visas.work_entry': "Entry with work visa",
  'visas.work_req1': "Valid passport",
  'visas.work_req2': "Photo",
  'visas.work_req3': "Payment receipt",
  'visas.work_req4': "Medical insurance",
  'visas.work_req5': "Job offer",
  'visas.work_feat1': "Fast processing",
  'visas.work_feat2': "Online application",
  'visas.work_feat3': "Multiple entry",
  'visas.work_feat4': "Additional services",
  'visas.work_feat5': "Support service",
  'visas.info_fast': "Fast and easy",
  'visas.info_fast_desc': "The visa process is very fast and simplified.",
  'visas.info_success': "Guaranteed result",
  'visas.info_success_desc': "Your application will be reviewed successfully.",
  'visas.info_support': "24/7 support",
  'visas.info_support_desc': "You can always get support and advice.",
  'visas.cta_title': "Apply for a visa or get a consultation",
  'visas.cta_desc': "Our specialists are ready to help you.",
  'visas.cta_apply': "Apply now",
  'visas.cta_consult': "Get consultation",
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
