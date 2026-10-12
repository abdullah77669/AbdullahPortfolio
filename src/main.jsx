import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Database, ShieldCheck, Smartphone, Layers3, Terminal,
  BriefcaseBusiness, GraduationCap, ExternalLink, Check, Copy, CloudSun, Sparkles
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Abdullah Mazhar',
  role: 'Software Engineer',
  location: 'Lahore, Pakistan',
  email: 'abdullahmazhar389@gmail.com',
  github: 'https://github.com/abdullah77661',
  linkedin: 'https://www.linkedin.com/',
};

const projects = [
  {
    number: '01',
    name: 'Library Management API',
    category: 'Backend · Data modelling',
    description: 'A library workflow API for librarian and student roles, supporting book-loan management and the core operations needed to track borrowed books.',
    stack: ['C#', '.NET', 'SQL', 'REST API'],
    icon: Database,
    art: 'library',
    github: 'https://github.com/abdullah77661',
    accent: 'purple',
  },
  {
    number: '02',
    name: 'AI Weather Advisor',
    category: 'JavaScript · APIs · Generative AI',
    description: 'A JavaScript weather app that lets users search for any city and view current conditions from the OpenWeather API. It then sends the weather response to Gemini to generate practical, context-aware advice.',
    stack: ['JavaScript', 'OpenWeather API', 'Gemini API'],
    icon: CloudSun,
    art: 'weather',
    github: 'https://github.com/abdullah77661',
    accent: 'blue',
  },
];

