
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Send } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.visas'), href: '/vizalar' },
    { name: t('nav.apply'), href: '/ariza' },
    { name: t('nav.status'), href: '/status' },
    { name: t('nav.prices'), href: '/narxlar' },
    { name: t('nav.contact'), href: '/aloqa' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground islamic-pattern">
      <div className="container mx-auto px-4 py-12 relative overflow-x-hidden">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-background/10 rounded-lg flex items-center justify-center">
                <span className="text-3xl">🕋</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-amiri">eVisa Saudi</h3>
                <p className="text-sm opacity-90">Arabia</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-amiri">{t('footer.quick_links')}</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-amiri">{t('footer.contact_info')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>{t('footer.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>{t('footer.email')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span>{t('footer.hours')}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-amiri">{t('footer.follow_us')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-500 to-yellow-400 text-white hover:scale-110 shadow transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 text-white hover:scale-110 shadow transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-red-600 text-white hover:scale-110 shadow transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-tr from-blue-400 to-blue-600 text-white hover:scale-110 shadow transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-8">
          <div className="fixed left-0 right-0 w-screen h-px bg-background/20 top-auto bottom-0 z-10" style={{position:'absolute',top:0}} />
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
