
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  User, 
  Code, 
  Image as ImageIcon, 
  BookOpen, 
  Link as LinkIcon, 
  Github, 
  Instagram, 
  ExternalLink,
  Mail,
  Palette,
  ChevronRight,
  Monitor,
  Divide,
  Linkedin
} from 'lucide-react';

// --- Types ---

type Section = 'home' | 'projects' | 'pictures' | 'blog' | 'resources' | 'about';

interface Theme {
  name: string;
  id: string;
  bg: string;
  text: string;
  accent: string;
  border: string;
}

// --- Constants ---

const THEMES: Theme[] = [
  { id: 'default', name: 'Terminal', bg: 'bg-[#0a0a0a]', text: 'text-green-500', accent: 'bg-green-500', border: 'border-green-900/50' },
  { id: 'cherry', name: 'Cherry', bg: 'bg-[#0f0505]', text: 'text-red-500', accent: 'bg-red-500', border: 'border-red-900/50' },
  { id: 'blue', name: 'Ocean', bg: 'bg-[#050a0f]', text: 'text-blue-400', accent: 'bg-blue-400', border: 'border-blue-900/50' },
  { id: 'amber', name: 'Amber', bg: 'bg-[#0f0a05]', text: 'text-amber-500', accent: 'bg-amber-500', border: 'border-amber-900/50' },
];

const PROJECTS = [
  {
    title: "Jahan_web",
    description: "The public repository of the website's source code. Feel free to report bugs, add features and contribute if you'd like! :)",
    tags: ["HTML", "CSS", "TS", "REACT", "Open-Source", "Ongoing"],
    link: "https://github.com/https://github.com/Jahan1414/jahan_web",
    type: "SOURCE CODE"
  },
  {
    title: "To Do List (REACT + VITE)",
    description: "This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
    tags: ["HTML", "CSS", "REACT", "Open-Source", "Ongoing"],
    link: "https://github.com/Jahan1414/todo-react-app",
    type: "SOURCE CODE"
  },
  {
    title: "To Do List",
    description: 'A simple, minimalist "To Do List" app written without frameworks or libraries—just HTML, CSS, and Vanilla JS.',
    tags: ["HTML", "CSS", "JS", "Done"],
    link: "https://github.com/Jahan1414/To-Do-List",
    type: "SOURCE CODE"
  }
];

const UPDATES = [
  { date: "FEBRUARY 27TH, 2026", text: "Migrated the entire core to React + Vite. Implemented functional terminal logic and command history." },
  { date: "JANUARY 8TH, 2026", text: "Added Themes! You can switch between them to the right of the update list. 'terminal' is my favorite one :)" },
  { date: "DECEMBER 20TH, 2025", text: "Research phase: choosing the best tech stack for a developer portfolio. Settled on a terminal aesthetic. :)" }
];

// --- Components ---

const Scanline = () => (
  <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
    <div className="absolute inset-0 bg-[rgba(18,16,16,0.1)] opacity-10 animate-pulse pointer-events-none" />
  </div>
);

