import { SkillCard } from '@/components/ui/skill-card';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiLaravel,
  SiSharp,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';


export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          title: "React",
          description: "Building dynamic, responsive web applications with modern React patterns and component-based architecture.",
          icon: <SiReact className="w-8 h-8 text-blue-500" />,
          level: 60
        },
        {
          title: "JavaScript",
          description: "Writing efficient, interactive web applications with ES6+ features and modern JavaScript practices.",
          icon: <SiJavascript className="w-8 h-8 text-yellow-500" />,
          level: 70
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          title: "Node.js",
          description: "Building robust REST APIs and server-side applications with Node.js.",
          icon: <SiNodedotjs className="w-8 h-8 text-green-600" />,
          level: 60
        },
        {
          title: "Python",
          description: "Developing applications with Python programming language, including data analysis and AI projects.",
          icon: <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">PY</div>,
          level: 80
        },
        {
          title: "Java",
          description: "Building applications with Java programming language.",
          icon: <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">J</div>,
          level: 75
        }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        {
          title: "SQL",
          description: "Relational database management with SQL for data storage, querying, and optimization.",
          icon: <SiMysql className="w-8 h-8 text-blue-600" />,
          level: 80
        },
        {
          title: "NoSQL",
          description: "NoSQL database management for flexible data storage and querying.",
          icon: <SiMongodb className="w-8 h-8 text-green-600" />,
          level: 70
        },
        {
          title: "Git",
          description: "Version control system for tracking changes in source code during software development.",
          icon: <SiGit className="w-8 h-8 text-orange-600" />,
          level: 70
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              Skills & Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning in the ever-evolving tech landscape.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">
                  {category.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      title={skill.title}
                      description={skill.description}
                      icon={skill.icon}
                      level={skill.level}
                      className="animate-fade-in"
                      style={{
                        animationDelay: `${(categoryIndex * 3 + skillIndex) * 0.1}s`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};