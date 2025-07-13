
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, CheckCircle, Clock, XCircle, FileText, Download, Eye } from "lucide-react";

const Status = () => {
  const { t } = useLanguage();
  const [searchType, setSearchType] = useState<'application' | 'passport'>('application');
  const [searchValue, setSearchValue] = useState('');
  const [applicationStatus, setApplicationStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration
  const mockApplicationData = {
    id: 'VZ-2024-001234',
    applicantName: 'Aziz Karimov',
    visaType: 'Umra vizasi',
    submissionDate: '2024-01-15',
    status: 'approved', // pending, approved, rejected, processing
    passportNumber: 'AB1234567',
    estimatedDate: '2024-01-20',
    documents: [
      { name: 'Passport copy', status: 'verified' },
      { name: 'Photo', status: 'verified' },
      { name: 'COVID certificate', status: 'verified' },
    ],
    timeline: [
      { date: '2024-01-15', status: 'Ariza qabul qilindi', completed: true },
      { date: '2024-01-16', status: 'Hujjatlar tekshirilmoqda', completed: true },
      { date: '2024-01-18', status: 'Tasdiqlandi', completed: true },
      { date: '2024-01-20', status: 'Viza tayyor', completed: true },
    ]
  };

  const handleSearch = async () => {
    if (!searchValue.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (searchValue === 'VZ-2024-001234' || searchValue === 'AB1234567') {
        setApplicationStatus(mockApplicationData);
      } else {
        setApplicationStatus(null);
      }
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
      case 'processing':
        return <Clock className="w-4 h-4" />;
      case 'approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Ko\'rib chiqilmoqda';
      case 'processing':
        return 'Qayta ishlanmoqda';
      case 'approved':
        return 'Tasdiqlandi';
      case 'rejected':
        return 'Rad etildi';
      default:
        return 'Noma\'lum';
    }
  };

  return (
    <div className="py-16 animate-fade-in-up">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-amiri mb-4">
            Ariza holatini tekshiring
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ariza ID yoki passport raqam orqali vizangiz holatini kuzating
          </p>
        </div>

        {/* Search Form */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="font-amiri">Qidiruv</CardTitle>
            <CardDescription>
              Qidiruv turini tanlang va ma'lumotni kiriting
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSearchType('application')}
                className={`p-4 border-2 rounded-lg text-center transition-colors ${
                  searchType === 'application'
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <FileText className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">Ariza ID</div>
                <div className="text-sm text-muted-foreground">VZ-2024-001234</div>
              </button>

              <button
                type="button"
                onClick={() => setSearchType('passport')}
                className={`p-4 border-2 rounded-lg text-center transition-colors ${
                  searchType === 'passport'
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <FileText className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium">Passport raqam</div>
                <div className="text-sm text-muted-foreground">AB1234567</div>
              </button>
            </div>

            <div className="space-y-2">
              <Label>
                {searchType === 'application' ? 'Ariza ID' : 'Passport raqam'}
              </Label>
              <div className="flex space-x-4">
                <Input
                  placeholder={
                    searchType === 'application' 
                      ? 'VZ-2024-001234' 
                      : 'AB1234567'
                  }
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSearch} disabled={isLoading}>
                  {isLoading ? (
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Search className="w-4 h-4 mr-2" />
                  )}
                  Qidirish
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Sinov uchun:</p>
                <p>• Ariza ID: VZ-2024-001234</p>
                <p>• Passport: AB1234567</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {applicationStatus && (
          <div className="space-y-6">
            {/* Status Overview */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-amiri">Ariza holati</CardTitle>
                    <CardDescription>ID: {applicationStatus.id}</CardDescription>
                  </div>
                  <Badge className={`${getStatusColor(applicationStatus.status)} border`}>
                    {getStatusIcon(applicationStatus.status)}
                    <span className="ml-2">{getStatusText(applicationStatus.status)}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Ariza beruvchi</div>
                    <div className="font-medium">{applicationStatus.applicantName}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Viza turi</div>
                    <div className="font-medium">{applicationStatus.visaType}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Topshirilgan sana</div>
                    <div className="font-medium">{applicationStatus.submissionDate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Taxminiy tugash</div>
                    <div className="font-medium">{applicationStatus.estimatedDate}</div>
                  </div>
                </div>

                {applicationStatus.status === 'approved' && (
                  <div className="flex space-x-4 pt-4 border-t">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Vizani yuklash
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Ko'rish
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-amiri">Jarayon bosqichlari</CardTitle>
                <CardDescription>
                  Arizangiz qanday bosqichlardan o'tganini kuzating
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applicationStatus.timeline.map((item: any, index: number) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.completed 
                          ? 'bg-primary text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.completed ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Clock className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${
                          item.completed ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {item.status}
                        </div>
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents Status */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-amiri">Hujjatlar holati</CardTitle>
                <CardDescription>
                  Yuklangan hujjatlar tekshiruv holati
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {applicationStatus.documents.map((doc: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">{doc.name}</span>
                      </div>
                      <Badge variant={doc.status === 'verified' ? 'default' : 'secondary'}>
                        {doc.status === 'verified' ? (
                          <>
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Tasdiqlangan
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3 mr-1" />
                            Kutilmoqda
                          </>
                        )}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Help Section */}
        <Card className="shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="font-amiri">Yordam kerakmi?</CardTitle>
            <CardDescription>
              Ariza holati haqida savollaringiz bo'lsa, biz bilan bog'laning
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-medium">Telefon</div>
                <div className="text-sm text-muted-foreground">+998 90 123 45 67</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-muted-foreground">support@evisa-saudi.uz</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl mb-2">💬</div>
                <div className="font-medium">Telegram</div>
                <div className="text-sm text-muted-foreground">@evisa_saudi_bot</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Status;
