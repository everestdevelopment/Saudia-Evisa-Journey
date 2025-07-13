
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Clock, Star, ArrowRight, Zap } from "lucide-react";

const Narxlar = () => {
  const { t } = useLanguage();

  const visaPrices = [
    {
      id: 'umrah',
      title: 'Umra Vizasi',
      icon: '🕋',
      description: 'Muqaddas ziyorat uchun maxsus viza',
      basePrice: 150,
      urgentPrice: 200,
      currency: 'USD',
      processing: '24-48 soat',
      urgentProcessing: '12-24 soat',
      validity: '30 kun',
      entry: 'Bir marta',
      features: [
        'Makka va Madina shaharlariga kirish',
        'Umra marosimlari uchun ruxsat',
        '24/7 qo\'llab-quvvatlash',
        'Bepul qayta ishlash (rad etilsa)',
        'Email orqali yetkazib berish'
      ],
      popular: false
    },
    {
      id: 'hajj',
      title: 'Hajj Vizasi',
      icon: '🌙',
      description: 'Hajj mavsumi uchun rasmiy viza',
      basePrice: 200,
      urgentPrice: 300,
      currency: 'USD',
      processing: '3-5 kun',
      urgentProcessing: '1-2 kun',
      validity: '45 kun',
      entry: 'Bir marta',
      features: [
        'Hajj marosimlari uchun to\'liq ruxsat',
        'Rasmiy hajj dasturi',
        'Tibbiy yordam imkoniyati',
        'Transport koordinatsiyasi',
        'VIP qo\'llab-quvvatlash'
      ],
      popular: true
    },
    {
      id: 'tourist',
      title: 'Turistik Viza',
      icon: '🏛️',
      description: 'Sayohat va dam olish uchun viza',
      basePrice: 80,
      urgentPrice: 120,
      currency: 'USD',
      processing: '24 soat',
      urgentProcessing: '6-12 soat',
      validity: '90 kun',
      entry: 'Ko\'p marta',
      features: [
        'Barcha shaharlarni ziyorat qilish',
        'Tarixiy joylar va muzeylar',
        'Tabiat sayohati imkoniyati',
        'Zamonaviy shaharlarni ko\'rish',
        'Madaniy tadbirlarda qatnashish'
      ],
      popular: false
    },
    {
      id: 'work',
      title: 'Ishchi Viza',
      icon: '💼',
      description: 'Ish faoliyati uchun viza',
      basePrice: 300,
      urgentPrice: 450,
      currency: 'USD',
      processing: '5-7 kun',
      urgentProcessing: '2-3 kun',
      validity: '1 yil',
      entry: 'Ko\'p marta',
      features: [
        'Rasmiy ish faoliyati huquqi',
        'Oila a\'zolarini olib kelish',
        'Bank hisob raqami ochish',
        'Tibbiy sug\'urta',
        'Ijtimoiy imtiyozlar'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: 'Hujjat tarjimasi',
      price: 25,
      description: 'Rasmiy tarjima va notarial tasdiq'
    },
    {
      name: 'Shoshilinch xizmat',
      price: 50,
      description: 'Oddiy vaqtdan 2 baravar tez'
    },
    {
      name: 'VIP xizmat',
      price: 100,
      description: 'Shaxsiy menejer va premium qo\'llab-quvvatlash'
    },
    {
      name: 'Mehmonxona bron',
      price: 30,
      description: 'Makka va Madina uchun mehmonxona'
    },
    {
      name: 'Sayohat sug\'urtasi',
      price: 20,
      description: 'To\'liq tibbiy va sayohat sug\'urtasi'
    },
    {
      name: 'Airport transfer',
      price: 40,
      description: 'Aeroport va mehmonxona o\'rtasida transfer'
    }
  ];

  const paymentMethods = [
    { name: 'Click', icon: '💳', fee: 0 },
    { name: 'Payme', icon: '📱', fee: 0 },
    { name: 'Visa/Mastercard', icon: '💳', fee: 3 },
    { name: 'Bank o\'tkazmasi', icon: '🏦', fee: 0 }
  ];

  return (
    <div className="py-16 animate-fade-in-up">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-amiri mb-4">
            Narxlar va Xizmatlar
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Har qanday viza turi uchun aniq narxlar va qo'shimcha xizmatlar
          </p>
        </div>

        {/* Visa Prices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {visaPrices.map((visa) => (
            <Card key={visa.id} className={`relative overflow-hidden shadow-lg hover-lift ${
              visa.popular ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}>
              {visa.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-semibold">
                  <Star className="w-3 h-3 inline mr-1" />
                  Mashhur
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-2">{visa.icon}</div>
                <CardTitle className="font-amiri text-xl">{visa.title}</CardTitle>
                <CardDescription className="text-sm">
                  {visa.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">
                      ${visa.basePrice}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Oddiy xizmat ({visa.processing})
                    </div>
                    <div className="text-xl font-semibold text-orange-600">
                      ${visa.urgentPrice}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Shoshilinch ({visa.urgentProcessing})
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amal qilish:</span>
                    <span className="font-medium">{visa.validity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kirish:</span>
                    <span className="font-medium">{visa.entry}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Xizmatlar:</h5>
                  <ul className="space-y-1">
                    {visa.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {visa.features.length > 3 && (
                    <div className="text-xs text-muted-foreground">
                      +{visa.features.length - 3} ta ko'proq xizmat
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <Button asChild className="w-full" size="sm">
                    <Link to="/ariza">
                      Ariza topshirish
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="sm">
                    <Link to="/vizalar">
                      Batafsil ma'lumot
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-amiri mb-4">
              Qo'shimcha xizmatlar
            </h2>
            <p className="text-muted-foreground">
              Sayohatingizni yanada qulay qilish uchun qo'shimcha xizmatlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">{service.name}</h4>
                    <Badge variant="secondary" className="text-lg font-bold">
                      ${service.price}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-amiri mb-4">
              To'lov usullari
            </h2>
            <p className="text-muted-foreground">
              Qulay va xavfsiz to'lov usullarini tanlang
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{method.icon}</div>
                  <h4 className="font-medium mb-1">{method.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {method.fee === 0 ? 'Komissiya yo\'q' : `${method.fee}% komissiya`}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Price Comparison Table */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-amiri mb-4">
              Narxlarni solishtiring
            </h2>
            <p className="text-muted-foreground">
              Har xil viza turlari uchun batafsil narxlar jadvali
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left font-semibold">Viza turi</th>
                    <th className="p-4 text-center font-semibold">Oddiy narx</th>
                    <th className="p-4 text-center font-semibold">Shoshilinch</th>
                    <th className="p-4 text-center font-semibold">Qayta ishlash</th>
                    <th className="p-4 text-center font-semibold">Amal qilish</th>
                    <th className="p-4 text-center font-semibold">Harakat</th>
                  </tr>
                </thead>
                <tbody>
                  {visaPrices.map((visa, index) => (
                    <tr key={visa.id} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{visa.icon}</span>
                          <div>
                            <div className="font-medium">{visa.title}</div>
                            <div className="text-sm text-muted-foreground">{visa.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="text-xl font-bold text-primary">${visa.basePrice}</div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="text-xl font-bold text-orange-600">${visa.urgentPrice}</div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="text-sm">{visa.processing}</div>
                        <div className="text-xs text-muted-foreground">
                          Shoshilinch: {visa.urgentProcessing}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="outline">{visa.validity}</Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Button asChild size="sm">
                          <Link to="/ariza">
                            Tanlash
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-amiri mb-4">
              Tez-tez so'raladigan savollar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Narxlarga nima kiradi?</h4>
                <p className="text-sm text-muted-foreground">
                  Barcha narxlarga viza to'lovi, xizmat haqi, hujjatlar tekshiruvi va email orqali yetkazib berish kiradi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Qaytarish siyosati qanday?</h4>
                <p className="text-sm text-muted-foreground">
                  Agar viza rad etilsa, xizmat haqidan tashqari barcha to'lovlar qaytariladi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Shoshilinch xizmat qanday ishlaydi?</h4>
                <p className="text-sm text-buted-foreground">
                  Shoshilinch xizmat 2 baravar tezroq qayta ishlash imkoniyatini beradi va ustama haq talab qiladi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">To'lov xavfsizmi?</h4>
                <p className="text-sm text-muted-foreground">
                  Ha, barcha to'lovlar SSL shifrlash bilan himoyalangan va xalqaro standartlarga mos keladi.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-amiri mb-4">
            Bugun ariza topshiring
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Eng yaxshi narx va sifatli xizmat bilan vizangizni tez oling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary dark:bg-accent dark:hover:bg-accent/80 dark:text-primary-foreground font-semibold">
              <Link to="/ariza">
                Ariza topshirish
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-black hover:bg-accent hover:text-primary-foreground dark:text-accent dark:hover:bg-accent dark:hover:text-primary-foreground">
              <Link to="/aloqa">
                Maslahat olish
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Narxlar;
