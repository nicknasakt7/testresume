import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Code2,
  Mail,
  Phone,
  Github,
  Linkedin,
  Database,
  Layout,
  Server,
  Wrench,
  GraduationCap,
  Lightbulb,
  ExternalLink,
  FileCode2,
} from 'lucide-react';
import profileImage from 'figma:asset/85e252ed3b732ae4147a15fc8594e356a752a8a2.png';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Section wrapper component with scroll animation
function Section({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Card component with hover effect
function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(30, 58, 138, 0.15)' }}
      transition={{ duration: 0.2 }}
      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'tech', 'projects', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section id="hero" className="min-h-screen flex items-center justify-center px-8 py-24 bg-gradient-to-br from-[#1E3A8A]/5 to-white">
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl mb-4 text-[#1E3A8A]">
              Jutamat Jarusirisakul
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-700">
              Junior Fullstack Developer
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Fullstack Developer specializing in React, Next.js, and NestJS
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-xl">
              Passionate about building scalable web applications with clean and maintainable code
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg hover:bg-[#1E3A8A]/90 transition-all shadow-md hover:shadow-lg"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] px-8 py-3 rounded-lg hover:bg-[#F3F4F6] transition-all"
              >
                Contact
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#1E3A8A]/10 rounded-2xl blur-2xl"></div>
              <img
                src={profileImage}
                alt="Jutamat Jarusirisakul"
                className="relative rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="py-24 px-8 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-12 text-[#1E3A8A] text-center">About Me</h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="mb-6">
              <h3 className="text-2xl mb-4 text-[#1E3A8A]">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                Junior Fullstack Developer with hands-on experience building web applications using React, Next.js, and NestJS. 
                Strong foundation in RESTful APIs, authentication, database design, and modern frontend architecture. 
                Passionate about writing clean, maintainable code and continuously improving development skills.
              </p>
            </Card>
            <Card>
              <h3 className="text-2xl mb-4 text-[#1E3A8A]">Career Transition</h3>
              <p className="text-gray-700 leading-relaxed">
                Transitioned from business background to software development to pursue long-term growth in the tech industry 
                and build scalable digital products.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section id="tech" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-[#1E3A8A] text-center">Tech Stack</h2>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-8">
            {/* Programming Languages */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-[#1E3A8A]" />
                <h3 className="text-2xl text-[#1E3A8A]">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['TypeScript', 'JavaScript', 'SQL'].map((tech) => (
                  <Card key={tech}>
                    <p className="text-center text-gray-700">{tech}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-6 h-6 text-[#1E3A8A]" />
                <h3 className="text-2xl text-[#1E3A8A]">Frontend</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'].map((tech) => (
                  <Card key={tech}>
                    <p className="text-center text-gray-700">{tech}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-[#1E3A8A]" />
                <h3 className="text-2xl text-[#1E3A8A]">Backend</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Node.js', 'Express.js', 'NestJS', 'RESTful API', 'JWT', 'bcrypt'].map((tech) => (
                  <Card key={tech}>
                    <p className="text-center text-gray-700">{tech}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#1E3A8A]" />
                <h3 className="text-2xl text-[#1E3A8A]">Database</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose'].map((tech) => (
                  <Card key={tech}>
                    <p className="text-center text-gray-700">{tech}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-[#1E3A8A]" />
                <h3 className="text-2xl text-[#1E3A8A]">Tools & Others</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Git', 'GitHub', 'Postman', 'Docker', 'VS Code', 'Figma', 'Zod', 'DTO validation', 'MVC', 'Agile', 'CI/CD basics', 'n8n', 'AI tools'].map((tech) => (
                  <Card key={tech}>
                    <p className="text-center text-gray-700">{tech}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-24 px-8 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-[#1E3A8A] text-center">Projects</h2>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Project 1 */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <div className="flex items-start gap-3 mb-4">
                  <FileCode2 className="w-8 h-8 text-[#1E3A8A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl text-[#1E3A8A] mb-2">Employee Management Internal System</h3>
                    <p className="text-sm text-gray-500 mb-4">Fullstack Web Application</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm mb-2">
                    <span className="text-gray-700">Tech Stack:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'JWT', 'Zod'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Designed and developed a fullstack internal system with authentication and database architecture
                </p>

                <div className="mb-4">
                  <p className="text-sm mb-2 text-gray-700">Key Highlights:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E3A8A] mt-1">•</span>
                      <span className="text-gray-600">Full CRUD functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E3A8A] mt-1">•</span>
                      <span className="text-gray-600">Authentication system (Login/Register)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E3A8A] mt-1">•</span>
                      <span className="text-gray-600">API integration between frontend and backend</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="text-[#1E3A8A]">Role:</span> Fullstack Developer
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <div className="flex items-start gap-3 mb-4">
                  <FileCode2 className="w-8 h-8 text-[#1E3A8A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl text-[#1E3A8A] mb-2">Group Project</h3>
                    <p className="text-sm text-gray-500 mb-4">Collaborative Development</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Collaborated in a team using Git workflow and modular architecture
                </p>

                <div className="mb-4">
                  <p className="text-sm mb-2 text-gray-700">Key Highlights:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E3A8A] mt-1">•</span>
                      <span className="text-gray-600">Team collaboration with Agile methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E3A8A] mt-1">•</span>
                      <span className="text-gray-600">Git branching & pull requests workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E3A8A] mt-1">•</span>
                      <span className="text-gray-600">Conflict resolution and code reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1E3A8A] mt-1">•</span>
                      <span className="text-gray-600">Module separation and clean architecture</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="text-[#1E3A8A]">Focus:</span> Teamwork & Version Control
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-[#1E3A8A] text-center">Education</h2>
          
          <Card>
            <div className="flex items-start gap-4">
              <div className="bg-[#1E3A8A]/10 p-4 rounded-lg">
                <GraduationCap className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#1E3A8A] mb-2">Fullstack Web Development</h3>
                <p className="text-lg text-gray-700 mb-2">DevNest</p>
                <p className="text-gray-500 mb-4">December 2025 – April 2026</p>
                
                <div>
                  <p className="text-sm mb-2 text-gray-700">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'TypeScript', 'Database', 'React', 'Next.js', 'NestJS', 'Docker', 'Agile', 'n8n', 'AI'].map((topic) => (
                      <span key={topic} className="px-3 py-1 bg-[#F3F4F6] text-gray-700 rounded-full text-sm border border-gray-200">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Soft Skills Section */}
      <Section id="skills" className="py-24 px-8 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-12 text-[#1E3A8A] text-center">Soft Skills</h2>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              'Strong problem-solving',
              'Logical thinking',
              'Fast learner',
              'Debugging mindset',
              'Agile team experience',
              'Effective communication',
            ].map((skill) => (
              <motion.div key={skill} variants={fadeInUp}>
                <Card>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-[#1E3A8A]" />
                    <p className="text-gray-700">{skill}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-[#1E3A8A] text-center">Get In Touch</h2>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <a href="mailto:j.nicksakul@gmail.com" className="flex items-center gap-4 group">
                  <div className="bg-[#1E3A8A]/10 p-4 rounded-lg group-hover:bg-[#1E3A8A]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-gray-700 group-hover:text-[#1E3A8A] transition-colors">j.nicksakul@gmail.com</p>
                  </div>
                </a>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <a href="tel:0638798982" className="flex items-center gap-4 group">
                  <div className="bg-[#1E3A8A]/10 p-4 rounded-lg group-hover:bg-[#1E3A8A]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-gray-700 group-hover:text-[#1E3A8A] transition-colors">063-879-8982</p>
                  </div>
                </a>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <a href="https://github.com/nicknasakt7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="bg-[#1E3A8A]/10 p-4 rounded-lg group-hover:bg-[#1E3A8A]/20 transition-colors">
                    <Github className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">GitHub</p>
                    <p className="text-gray-700 group-hover:text-[#1E3A8A] transition-colors flex items-center gap-2">
                      View Profile
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </a>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="bg-[#1E3A8A]/10 p-4 rounded-lg group-hover:bg-[#1E3A8A]/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                    <p className="text-gray-700 group-hover:text-[#1E3A8A] transition-colors flex items-center gap-2">
                      Connect
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </a>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© 2026 Jutamat Jarusirisakul</p>
          <p className="text-sm text-white/70">Built with React, Motion, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}