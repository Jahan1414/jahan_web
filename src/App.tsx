import { useState, type FormEvent } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check,
  Github, Image, Linkedin, Menu, MonitorSmartphone,
  Palette, Play, Send, Sparkles, Video, X
} from 'lucide-react';

const projects = [
  {
    number: '01', name: 'Nurli Bolalar', type: 'WEB DEVELOPMENT · NON-PROFIT',
    description: 'An informational platform created to support children with autism spectrum disorder and their families. Focused on accessible content, clear navigation and a welcoming experience.',
    stack: ['React', 'TypeScript', 'Vite', 'SEO'], url: 'https://nurlibolalar.uz', action: 'Visit live website',
  },
  {
    number: '02', name: 'Jahan Web', type: 'PERSONAL PORTFOLIO · FRONTEND',
    description: 'My own portfolio and an ongoing frontend project. A place to experiment with interface design, responsive layouts and modern web technologies.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'], url: 'https://github.com/Jahan1414/jahan_web', action: 'View source code',
  },
  {
    number: '03', name: 'To-Do List', type: 'WEB APPLICATION · JAVASCRIPT',
    description: 'A lightweight task-list application built with vanilla JavaScript, HTML and CSS. Demonstrates DOM interaction and practical interface logic.',
    stack: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/Jahan1414/To-Do-List', action: 'View source code',
  },
  {
    number: '04', name: 'React To-Do App', type: 'WEB APPLICATION · REACT',
    description: 'A small React application built with Vite. Explore the code and interface implementation in the project repository.',
    stack: ['React', 'Vite', 'JavaScript'], url: 'https://github.com/Jahan1414/todo-react-app', action: 'View source code',
  },
  {
    number: '05', name: 'Minimal Desk Lamp — Ozon Listing Concept', type: 'MARKETPLACE DESIGN · SELF-INITIATED CONCEPT',
    description: 'A concept for a five-slide product listing: a clean hero image, key benefits, dimensions, material details and a simple usage scene. Designed to make product information easy to scan on mobile.',
    stack: ['Ozon', 'Product Infographics', '5-Slide Structure', 'Visual Hierarchy'], url: 'mailto:jahan.ikramov@gmail.com?subject=Marketplace%20design%20sample', action: 'Ask about this concept',
  },
  {
    number: '06', name: 'Home Storage Organizer — Wildberries Concept', type: 'MARKETPLACE DESIGN · SELF-INITIATED CONCEPT',
    description: 'A listing visual direction for a home-storage product, focusing on space-saving benefits, capacity, use cases and clear feature callouts. Created as a portfolio exercise, not a commissioned client project.',
    stack: ['Wildberries', 'Listing Design', 'Product Benefits', 'Infographic'], url: 'mailto:jahan.ikramov@gmail.com?subject=Wildberries%20design%20sample', action: 'Ask about this concept',
  },
  {
    number: '07', name: 'Everyday Product — Short-Form Promo Concept', type: 'VIDEO EDITING · SELF-INITIATED CONCEPT',
    description: 'A proposed 20–30 second vertical product promo built around a strong opening hook, close-up detail shots, concise captions, feature highlights and a clear closing frame. A concept brief for demonstrating editing structure and pacing.',
    stack: ['Short-Form Video', 'Reels / Shorts', 'Captions', 'Storyboarding'], url: 'mailto:jahan.ikramov@gmail.com?subject=Video%20editing%20sample', action: 'Discuss a video project',
  },
];

const services = [
  { icon: MonitorSmartphone, no: '01', title: 'Website Development', text: 'Responsive landing pages and modern websites built with React, JavaScript, HTML and CSS.' },
  { icon: Image, no: '02', title: 'Marketplace Design', text: 'Product cards, infographics and visual slide sets for Ozon and Wildberries listings.' },
  { icon: Sparkles, no: '03', title: 'AI-Assisted Design', text: 'Creative concepts, visual assets and faster design workflows supported by AI tools.' },
  { icon: Video, no: '04', title: 'Video Editing', text: 'Clear, engaging edits for social media, product presentations and digital content.' },
];

