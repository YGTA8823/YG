import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ygta8823@gmail.com",
      href: "mailto:ygta8823@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+251 988 239 952",
      href: "tel:+251988239952"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bole, Addis Ababa",
      href: "#"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Yegetanew Tariku",
      href: "https://www.linkedin.com/in/yegetanew-tariku-51589b257/"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat about technology?
              I'd love to hear from you and discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="glass-card border-glass-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="glass-card border-glass-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="glass-card border-glass-border"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="glass-card border-glass-border resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:glow-primary transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white">{info.label}</div>
                        <a
                          href={info.href}
                          className="text-white hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 hover-lift">
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-white mb-6">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you're a startup looking for a technical co-founder or an
                  established company needing development expertise, let's talk!
                </p>
                <div className="flex flex-col gap-3">
                  <div className="text-sm text-white">
                    ⚡ Usually responds within 24 hours
                  </div>
                  <div className="text-sm text-white">
                    🌍 Available for remote & on-site projects
                  </div>
                  <div className="text-sm text-white">
                    💡 Open to consulting and freelance work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};