
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Globe, 
  Headphones,
  Users,
  Shield
} from "lucide-react";

const Aloqa = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Xabar yuborildi!",
        description: "Tez orada sizga javob beramiz.",
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Xatolik yuz berdi",
        description: "Iltimos, qaytadan urinib ko'ring.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      details: ['+998 90 123 45 67', '+998 91 234 56 78'],
      description: 'Dushanba-Juma: 9:00-18:00'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@evisa-saudi.uz', 'support@evisa-saudi.uz'],
      description: '24 soat ichida javob beramiz'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Manzil',
      details: ['Toshkent shahar, Yunusobod tumani', 'Amir Temur ko\'chasi 108-uy'],
      description: 'Metro: Yunusobod'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Ish vaqti',
      details: ['Dushanba-Juma: 9:00-18:00', 'Shanba: 9:00-13:00'],
      description: 'Yakshanba: Dam olish kuni'
    }
  ];

  const socialLinks = [
    {
      name: 'Telegram',
      icon: '💬',
      link: '@evisa_saudi_bot',
      description: 'Telegram bot orqali tez yordam'
    },
    {
      name: 'Instagram',
      icon: '📸',
      link: '@evisa_saudi_uz',
      description: 'So\'nggi yangiliklar va maslahatlar'
    },
    {
      name: 'Facebook',
      icon: '👥',
      link: 'evisa.saudi.uz',
      description: 'Jamoa va mijozlar fikrlari'
    },
    {
      name: 'WhatsApp',
      icon: '📞',
      link: '+998901234567',
      description: 'Tez aloqa uchun WhatsApp'
    }
  ];

  const features = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Qo\'llab-quvvatlash',
      description: 'Har doim sizning xizmatinizdamiz'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Professional Jamoa',
      description: 'Tajribali mutahassis konsultantlar'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ishonchli Xizmat',
      description: '5000+ mamnun mijoz'
    }
  ];

  return (
    <div className="py-16 animate-fade-in-up">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-amiri mb-4">
            Biz bilan bog'laning
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Har qanday savol yoki yordam uchun biz bilan aloqaga chiqing. Professional jamoamiz sizga yordam berishga tayyor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-amiri flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-primary" />
                  Xabar yuborish
                </CardTitle>
                <CardDescription>
                  Quyidagi formani to'ldiring va biz sizga tez orada javob beramiz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">To'liq ism *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ismingizni kiriting"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon raqam *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+998 90 123 45 67"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email manzil *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="example@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Mavzu *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Xabar mavzusini kiriting"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Xabar *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Savolingiz yoki xabaringizni batafsil yozing..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      'Yuborilmoqda...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Xabar yuborish
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold font-amiri mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm font-medium mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-xs text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-amiri mb-4">
              Ijtimoiy tarmoqlarda
            </h2>
            <p className="text-muted-foreground">
              Bizni ijtimoiy tarmoqlarda kuzatib boring va so'nggi yangiliklar bilan tanishing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="text-center hover-lift cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{social.icon}</div>
                  <h4 className="font-semibold mb-1">{social.name}</h4>
                  <p className="text-primary font-medium text-sm mb-2">{social.link}</p>
                  <p className="text-xs text-muted-foreground">{social.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold font-amiri mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-amiri flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-primary" />
                Bizning manzil
              </CardTitle>
              <CardDescription>
                Ofisimizga tashrif buyurishingiz mumkin
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">Toshkent, O'zbekiston</p>
                  <p className="text-muted-foreground">Yunusobod tumani, Amir Temur ko'chasi 108</p>
                  <Button variant="outline" className="mt-4">
                    <Globe className="w-4 h-4 mr-2" />
                    Xaritada ko'rish
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-amiri mb-4">
              Tez-tez so'raladigan savollar
            </h2>
            <p className="text-muted-foreground">
              Eng ko'p beriladigan savollar va javoblar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Qancha vaqtda javob berasiz?</h4>
                <p className="text-sm text-muted-foreground">
                  Odatda 24 soat ichida javob beramiz. Shoshilinch holatlar uchun telefon qiling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Konsultatsiya pulli?</h4>
                <p className="text-sm text-muted-foreground">
                  Dastlabki konsultatsiya va maslahatlar mutlaqo bepul.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Ofisga keladigan vaqt bormi?</h4>
                <p className="text-sm text-muted-foreground">
                  Ha, Dushanba-Juma 9:00-18:00 va Shanba 9:00-13:00 gacha.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Telegram bot qanday ishlaydi?</h4>
                <p className="text-sm text-muted-foreground">
                  Telegram botimiz orqali ariza holati va asosiy ma'lumotlarni olishingiz mumkin.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */} 
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-amiri mb-4">
            Biz sizga qanday yordam bera olamiz?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Professional konsultantlarimiz har qanday savolingizga javob berishga tayyor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary dark:bg-accent dark:hover:bg-accent/80 dark:text-primary-foreground font-semibold">
              <a href="tel:+998901234567">
                <Phone className="w-5 h-5 mr-2" />
                Hozir qo'ng'iroq qiling
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-black hover:bg-accent hover:text-primary-foreground dark:text-accent dark:hover:bg-accent dark:hover:text-primary-foreground">
              <a href="mailto:info@evisa-saudi.uz">
                <Mail className="w-5 h-5 mr-2" />
                Email yuborish
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aloqa;
