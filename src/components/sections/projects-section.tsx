import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import yegnaChat from '@/assets/yegna-chat-1.png';
import parkingSystem from '@/assets/parking-system.png';
import recordManagement from '@/assets/record-management.png';
import bettingImage from '@/assets/betting.png';
import loginImage from '@/assets/login.png';
import placeholder from '/placeholder.svg';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Based Mental Health Chatbot",
      description: "An AI-powered chatbot designed to provide mental health support and guidance. Features natural language processing, conversation flow management, and integration with mental health resources.",
      image: yegnaChat,
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "School Management System",
      description: "A comprehensive system for managing school operations including student records, attendance, grades, and administrative functions. Built with modern web technologies for scalability.",
      image: parkingSystem,
      technologies: ["React", "Node.js", "SQL", "Express"]
    },
    {
      title: "Customer Segmentation System",
      description: "A data-driven system for segmenting customers based on behavior and demographics. Utilizes machine learning algorithms to provide insights for targeted marketing and personalized services.",
      image: recordManagement,
      technologies: ["Python", "SQL", "NoSQL", "React"]
    },
    {
      title: "Digital Scent Technology (Research Project)",
      description: "Research project exploring digital scent technology applications. Investigates the integration of olfactory interfaces with digital systems for enhanced user experiences.",
      image: bettingImage,
      technologies: ["Research", "System Analysis"]
    },
    {
      title: "Knowledge Management System Research Project",
      description: "Research focused on developing effective knowledge management systems. Explores methodologies for capturing, organizing, and disseminating organizational knowledge.",
      image: loginImage,
      technologies: ["Research", "System Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              A selection of projects that showcase my skills and passion for creating
              innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                className="animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-white mb-6">
                I'm always working on new projects and exploring innovative technologies.
                Feel free to reach out if you'd like to discuss potential collaborations.
              </p>
              <Button
                className="bg-gradient-primary hover:glow-primary transition-all duration-300"
                asChild
              >
                <a href="mailto:ygta8823@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};