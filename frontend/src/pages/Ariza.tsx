
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, CreditCard, CheckCircle, AlertCircle } from "lucide-react";

const Ariza = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: 'Shaxsiy ma\'lumotlar', icon: <FileText className="w-5 h-5" /> },
    { id: 2, title: 'Hujjatlar', icon: <Upload className="w-5 h-5" /> },
    { id: 3, title: 'To\'lov', icon: <CreditCard className="w-5 h-5" /> },
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    passportSeries: '',
    passportNumber: '',
    birthDate: '',
    phone: '',
    email: '',
    visaType: '',
    nationality: 'uzbekistan',
    address: '',
    travelPurpose: '',
    paymentMethod: ''
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
        title: "Ariza muvaffaqiyatli yuborildi!",
        description: "Sizning arizangiz qabul qilindi. Tez orada aloqaga chiqamiz.",
      });

      // Reset form or redirect
      setCurrentStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        middleName: '',
        passportSeries: '',
        passportNumber: '',
        birthDate: '',
        phone: '',
        email: '',
        visaType: '',
        nationality: 'uzbekistan',
        address: '',
        travelPurpose: '',
        paymentMethod: ''
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

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="py-16 animate-fade-in-up">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-amiri mb-4">
            Viza uchun ariza topshirish
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quyidagi formani to'ldiring va 24-48 soat ichida vizangizni oling
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-3 ${
                  currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.id 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-muted-foreground'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="hidden sm:block">
                    <div className="font-medium">{step.title}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-amiri">Shaxsiy ma'lumotlar</CardTitle>
                <CardDescription>
                  Passport ma'lumotlaringizga mos ravishda to'ldiring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ism *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Ismingizni kiriting"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Familiya *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Familiyangizni kiriting"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="middleName">Sharif</Label>
                  <Input
                    id="middleName"
                    value={formData.middleName}
                    onChange={(e) => handleInputChange('middleName', e.target.value)}
                    placeholder="Sharifingizni kiriting"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="passportSeries">Passport seriyasi *</Label>
                    <Input
                      id="passportSeries"
                      value={formData.passportSeries}
                      onChange={(e) => handleInputChange('passportSeries', e.target.value)}
                      placeholder="AB"
                      maxLength={2}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passportNumber">Passport raqami *</Label>
                    <Input
                      id="passportNumber"
                      value={formData.passportNumber}
                      onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                      placeholder="1234567"
                      maxLength={7}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Tug'ilgan sana *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Fuqarolik</Label>
                    <Select value={formData.nationality} onValueChange={(value) => handleInputChange('nationality', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Fuqarolikni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uzbekistan">O'zbekiston</SelectItem>
                        <SelectItem value="kazakhstan">Qozog'iston</SelectItem>
                        <SelectItem value="kyrgyzstan">Qirg'iziston</SelectItem>
                        <SelectItem value="tajikistan">Tojikiston</SelectItem>
                        <SelectItem value="turkmenistan">Turkmaniston</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Manzil *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="To'liq manzilingizni kiriting"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="visaType">Viza turi *</Label>
                  <Select value={formData.visaType} onValueChange={(value) => handleInputChange('visaType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Viza turini tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="umrah">Umra vizasi</SelectItem>
                      <SelectItem value="hajj">Hajj vizasi</SelectItem>
                      <SelectItem value="tourist">Turistik viza</SelectItem>
                      <SelectItem value="work">Ishchi viza</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="travelPurpose">Sayohat maqsadi</Label>
                  <Textarea
                    id="travelPurpose"
                    value={formData.travelPurpose}
                    onChange={(e) => handleInputChange('travelPurpose', e.target.value)}
                    placeholder="Sayohat maqsadingizni qisqacha yozing"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Document Upload */}
          {currentStep === 2 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-amiri">Hujjatlar yuklash</CardTitle>
                <CardDescription>
                  Kerakli hujjatlarni yuklang (JPG, PNG, PDF formatida)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Passport birinchi sahifasi *</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Faylni tanlang yoki shu yerga tashlang
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Maksimal hajm: 5MB
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Biometrik surat (5x5 sm) *</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Faylni tanlang yoki shu yerga tashlang
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Maksimal hajm: 2MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>COVID-19 sertifikati</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Faylni tanlang yoki shu yerga tashlang
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Qo'shimcha hujjatlar</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Faylni tanlang yoki shu yerga tashlang
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-amber-800 mb-1">Muhim eslatma:</p>
                      <ul className="text-amber-700 space-y-1">
                        <li>• Barcha hujjatlar aniq va o'qilishi mumkin bo'lishi kerak</li>
                        <li>• Suratlar yorug' fonda olingan bo'lishi lozim</li>
                        <li>• Passport kamida 6 oy amal qilishi kerak</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-amiri">To'lov ma'lumotlari</CardTitle>
                <CardDescription>
                  To'lov usulini tanlang va ma'lumotlarni kiriting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>To'lov usuli *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { id: 'click', name: 'Click', icon: '💳' },
                      { id: 'payme', name: 'Payme', icon: '📱' },
                      { id: 'visa', name: 'Visa', icon: '💳' },
                      { id: 'mastercard', name: 'Mastercard', icon: '💳' },
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => handleInputChange('paymentMethod', method.id)}
                        className={`p-4 border-2 rounded-lg text-center transition-colors hover:border-primary ${
                          formData.paymentMethod === method.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border'
                        }`}
                      >
                        <div className="text-2xl mb-2">{method.icon}</div>
                        <div className="font-medium">{method.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-4 font-amiri">To'lov xulosasi</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Viza turi:</span>
                      <span className="font-medium">{formData.visaType || 'Tanlanmagan'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Xizmat narxi:</span>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Qayta ishlash:</span>
                      <span className="font-medium">$25</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Jami:</span>
                        <span className="text-primary">$175</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-green-800 mb-1">Xavfsiz to'lov:</p>
                      <p className="text-green-700">
                        Barcha to'lovlar SSL shifrlash bilan himoyalangan va xavfsiz
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Orqaga
            </Button>

            <div className="flex space-x-4">
              {currentStep < 3 ? (
                <Button type="button" onClick={nextStep}>
                  Keyingisi
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} size="lg">
                  {isSubmitting ? 'Yuborilmoqda...' : 'Ariza yuborish'}
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ariza;