const skills = ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Responsive Design', 'Git & GitHub', 'Figma', 'Lovable', 'AI-assisted workflows', 'Marketplace Infographics', 'Video Editing'];

const marketplaceWorks = [
  {
    image: '/portfolio/marketplace/work-01.webp',
    title: 'Product Infographic',
    category: 'Marketplace Design',
  },
  {
    image: '/portfolio/marketplace/work-02.webp',
    title: 'Product Presentation',
    category: 'E-commerce Visuals',
  },
  {
    image: '/portfolio/marketplace/work-03.webp',
    title: 'Product Features',
    category: 'Marketplace Design',
  },
  {
    image: '/portfolio/marketplace/work-04.webp',
    title: 'Product Listing Design',
    category: 'Ozon / Wildberries',
  },
  {
    image: '/portfolio/marketplace/work-05.webp',
    title: 'Product Infographic',
    category: 'E-commerce Visuals',
  },
];


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const service = String(form.get('service') || 'Not specified');
    const budget = String(form.get('budget') || 'Not specified');
    const details = String(form.get('details') || '');
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\n\nProject details:\n${details}`);
    window.location.href = `mailto:jahan.ikramov@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Jahan home"><span className="brand-mark">J.</span><span>JAHAN (Zhakhonsha)<span className="brand-muted"> / DIGITAL CREATOR</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#work" onClick={closeMenu}>Work</a><a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="/cv.html" target="_blank" rel="noreferrer">View CV <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR SELECT PROJECTS <span className="eyebrow-line"/></div>
            <h1>I make ideas<br/>work <span className="accent">beautifully.</span></h1>
            <p className="hero-lede">I build digital experiences, marketplace visuals and creative content that help ideas move forward.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="#contact">Let's talk <ArrowRight size={16}/></a></div>
            <div className="hero-meta"><span>REMOTE · WORLDWIDE</span><span className="meta-separator"/><span>FLEXIBLE TIME ZONES</span><span className="meta-separator"/><span>EN / RU / UZ</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract creative digital composition">
            <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core"><span>IDEAS</span><strong>INTO</strong><em>IMPACT<span>.</span></em></div>
            <div className="art-label label-top">CREATIVE × TECHNICAL</div><div className="art-label label-bottom">DESIGN / BUILD / REFINE</div><div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
          </div>
          <a href="#services" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="ticker" aria-label="Areas of work"><div className="ticker-track"><span>WEB DEVELOPMENT</span><b>✳</b><span>MARKETPLACE DESIGN</span><b>✳</b><span>AI-ASSISTED CREATION</span><b>✳</b><span>VIDEO EDITING</span><b>✳</b><span>WEB DEVELOPMENT</span><b>✳</b><span>MARKETPLACE DESIGN</span><b>✳</b></div></section>

        <section className="section-wrap section-block" id="services">
          <div className="section-heading"><div><p className="eyebrow">WHAT I CAN DO</p><h2>Creative thinking.<br/><span className="muted-heading">Practical execution.</span></h2></div><p className="section-intro">From the first idea to the final detail, I combine technology and visual craft to create useful digital work.</p></div>
          <div className="service-grid">{services.map(({icon: Icon, no, title, text}) => <article className="service-card" key={no}><div className="service-top"><span>{no} / 04</span><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><span className="card-arrow"><ArrowUpRight size={18}/></span></article>)}</div>
        </section>

        <section className="section-wrap section-block work-section" id="work">
          <div className="section-heading"><div><p className="eyebrow">SELECTED PROJECTS</p><h2>Work that shows<br/><span className="muted-heading">how I think.</span></h2></div><p className="section-intro">A mix of live projects, personal applications and clearly labelled self-initiated creative concepts.</p></div>
          <div className="project-list">{projects.map(project => <article className="project-row" key={project.number}><div className="project-number">{project.number}</div><div className="project-content"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.action}: ${project.name}`}><span>{project.action}</span><ArrowUpRight size={20}/></a></article>)}</div>
        </section>

        
        <section className="gallery-section" id="gallery">
          <div className="section-wrap section-block">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SELECTED VISUAL WORK</p>
                <h2>
                  Marketplace<br />
                  <span className="muted-heading">design & infographics.</span>
                </h2>
              </div>
              <p className="section-intro">
                Product visuals and infographic designs created for
                e-commerce marketplaces, including Ozon and Wildberries.
              </p>
            </div>

            <div className="marketplace-grid">
              {marketplaceWorks.map((work, index) => (
                <article className="marketplace-card" key={work.image}>
                  <a
                    className="marketplace-image"
                    href={work.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${work.title}`}
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      loading="lazy"
                    />
                    <span className="marketplace-number">
                      0{index + 1}
                    </span>
                  </a>
                  <div className="marketplace-caption">
                    <div>
                      <h3>{work.title}</h3>
                      <span>{work.category}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="section-wrap section-block about-section" id="about"><div className="about-layout"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curious by nature.<br/><span className="muted-heading">Creator by choice.</span></h2><a className="button button-outline" href="/cv.html" target="_blank" rel="noreferrer">Explore my CV <ArrowUpRight size={16}/></a></div><div className="about-copy"><p className="about-lede">I'm Jahan, a digital creator focused on frontend development and visual content.</p><p>I enjoy turning ideas into useful, clear and well-crafted digital experiences. My toolkit includes React, JavaScript, HTML, CSS and Tailwind CSS. I also create marketplace product visuals, work with AI-assisted design tools and edit video.</p><p>I value clear communication, thoughtful details and reliable delivery. I'm continuously learning, experimenting and improving with every project.</p><div className="skill-heading">TOOLS & SKILLS</div><div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></div></section>

        <section className="process-section"><div className="section-wrap section-block"><p className="eyebrow">HOW I WORK</p><h2>A simple process.<br/><span className="muted-heading">No unnecessary complexity.</span></h2><div className="process-grid"><div><span>01</span><h3>Understand</h3><p>We clarify your goals, audience, requirements and expected outcome.</p></div><div><span>02</span><h3>Plan & create</h3><p>I shape the direction, build the solution and share progress along the way.</p></div><div><span>03</span><h3>Refine & deliver</h3><p>We review the details, make agreed improvements and prepare the final handoff.</p></div></div></div></section>

        <section className="section-wrap section-block contact-section" id="contact"><div className="contact-layout"><div className="contact-copy"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let's make<br/><span className="accent">it happen.</span></h2><p>Tell me a little about what you're building. I'll get back to you to discuss the next steps.</p><a className="contact-email" href="mailto:jahan.ikramov@gmail.com">jahan.ikramov@gmail.com <ArrowUpRight size={17}/></a><div className="social-links"><a href="https://github.com/Jahan1414" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/zhakhonsha-ikramov-51166410b" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="https://t.me/JahanIkram" target="_blank" rel="noreferrer"><Send size={16}/> Telegram</a></div></div>
          <form className="inquiry-form" onSubmit={submitInquiry}><div className="form-title">PROJECT INQUIRY <span>— LET'S TALK</span></div><label>Your name<input name="name" placeholder="Name" required/></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label><div className="form-two"><label>I'm interested in<select name="service" defaultValue="Website Development"><option>Website Development</option><option>Marketplace Design</option><option>AI-Assisted Design</option><option>Video Editing</option><option>Multiple services</option><option>Something else</option></select></label><label>Estimated budget<select name="budget" defaultValue="Let's discuss"><option>Let's discuss</option><option>Under $100</option><option>$100–$300</option><option>$300–$700</option><option>$700+</option></select></label></div><label>Project details<textarea name="details" rows={4} placeholder="What would you like to create?" required/></label><button className="button button-primary submit-button" type="submit">Send project inquiry <ArrowUpRight size={17}/></button>{sent && <p className="form-note"><Check size={15}/> Your email app should open with the inquiry prepared. Please send it there.</p>}<p className="form-disclaimer">This form opens your email app. No information is stored on this website.</p></form>
        </div></section>
      </main>
      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">J.</span><span>JAHAN (Zhakhonsha)<span className="brand-muted"> / DIGITAL CREATOR</span></span></a><span>DESIGNED & BUILT WITH INTENTION.</span><a href="#top">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} JAHAN (ZHAKHONSHA) IKRAMOV</span></footer>
    </div>
  );
}
