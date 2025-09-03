import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import kidusLogo from '@/assets/kidus-logo.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'glass-card border-b border-glass-border/50 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo/Brand (left side) */}
          <div className="flex items-center">
            <img
              src={kidusLogo}
              alt="Kidus Adugna Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation (right side) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'text-sm font-medium transition-all duration-300',
                  'hover:text-primary',
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button (right side) */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 glass-card border-t border-glass-border/50 mt-2 rounded-lg">
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'text-sm font-medium text-left py-2 transition-colors',
                    'hover:text-primary',
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-white'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};