
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
    'nav.home': 'Bosh',
    'nav.visas': 'Vizalar',
    'nav.apply': 'Arizalar',
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
  // --- Visa Section (CLEAN REWRITE) ---
  'visas.title': 'Viza turlari',
  'visas.desc': 'Saudiya Arabistoniga barcha viza turlari haqida to‘liq maʼlumot.',
  'visas.apply': 'Ariza topshirish',
  'visas.details': 'Batafsil maʼlumot',
  'visas.price': 'Narxi',
  'visas.duration': 'Muddati',
  'visas.processing': 'Rasmiylashtirish vaqti',
  'visas.entry': 'Kirish',
  'visas.requirements': 'Talablar',
  'visas.features': 'Afzalliklar',
  // Umra
  'visas.umrah_desc': 'Umra vizasi Saudiya Arabistoniga diniy ziyorat uchun.',
  'visas.umrah_price': '150$ dan',
  'visas.umrah_duration': '30 kun',
  'visas.umrah_processing': '24-48 soat',
  'visas.umrah_entry': 'Bir marta',
  'visas.umrah_req1': 'Amaldagi pasport',
  'visas.umrah_req2': 'Rasm',
  'visas.umrah_req3': 'To‘lov kvitansiyasi',
  'visas.umrah_req4': 'Tibbiy sug‘urta',
  'visas.umrah_req5': 'Chipta bron qilish',
  'visas.umrah_feat1': 'Tez rasmiylashtirish',
  'visas.umrah_feat2': 'Onlayn ariza',
  'visas.umrah_feat3': 'Ko‘p martalik kirish',
  'visas.umrah_feat4': 'Qo‘shimcha xizmatlar',
  'visas.umrah_feat5': 'Yordam xizmati',
  // Hajj
  'visas.hajj_desc': 'Haj vizasi Saudiya Arabistoniga Haj ziyorati uchun.',
  'visas.hajj_price': '200$ dan',
  'visas.hajj_duration': '45 kun',
  'visas.hajj_processing': '3-5 kun',
  'visas.hajj_entry': 'Bir marta',
  'visas.hajj_req1': 'Amaldagi pasport',
  'visas.hajj_req2': 'Rasm',
  'visas.hajj_req3': 'To‘lov kvitansiyasi',
  'visas.hajj_req4': 'Tibbiy sug‘urta',
  'visas.hajj_req5': 'Chipta bron qilish',
  'visas.hajj_feat1': 'Tez rasmiylashtirish',
  'visas.hajj_feat2': 'Onlayn ariza',
  'visas.hajj_feat3': 'Ko‘p martalik kirish',
  'visas.hajj_feat4': 'Qo‘shimcha xizmatlar',
  'visas.hajj_feat5': 'Yordam xizmati',
  // Tourist
  'visas.tourist_desc': 'Turistik vizasi Saudiya Arabistoniga sayohat uchun.',
  'visas.tourist_price': '80$ dan',
  'visas.tourist_duration': '90 kun',
  'visas.tourist_processing': '24 soat',
  'visas.tourist_entry': 'Ko‘p marta',
  'visas.tourist_req1': 'Amaldagi pasport',
  'visas.tourist_req2': 'Rasm',
  'visas.tourist_req3': 'To‘lov kvitansiyasi',
  'visas.tourist_req4': 'Tibbiy sug‘urta',
  'visas.tourist_req5': 'Chipta bron qilish',
  'visas.tourist_feat1': 'Tez rasmiylashtirish',
  'visas.tourist_feat2': 'Onlayn ariza',
  'visas.tourist_feat3': 'Ko‘p martalik kirish',
  'visas.tourist_feat4': 'Qo‘shimcha xizmatlar',
  'visas.tourist_feat5': 'Yordam xizmati',
  // Work
  'visas.work_desc': 'Ish vizasi Saudiya Arabistonida ishlash uchun.',
  'visas.work_price': '300$ dan',
  'visas.work_duration': '1 yil',
  'visas.work_processing': '5-7 kun',
  'visas.work_entry': 'Ko‘p marta',
  'visas.work_req1': 'Amaldagi pasport',
  'visas.work_req2': 'Rasm',
  'visas.work_req3': 'To‘lov kvitansiyasi',
  'visas.work_req4': 'Tibbiy sug‘urta',
  'visas.work_req5': 'Ish taklifi',
  'visas.work_feat1': 'Tez rasmiylashtirish',
  'visas.work_feat2': 'Onlayn ariza',
  'visas.work_feat3': 'Ko‘p martalik kirish',
  'visas.work_feat4': 'Qo‘shimcha xizmatlar',
  'visas.work_feat5': 'Yordam xizmati',
  // Info & CTA
  'visas.info_fast': 'Tez va oson',
  'visas.info_fast_desc': 'Vizani olish jarayoni juda tez va soddalashtirilgan.',
  'visas.info_success': 'Kafolatlangan natija',
  'visas.info_success_desc': 'Arizangiz muvaffaqiyatli ko‘rib chiqiladi.',
  'visas.info_support': '24/7 yordam',
  'visas.info_support_desc': 'Har doim yordam va maslahat olishingiz mumkin.',
  'visas.cta_title': 'Vizaga ariza topshiring yoki maslahat oling',
  'visas.cta_desc': 'Mutaxassislarimiz sizga yordam berishga tayyor.',
  'visas.cta_apply': 'Ariza topshirish',
  'visas.cta_consult': 'Maslahat olish',
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
