
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, CheckCircle, Clock, Shield, Star } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  const visaTypes = [
    {
      id: 'umrah',
      title: t('visa.umrah'),
      description: t('home.visa_umrah_desc'),
      icon: '🕋',
      price: t('home.visa_umrah_price'),
      features: [t('home.visa_umrah_feat1'), t('home.visa_umrah_feat2'), t('home.visa_umrah_feat3')],
      color: 'bg-gradient-to-br from-primary to-primary/80'
    },
    {
      id: 'hajj',
      title: t('visa.hajj'),
      description: t('home.visa_hajj_desc'),
      icon: '🌙',
      price: t('home.visa_hajj_price'),
      features: [t('home.visa_hajj_feat1'), t('home.visa_hajj_feat2'), t('home.visa_hajj_feat3')],
      color: 'bg-gradient-to-br from-accent to-yellow-600'
    },
    {
      id: 'tourist',
      title: t('visa.tourist'),
      description: t('home.visa_tourist_desc'),
      icon: '🏛️',
      price: t('home.visa_tourist_price'),
      features: [t('home.visa_tourist_feat1'), t('home.visa_tourist_feat2'), t('home.visa_tourist_feat3')],
      color: 'bg-gradient-to-br from-blue-600 to-blue-800'
    },
    {
      id: 'work',
      title: t('visa.work'),
      description: t('home.visa_work_desc'),
      icon: '💼',
      price: t('home.visa_work_price'),
      features: [t('home.visa_work_feat1'), t('home.visa_work_feat2'), t('home.visa_work_feat3')],
      color: 'bg-gradient-to-br from-green-600 to-green-800'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: t('home.step1'),
      description: t('home.step1_desc'),
      icon: <CheckCircle className="w-8 h-8 text-primary" />
    },
    {
      step: '2',
      title: t('home.step2'),
      description: t('home.step2_desc'),
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      step: '3',
      title: t('home.step3'),
      description: t('home.step3_desc'),
      icon: <Clock className="w-8 h-8 text-primary" />
    }
  ];

  const testimonials = [
    {
      name: 'Aziz Karimov',
      rating: 5,
      comment: t('home.testimonial1'),
      location: t('home.testimonial1_loc')
    },
    {
      name: 'Madina Rahimova',
      rating: 5,
      comment: t('home.testimonial2'),
      location: t('home.testimonial2_loc')
    },
    {
      name: 'Bobur Aliyev',
      rating: 5,
      comment: t('home.testimonial3'),
      location: t('home.testimonial3_loc')
    }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold font-amiri leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl lg:text-2xl opacity-90 font-cairo">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary dark:bg-accent dark:hover:bg-accent/80 dark:text-primary-foreground font-semibold">
                  <Link to="/ariza">
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-black dark:text-white hover:bg-accent hover:text-primary-foreground dark:hover:bg-accent dark:hover:text-primary-foreground border-0">
                  <Link to="/vizalar">
                    {t('common.learn_more')}
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold font-amiri">5000+</div>
                  <div className="text-sm opacity-75">{t('home.stats_clients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-amiri">98%</div>
                  <div className="text-sm opacity-75">{t('home.stats_success')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-amiri">24h</div>
                  <div className="text-sm opacity-75">{t('home.stats_fast')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="animate-float">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute inset-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute inset-16 bg-accent/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <span className="text-8xl animate-pulse">🕋</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-amiri mb-4">
              {t('home.visa_types')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.visa_types_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((visa) => (
              <Card key={visa.id} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className={`h-24 ${visa.color} flex items-center justify-center`}>
                  <span className="text-4xl">{visa.icon}</span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-amiri">{visa.title}</CardTitle>
                  <CardDescription>{visa.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary">{visa.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {visa.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/ariza">
                      {t('common.apply')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-amiri mb-4">
              {t('home.how_it_works')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.how_it_works_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white font-amiri">{step.step}</span>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2"></div>
                  )}
                </div>
                <div className="space-y-2">
                  {step.icon}
                  <h3 className="text-xl font-semibold font-amiri">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-amiri mb-4">
              {t('home.testimonials')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.testimonials_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-amiri mb-4">
            {t('home.cta_title')}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t('home.cta_desc')}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary dark:bg-accent dark:hover:bg-accent/80 dark:text-primary-foreground font-semibold">
            <Link to="/ariza">
              Ariza topshirish
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
