import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import profileImg from '@/assets/yegetanew-profile.jpg.jpg';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              
            </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient animate-glow">Yegetanew Tariku</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-white mb-8 font-light">
            System Graduate & IT Professional
          </h2>

          <p className="text-lg text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Recent system graduate with a passion for IT and technology, eager to apply knowledge in innovative projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="default"
              className="bg-gradient-primary hover:glow-primary transition-all duration-300 text-white"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              size="default"
              variant="outline"
              className="border-glass-border hover:bg-primary hover:text-white transition-all duration-300 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <Button size="sm" variant="ghost" className="hover:text-primary transition-colors" asChild>
              <a href="mailto:ygta8823@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors"
            >
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card border-4 border-primary/20 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Yegetanew Tariku"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};