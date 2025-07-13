
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.visas'), href: '/vizalar' },
    { name: t('nav.apply'), href: '/ariza' },
    { name: t('nav.status'), href: '/status' },
    { name: t('nav.prices'), href: '/narxlar' },
    { name: t('nav.contact'), href: '/aloqa' },
  ];

  const languages = [
    { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg sticky top-0 z-50 islamic-pattern border-b">
      {/* MOBILE: IKKI QATOR NAVBAR */}
      <div className="block lg:hidden relative">
        {/* 1-qator */}
        <div className="flex justify-between items-center h-14 px-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl">🕋</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary font-amiri leading-none">eVisa Saudi</h1>
              <p className="text-xs text-muted-foreground leading-none">Arabia</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  {languages.find(lang => lang.code === language)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as 'uz' | 'ar' | 'en')}
                    className={`cursor-pointer ${language === lang.code ? 'bg-primary/10' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* Chiziq */}
        <div className="absolute left-0 right-0 h-px bg-black/40 dark:bg-white/70 my-1 z-10" style={{top: '56px'}} />
        {/* 2-qator */}
        <nav className="flex justify-between items-center h-14 px-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-xs font-medium px-2 py-1 rounded transition-colors hover:text-accent ${location.pathname === item.href ? 'text-accent' : 'text-foreground'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* DESKTOP: NAVBAR */}
      <div className="hidden lg:flex container mx-auto px-4 justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl">🕋</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary font-amiri">
                eVisa Saudi
              </h1>
              <p className="text-xs text-muted-foreground">Arabia</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary ${location.pathname === item.href ? 'text-primary border-b-2 border-primary' : 'text-foreground'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Controls */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  <Globe className="w-4 h-4 mr-2" />
                  {languages.find(lang => lang.code === language)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as 'uz' | 'ar' | 'en')}
                    className={`cursor-pointer ${language === lang.code ? 'bg-primary/10' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation (old menu) */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-2 font-medium transition-colors hover:bg-muted rounded-md ${location.pathname === item.href ? 'text-primary bg-primary/10' : 'text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 flex space-x-2">
                <ThemeToggle />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Globe className="w-4 h-4 mr-2" />
                      {languages.find(lang => lang.code === language)?.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-background">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as 'uz' | 'ar' | 'en')}
                        className="cursor-pointer"
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        )}
    </header>
  );
};

export default Header;
