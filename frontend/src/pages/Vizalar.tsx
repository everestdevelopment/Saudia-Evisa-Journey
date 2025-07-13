
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Clock, Users, MapPin, ArrowRight } from "lucide-react";

const Vizalar = () => {
  const { t } = useLanguage();

  const visaDetails = [
    {
      id: 'umrah',
      title: t('visa.umrah'),
      description: t('visas.umrah_desc'),
      icon: '🕋',
      price: t('visas.umrah_price'),
      duration: t('visas.umrah_duration'),
      processing: t('visas.umrah_processing'),
      entry: t('visas.umrah_entry'),
      color: 'bg-gradient-to-br from-primary to-primary/80',
      requirements: [
        t('visas.umrah_req1'),
        t('visas.umrah_req2'),
        t('visas.umrah_req3'),
        t('visas.umrah_req4'),
        t('visas.umrah_req5'),
      ],
      features: [
        t('visas.umrah_feat1'),
        t('visas.umrah_feat2'),
        t('visas.umrah_feat3'),
        t('visas.umrah_feat4'),
        t('visas.umrah_feat5'),
      ]
    },
    {
      id: 'hajj',
      title: t('visa.hajj'),
      description: t('visas.hajj_desc'),
      icon: '🌙',
      price: t('visas.hajj_price'),
      duration: t('visas.hajj_duration'),
      processing: t('visas.hajj_processing'),
      entry: t('visas.hajj_entry'),
      color: 'bg-gradient-to-br from-accent to-yellow-600',
      requirements: [
        t('visas.hajj_req1'),
        t('visas.hajj_req2'),
        t('visas.hajj_req3'),
        t('visas.hajj_req4'),
        t('visas.hajj_req5'),
      ],
      features: [
        t('visas.hajj_feat1'),
        t('visas.hajj_feat2'),
        t('visas.hajj_feat3'),
        t('visas.hajj_feat4'),
        t('visas.hajj_feat5'),
      ]
    },
    {
      id: 'tourist',
      title: t('visa.tourist'),
      description: t('visas.tourist_desc'),
      icon: '🏛️',
      price: t('visas.tourist_price'),
      duration: t('visas.tourist_duration'),
      processing: t('visas.tourist_processing'),
      entry: t('visas.tourist_entry'),
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
      requirements: [
        t('visas.tourist_req1'),
        t('visas.tourist_req2'),
        t('visas.tourist_req3'),
        t('visas.tourist_req4'),
        t('visas.tourist_req5'),
      ],
      features: [
        t('visas.tourist_feat1'),
        t('visas.tourist_feat2'),
        t('visas.tourist_feat3'),
        t('visas.tourist_feat4'),
        t('visas.tourist_feat5'),
      ]
    },
    {
      id: 'work',
      title: t('visa.work'),
      description: t('visas.work_desc'),
      icon: '💼',
      price: t('visas.work_price'),
      duration: t('visas.work_duration'),
      processing: t('visas.work_processing'),
      entry: t('visas.work_entry'),
      color: 'bg-gradient-to-br from-green-600 to-green-800',
      requirements: [
        t('visas.work_req1'),
        t('visas.work_req2'),
        t('visas.work_req3'),
        t('visas.work_req4'),
        t('visas.work_req5'),
      ],
      features: [
        t('visas.work_feat1'),
        t('visas.work_feat2'),
        t('visas.work_feat3'),
        t('visas.work_feat4'),
        t('visas.work_feat5'),
      ]
    }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-amiri">
              {t('visas.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('visas.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Visa Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {visaDetails.map((visa, index) => (
              <Card key={visa.id} className="overflow-hidden shadow-xl hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left: Visa Info */}
                  <div className={`${visa.color} text-white p-8 lg:p-12 flex flex-col justify-center`}>
                    <div className="space-y-6">
                      <div className="text-6xl lg:text-8xl opacity-20 text-center">
                        {visa.icon}
                      </div>
                      <div className="text-center space-y-2">
                        <h2 className="text-2xl lg:text-3xl font-bold font-amiri">
                          {visa.title}
                        </h2>
                        <p className="text-lg opacity-90">
                          {visa.description}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold font-amiri">{visa.price}</div>
                          <div className="text-sm opacity-75">{t('visas.price')}</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold font-amiri">{visa.duration}</div>
                          <div className="text-sm opacity-75">{t('visas.duration')}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Details */}
                  <div className="p-8 lg:p-12 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-semibold">{t('visas.processing')}</div>
                          <div className="text-sm text-muted-foreground">{visa.processing}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-semibold">{t('visas.entry')}</div>
                          <div className="text-sm text-muted-foreground">{visa.entry}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 font-amiri">{t('visas.requirements')}</h4>
                      <ul className="space-y-2">
                        {visa.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Features & CTA */}
                  <div className="p-8 lg:p-12 bg-muted/30 space-y-8">
                    <div>
                      <h4 className="font-semibold mb-3 font-amiri">{t('visas.features')}</h4>
                      <ul className="space-y-2">
                        {visa.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <Badge variant="secondary" className="flex-shrink-0 mt-0.5">
                              ✓
                            </Badge>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <Button asChild className="w-full" size="lg">
                        <Link to="/ariza">
                          {t('visas.apply')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="text-black hover:bg-accent hover:text-primary-foreground dark:text-accent dark:hover:bg-accent dark:hover:text-primary-foreground">
                        <Link to="/narxlar">
                          {t('visas.details')}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-amiri">{t('visas.info_fast')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('visas.info_fast_desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-amiri">{t('visas.info_success')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('visas.info_success_desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-amiri">{t('visas.info_support')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('visas.info_support_desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-amiri mb-4">
            {t('visas.cta_title')}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t('visas.cta_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary dark:bg-accent dark:hover:bg-accent/80 dark:text-primary-foreground font-semibold">
              <Link to="/ariza">
                {t('visas.cta_apply')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary-foreground">
              <Link to="/aloqa">
                {t('visas.cta_consult')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vizalar;