const skills = [
  { title: 'Backend development', detail: 'C# · .NET · REST APIs', icon: Code2 },
  { title: 'Data & persistence', detail: 'SQL · Database design · Queries', icon: Database },
  { title: 'Application security', detail: 'JWT authentication · Protected routes', icon: ShieldCheck },
  { title: 'Frontend & mobile', detail: 'React · Flutter · UI implementation', icon: Smartphone },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Abdullah Mazhar home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">abdullah<span>.dev</span></span>
        </a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-divider">/</span> {profile.location.toUpperCase()}</div>
            <h1>Building software<br />that <span className="gradient-text">works for people.</span></h1>
            <p className="hero-description">
              I’m Abdullah, a software engineer focused on backend development, .NET APIs, and building practical, dependable applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} /></a>
              <span className="social-separator" />
              <span className="mono muted">01 / INTRODUCTION</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative code editor illustration">
            <div className="editor-window">
              <div className="editor-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span className="editor-file"><Code2 size={13} /> developer.cs</span>
                <span className="editor-menu">•••</span>
              </div>
              <div className="editor-body">
                <div className="line-numbers">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08<br/>09<br/>10<br/>11</div>
                <pre><span className="syntax-purple">public class</span> <span className="syntax-green">Developer</span>
{'{'}
  <span className="syntax-purple">public string</span> Name =&gt;
    <span className="syntax-orange">"Abdullah Mazhar"</span>;

  <span className="syntax-purple">public string</span> Focus =&gt;
    <span className="syntax-orange">"Backend & APIs"</span>;

  <span className="syntax-purple">public bool</span> KeepLearning =&gt;
    <span className="syntax-blue">true</span>;
{'}'}</pre>
              </div>
              <div className="editor-footer"><span><span className="footer-dot" /> Ready to build</span><span>UTF-8&nbsp;&nbsp; C#</span></div>
            </div>
            <div className="floating-card card-api"><span className="floating-icon"><Terminal size={16} /></span><span><b>API first</b><small>Thoughtful backend work</small></span></div>
            <div className="floating-card card-secure"><span className="floating-icon green-icon"><ShieldCheck size={16} /></span><span><b>Built with care</b><small>Clear, maintainable code</small></span></div>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          </div>
          <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="work-section section-wrap section-block" id="work">
          <div className="section-heading">
            <div><span className="section-index">01 — SELECTED WORK</span><h2>Projects with a purpose.</h2></div>
            <p>A few examples of the problems I’ve worked on, from secure API flows to application interfaces.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-card-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-icon"><Icon size={20} /></span></div>
                <div className="project-art">
                  {project.art === 'library' ? <div className="library-art"><div className="book book-a" /><div className="book book-b" /><div className="book book-c" /><div className="book book-d" /><div className="book-base" /></div> :
                   project.art === 'weather' ? <div className="weather-art"><div className="weather-topline"><span className="weather-dot" /> CURRENT WEATHER <span className="weather-search">⌕</span></div><div className="weather-main"><CloudSun size={34} /><div><strong>24°</strong><span>Partly cloudy</span></div></div><div className="weather-city">Lahore, PK <span>Feels like 26°</span></div><div className="ai-advice"><Sparkles size={12} /><span><b>Gemini advice</b><small>Take water with you and enjoy the mild weather.</small></span></div></div> :
                   <div className="mobile-art"><div className="phone-frame"><div className="phone-speaker" /><div className="phone-screen"><span /><span /><span /><i /></div></div><div className="mobile-bubble"><Layers3 size={19} /></div></div>}
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>
                </div>
              </article>;
            })}
          </div>
          <div className="github-callout"><div className="github-callout-icon"><Github size={21} /></div><div><b>More code, fewer buzzwords.</b><p>Browse my repositories and follow what I’m building next.</p></div><a href={profile.github} target="_blank" rel="noreferrer" className="text-link">Visit GitHub <ArrowRight size={16} /></a></div>
        </section>

        <section className="about-section section-wrap section-block" id="about">
          <div className="about-layout">
            <div className="about-title"><span className="section-index">02 — A LITTLE ABOUT ME</span><h2>Curious by nature.<br/><span className="muted-heading">Engineer by practice.</span></h2></div>
            <div className="about-copy"><p className="about-lead">I enjoy turning requirements into software that is useful, understandable, and built to last.</p><p>My work has included .NET backend development, REST API design, database queries, authentication flows, and application development. I like understanding how the pieces fit together—not just making something run, but making it easier to maintain and extend.</p><p>I’m always looking to learn from real projects, collaborate with thoughtful teams, and take on challenges that make me a better engineer.</p><div className="about-signoff"><span className="signature">Abdullah</span><span className="mono muted">LEARNING. BUILDING. IMPROVING.</span></div></div>
          </div>
        </section>

        <section className="skills-section section-wrap section-block" id="skills">
          <div className="section-heading"><div><span className="section-index">03 — TOOLKIT</span><h2>What I work with.</h2></div><p>A practical toolkit for building and connecting software. This list reflects the areas I’ve worked with and continue to develop.</p></div>
          <div className="skills-grid">
            {skills.map((skill, i) => { const Icon = skill.icon; return <div className="skill-item" key={skill.title}><span className="skill-icon"><Icon size={19} /></span><div><h3>{skill.title}</h3><p>{skill.detail}</p></div><span className="skill-index">0{i+1}</span></div> })}
          </div>
          <div className="tech-strip"><span className="mono">ALSO FAMILIAR WITH</span><div>{['Java / Spring Boot','Postman','Git','Flutter','SQL','Unity'].map(item => <span key={item}>{item}</span>)}</div></div>
        </section>

        <section className="experience-section section-wrap section-block" id="experience">
          <div className="section-heading"><div><span className="section-index">04 — EXPERIENCE & EDUCATION</span><h2>Learning by doing.</h2></div><p>Experience across software development, internships, and formal software engineering education.</p></div>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-main"><div className="timeline-title"><h3>Software Engineer — .NET</h3><span className="timeline-type">PROFESSIONAL EXPERIENCE</span></div><p>Working on software development with a focus on .NET and backend application work. Add your employer, dates, and concrete responsibilities here before publishing.</p></div><span className="timeline-date">CURRENT</span></div>
            <div className="timeline-item"><div className="timeline-marker"><Code2 size={17}/></div><div className="timeline-main"><div className="timeline-title"><h3>Software development internships</h3><span className="timeline-type">INTERNSHIPS</span></div><p>Worked across Java Spring Boot REST APIs, API testing with Postman, SQL/database tasks, Flutter interfaces, and debugging Unity-based Android game logic.</p></div><span className="timeline-date">EARLIER</span></div>
            <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17}/></div><div className="timeline-main"><div className="timeline-title"><h3>BSc Software Engineering</h3><span className="timeline-type">EDUCATION</span></div><p>University of Engineering and Technology (UET), Lahore, Pakistan.</p></div><span className="timeline-date">UET LAHORE</span></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel"><div className="contact-glow" /><span className="section-index">05 — HAVE A PROJECT IN MIND?</span><h2>Let’s make something<br/><span className="gradient-text">worth using.</span></h2><p>I’m open to software engineering roles, remote opportunities, and freelance projects. If you have something interesting in mind, I’d love to hear about it.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={16}/></a><button className="button button-secondary copy-button" onClick={copyEmail}>{copied ? <Check size={16}/> : <Copy size={15}/>} {copied ? 'Email copied' : 'Copy email'}</button></div><div className="contact-bottom"><span className="mono">BASED IN LAHORE · WORKING GLOBALLY</span><div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a></div></div></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">abdullah<span>.dev</span></span></a><span>Designed with intention. Built with React.</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13}/></a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);