const SectionWrapper = ({ children, title }: { children: React.ReactNode; title: string; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="w-full max-w-4xl mx-auto p-4 md:p-8"
  >
    <div className="mb-8 border-b border-current pb-2 flex items-center gap-2">
      <ChevronRight className="w-5 h-5" />
      <h2 className="text-2xl font-bold tracking-tighter uppercase">{title}</h2>
    </div>
    {children}
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'pictures', label: 'Pictures', icon: ImageIcon },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'resources', label: 'Resources', icon: LinkIcon },
    { id: 'about', label: 'About', icon: User },
  ];

  if (isBooting) {
    return (
      <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center font-mono text-green-500 p-4`}>
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-1"
          >
            <p>{'>'} INITIALIZING SYSTEM...</p>
            <p>{'>'} LOADING ASSETS...</p>
            <p>{'>'} ESTABLISHING CONNECTION...</p>
            <p>{'>'} WELCOME TO JAHAN_WEB</p>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: "linear" }}
              className="h-1 bg-green-500 mt-4"
            />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} font-mono selection:bg-current selection:text-black transition-colors duration-500 relative overflow-x-hidden`}>
      <Scanline />
      
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-inherit/80 backdrop-blur-sm border-b border-current/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveSection('home')}>
            <Monitor className="w-6 h-6 animate-pulse" />
            <h1 className="text-xl font-black tracking-tighter uppercase group-hover:skew-x-12 transition-transform">
              Jahan_WEB
            </h1>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-1 md:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as Section)}
                className={`px-3 py-1 text-sm uppercase tracking-widest transition-all flex items-center gap-2 border border-transparent hover:border-current/50 ${activeSection === item.id ? 'bg-current text-black' : ''}`}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12 px-4">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <SectionWrapper key="home" title="Welcome Visitor!">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div className={`p-6 border-2 ${currentTheme.border} bg-current/5 relative overflow-hidden group`}>
                    <div className="absolute top-0 right-0 p-2 opacity-20">
                      <Terminal className="w-12 h-12" />
                    </div>
                    <p className="text-lg leading-relaxed mb-4">
                      This is digital space. Here you'll find my latest projects, technical logs, and creative experiments. Feel free to explore.
                    </p>
                    <p className="text-sm opacity-80">
                      Any questions? You might find them answered on the about page: 
                      <button onClick={() => setActiveSection('about')} className="underline ml-1 hover:opacity-100">ABOUT</button>
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <a href="https://github.com/Jahan1414/jahan_web" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm border border-current px-3 py-1 hover:bg-current hover:text-black transition-colors">
                        <Github className="w-4 h-4" />
                        SOURCE CODE
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <ChevronRight className="w-5 h-5" />
                      LATEST UPDATES
                    </h3>
                    <div className="space-y-4">
                      {UPDATES.map((update, i) => (
                        <div key={i} className={`p-4 border ${currentTheme.border} hover:bg-current/5 transition-colors`}>
                          <div className="text-xs opacity-60 mb-1">★ {update.date}</div>
                          <p className="text-sm">{update.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className={`p-6 border-2 ${currentTheme.border} bg-current/5`}>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      THEMES
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {THEMES.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => setCurrentTheme(theme)}
                          className={`p-2 text-xs uppercase border transition-all ${currentTheme.id === theme.id ? 'bg-current text-black border-current' : 'border-current/30 hover:border-current'}`}
                        >
                          {theme.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={`p-6 border-2 ${currentTheme.border} bg-current/5`}>
                    <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="https://github.com/Jahan1414" className="hover:underline flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
                      <li><a href="https://instagram.com/jah_ikram1" className="hover:underline flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
                      <li><a href="mailto:jahan.ikramov@gmail.com" className="hover:underline flex items-center gap-2"><Mail className="w-4 h-4" /> Contact</a></li>
                      <li><a href="https://t.me/JahanIkram" className="hover:underline flex item-center gap-2" ><ExternalLink className="w-4 h-4" /> Telegram</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'projects' && (
            <SectionWrapper key="projects" title="Projects">
              <p className="mb-8 opacity-80">A short list of projects made by me!</p>
              <div className="grid gap-6">
                {PROJECTS.map((project, i) => (
                  <div key={i} className={`p-6 border-2 ${currentTheme.border} bg-current/5 hover:bg-current/10 transition-all group`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:translate-x-2 transition-transform">{project.title}</h3>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1 border border-current hover:bg-current hover:text-black transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm mb-6 opacity-90 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="text-[10px] border border-current/30 px-2 py-0.5 uppercase tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold border border-current px-4 py-2 hover:bg-current hover:text-black transition-all"
                    >
                      [[{project.type}]]
                    </a>
                  </div>
                ))}
                <div className={`p-6 border-2 ${currentTheme.border} border-dashed opacity-60 hover:opacity-100 transition-opacity text-center`}>
                  <p className="text-sm">More archived projects can be found on the original site.</p>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'pictures' && (
            <SectionWrapper key="pictures" title="Pictures">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">NEURAL ART</h3>
                  <p className="text-sm mb-6 opacity-80">Neural Art Collection. Conceptual visuals created using generative AI models.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className={`aspect-video bg-current/10 border ${currentTheme.border} overflow-hidden group relative`}>
                        <img 
                          src={`#${n}/800/450`} 
                          alt={`Neural Art ${n}`}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-xs border border-white px-3 py-1">VIEW RENDER</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">CYBERPUNK</h3>
                  <p className="text-sm mb-6 opacity-80">Collection of cyberpunk visuals generated with AI. Color-grading and lighting enhancements done using Adobe Lightroom.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div key={n} className={`aspect-square bg-current/10 border ${currentTheme.border} overflow-hidden group`}>
                        <img 
                          src={`#${n}/600/600`} 
                          alt={`Cyberpunk ${n}`}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {activeSection === 'about' && (
            <SectionWrapper key="about" title="About Me">
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2 uppercase tracking-tighter">Who am I?</h3>
                      <p className="text-sm leading-relaxed opacity-90">
                        Hi! I'm an aspiring Software Engineer with a deep fascination for <strong>A I</strong>. 
                        While I learn and build modern web interfaces with React, my main focus is shifting towards Backend development and AI engineering. 
                        I'm currently diving into Python to build intelligent systems and automate complex tasks. 
                        I don't just want to build apps; I want to build them smart.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 uppercase tracking-tighter">Root Access</h3>
                      <p className="text-sm leading-relaxed opacity-90">
                        "My journey didn't start with a textbook; it started with pure enthusiasm. 
                        I’ve always been obsessed with how things work under the hood — whether it’s a simple mobile app, a complex web system, or the computer hardware itself. 
                        But the ultimate question that drives me is AI. I often wonder: can we, as humans, push Artificial Intelligence to the level of true human-like reason?
                      </p>
                    </div>
                  </div>
                  <div className={`p-6 border-2 ${currentTheme.border} bg-current/5`}>
                    <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">TECH_STACK & SKILLS</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1">{'-'}{'>'}</span>
                        <div className="flex flex-col">
                        <strong>Web Development:</strong>
                          <span className="opacity-90 ml-2">HTML5/CSS3/JavaScript(ES6+)</span>
                          <span className="opacity-90 ml-2">React & Vite (now)</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">{'-'}{'>'}</span>
                        <div className="flex flex-col">
                          <strong>Systems & Logic:</strong> 
                          <span className="opacity-90 ml-2">Python (basic)</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">{'-'}{'>'}</span>
                        <div className="flex flex-col">
                          <strong>Version Control & Workflow:</strong>
                          <span className="opacity-90 ml-2">Git & GitHub</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">{"->"}</span>
                        <div className="flex flex-col">
                          <strong>Multilingual Support:</strong>
                          <span className="opacity-90 ml-2">English (B1) / Russian (Advanced)</span>
                          <span className="opacity-90 ml-2">Uzbek (Native)</span>
                          <span className="opacity-90 ml-2">Turkish & Farsi (Conversational)</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className={`p-6 border-2 ${currentTheme.border} bg-current/5`}>
                    <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">Social Media</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <a href="https://instagram.com/jah_ikram1" className="flex items-center gap-2 hover:underline"><Instagram className="w-4 h-4" /> Instagram</a>
                      <a href="https://github.com/Jahan1414" className="flex items-center gap-2 hover:underline"><Github className="w-4 h-4" /> GitHub</a>
                      <a href="https://www.linkedin.com/in/zhakhonsha-ikramov-51166410b" className="flex items-center gap-2 hover:underline"><Linkedin className="w-4 h-4" /> LInkedIn</a>
                    </div>
                  </div>
                  <div className={`p-6 border-2 ${currentTheme.border} bg-current/5`}>
                    <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">Contact</h3>
                    <p className="text-sm mb-4">Questions, wishes, inquiries, problems?</p>
                    <a href="mailto:contact@richardapps.net" className="inline-flex items-center gap-2 border border-current px-4 py-2 hover:bg-current hover:text-black transition-all font-bold">
                      <Mail className="w-4 h-4" />
                      SEND EMAIL
                    </a>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {(activeSection === 'blog' || activeSection === 'resources') && (
            <SectionWrapper key="placeholder" title={activeSection}>
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <Terminal className="w-16 h-16 animate-bounce" />
                <h3 className="text-2xl font-bold uppercase">Section Under Construction</h3>
                <p className="text-sm opacity-60 max-w-md">
                  This part of the terminal is currently being updated. Please check back later or visit the original site for full content.
                </p>
                <button 
                  onClick={() => setActiveSection('home')}
                  className="border border-current px-6 py-2 hover:bg-current hover:text-black transition-all"
                >
                  RETURN HOME
                </button>
              </div>
            </SectionWrapper>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-current/20 py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2026 JAHAN_WEB - ALL RIGHTS RESERVED</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <p>SYSTEM STATUS: ONLINE</p>
          </div>
        </div>
      </footer>

      {/* CRT Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-[radial-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_100%),linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] pointer-events-none" />
    </div>
  );
}
