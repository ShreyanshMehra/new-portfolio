import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X } from 'lucide-react';
import './index.css';
import docaiIMG from './assets/docai.png';
import hpIMG from './assets/HP.png';
import sbiIMG from './assets/sbi.png';
import sqlIMG from './assets/sq;.png';
import churnIMG from './assets/churn.png';
import prf from './assets/prf.jpg';

const RESUME_URL = 'https://drive.google.com/uc?export=download&id=1VWau6jbTt_ORxOK5zW2f8nqhShGJp3eh';

/* ---------------- Reveal-on-scroll wrapper ---------------- */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
};

/* ---------------- Icons ---------------- */
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.45-2.7 5.42-5.27 5.71.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .31.21.67.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
  </svg>
);
const LeetcodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.48 23.4c-.98.98-2.28 1.5-3.66 1.46-1.38-.03-2.66-.6-3.6-1.6L2.4 19.2c-1.94-2.06-1.9-5.3.1-7.3l6.9-6.9c.98-.98 2.28-1.5 3.66-1.46 1.38.03 2.66.6 3.6 1.6l1.5 1.6a1.13 1.13 0 0 1-.06 1.6 1.13 1.13 0 0 1-1.6-.06l-1.5-1.6c-.5-.53-1.16-.84-1.88-.86-.72-.02-1.4.25-1.92.76l-6.9 6.9c-1.02 1.02-1.05 2.7-.06 3.76l3.82 4.06c.5.53 1.16.84 1.88.86.72.02 1.4-.25 1.92-.76l2.9-2.9a1.13 1.13 0 0 1 1.6 1.6l-2.9 2.9zM23.2 13.5H10.9a1.13 1.13 0 0 1 0-2.26h12.3a1.13 1.13 0 0 1 0 2.26z"/>
  </svg>
);

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ShreyanshMehra', icon: <GithubIcon /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shreyansh-dutt-mehra-a97316282/', icon: <LinkedinIcon /> },
  { name: 'LeetCode', href: 'https://leetcode.com/u/shreyanshduttmehra/', icon: <LeetcodeIcon /> },
];

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
];

/* ---------------- Logo: a blocky pixel "S" monogram ---------------- */
const PIXEL_S_CELLS = [
  [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 0],
  [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
  [3, 4],
  [4, 0], [4, 1], [4, 2], [4, 3], [4, 4],
];

const Logo = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100" fill="none" aria-label="Shreyansh Mehra logo">
    {PIXEL_S_CELLS.map(([row, col]) => (
      <rect key={`${row}-${col}`} x={col * 20} y={row * 20} width="18" height="18" fill="white" />
    ))}
  </svg>
);

/* ---------------- Hero animated background (no video asset; generated instead) ---------------- */
const HeroBackground = () => (
  <div className="absolute inset-0 h-full w-full overflow-hidden bg-black">
    <div className="absolute top-[-15%] left-[-10%] w-[36rem] h-[36rem] bg-white/[0.06] rounded-full blur-3xl animate-blob" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[32rem] h-[32rem] bg-white/[0.05] rounded-full blur-3xl animate-blob [animation-delay:3s]" />
    <div className="absolute top-[30%] right-[15%] w-[20rem] h-[20rem] bg-white/[0.04] rounded-full blur-3xl animate-blob [animation-delay:6s]" />
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
  </div>
);

/* ---------------- Mobile fullscreen menu ---------------- */
const MobileMenu = ({ open, onClose }) => (
  <div
    className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className="flex items-center justify-between px-6 py-6">
      <Logo />
      <button onClick={onClose} aria-label="Close menu" className="p-2 hover:opacity-70 transition-opacity">
        <X size={24} />
      </button>
    </div>
    <nav className="flex flex-col items-center justify-center flex-1 gap-8">
      {NAV_LINKS.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClose}
          style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
          className={`text-2xl tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-70 ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  </div>
);

/* ---------------- Hero section ---------------- */
const achievementChips = [
  { title: 'JEE ADV', sub: 'Qualified' },
  { title: 'AS GRADE', sub: 'Top 2-3%' },
  { title: 'NTSE', sub: 'Stage 1' },
];

const focusAreas = [
  'Agentic Systems',
  'Backend & Infra',
  'Developer Tooling',
  'CRDTs & Distributed Systems',
  'ML & Data Pipelines',
  'Policy & Governance',
];

const HeroSection = ({ onMenuOpen }) => (
  <section className="relative h-screen w-full overflow-hidden bg-black text-white">
    <HeroBackground />
    <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
      {/* Navbar */}
      <div className="flex items-center justify-between py-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:opacity-70 transition-opacity">
              {link.label}
            </a>
          ))}
        </nav>
        <button onClick={onMenuOpen} className="md:hidden p-2 hover:opacity-70 transition-opacity" aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Meta grid */}
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <div>
          <h2 className="text-lg md:text-xl tracking-wide leading-tight">
            <span className="font-normal block">SHREYANSH</span>
            <span className="font-pixel text-2xl md:text-3xl block">MEHRA</span>
          </h2>
          <p className="text-[10px] text-white/50 mt-3">*</p>
          <p className="font-pixel mt-1 text-xs text-white/60 leading-relaxed">
            IIT Guwahati '27 —<br />
            Software Engineer Intern<br />
            at Microsoft, building<br />
            agentic developer tools
          </p>
        </div>

        <div className="text-right lg:text-left">
          <h2 className="text-lg md:text-xl tracking-wide leading-tight">
            <span className="font-normal block">SOFTWARE &</span>
            <span className="font-pixel text-2xl md:text-3xl block">SYSTEMS</span>
          </h2>
        </div>

        <div>
          <p className="text-base tracking-widest text-white/50 uppercase mb-3 font-pixel">What I Do</p>
          <p className="text-sm text-white/90 leading-relaxed max-w-[220px]">
            I build agentic pipelines, developer tooling, and backend systems that hold up under real constraints
          </p>
        </div>

        <div className="text-right lg:text-left">
          <p className="text-base tracking-widest text-white/50 uppercase mb-3 font-pixel">Focus Areas</p>
          <ul className="text-sm text-white/90 leading-relaxed space-y-0.5">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1" />

      {/* Bottom block */}
      <div className="pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal"
            style={{ lineHeight: 0.72 }}
          >
            I BUILD<br />
            <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline">RELIABLE</span> SYSTEMS FOR<br />
            AGENTS & DEVELOPER<br />
            <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline">TOOLING</span>
          </h1>

          <div className="flex flex-col gap-4 sm:gap-6 justify-end">
            <a
              href={RESUME_URL}
              className="self-start flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Download size={14} />
              <span className="text-sm tracking-wider">VIEW RESUME</span>
            </a>

            <div className="self-start lg:self-end flex flex-wrap items-stretch gap-2 sm:gap-3 text-sm text-white/80">
              {achievementChips.map((chip) => (
                <div key={chip.title} className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex flex-col justify-center">
                  <span className="font-bold text-sm sm:text-base tracking-tight">{chip.title}</span>
                  <span className="text-white/50 text-[10px] sm:text-xs">{chip.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4 border-t border-white/10">
          <p className="text-xs text-white/60">
            Open to SWE internships &amp; full-time opportunities.{' '}
            <a href="mailto:shreyanshduttmehra@gmail.com" className="text-red-500 hover:text-red-400 transition-colors">
              Email me
            </a>
          </p>
          <p className="text-xs text-white/60 sm:text-right">
            4 featured projects &bull; Microsoft SWE Intern &bull; IIT Guwahati '27
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Sticky nav (appears once hero is scrolled past) ---------------- */
const StickyNav = ({ visible, onMenuOpen }) => (
  <header
    className={`fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-black/80 border-b border-white/10 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}
  >
    <div className="px-5 sm:px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between">
      <Logo size={22} />
      <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="hover:opacity-70 transition-opacity">
            {link.label}
          </a>
        ))}
      </nav>
      <button onClick={onMenuOpen} className="md:hidden p-2 hover:opacity-70 transition-opacity" aria-label="Open menu">
        <Menu size={22} />
      </button>
    </div>
  </header>
);

/* ---------------- About section ---------------- */
const skillGroups = [
  { label: 'Languages', skills: ['Python', 'Go', 'C/C++', 'JavaScript', 'SQL'] },
  { label: 'Backend & Infra', skills: ['FastAPI', 'Docker', 'PostgreSQL', 'WebSockets', 'REST APIs', 'OPA/Rego', 'pytest', 'Git'] },
  { label: 'ML & Data', skills: ['PyTorch', 'Scikit-learn', 'XGBoost', 'Prophet', 'LangChain/LangGraph', 'ChromaDB', 'NumPy', 'Pandas'] },
];

const AboutSection = () => (
  <section id="about" className="px-5 sm:px-6 md:px-10 lg:px-14 py-24 border-t border-white/10">
    <div className="max-w-4xl mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0 animate-float">
            <div className="absolute -inset-1 rounded-full bg-white/10 blur" />
            <img src={prf} alt="Profile" className="relative w-full h-full object-cover rounded-full border-4 border-black" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-pixel text-white/50 text-xs mb-2">About</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">Shreyansh Dutt Mehra</h2>
            <p className="text-lg md:text-xl text-white/70 mb-6">
              Software Engineer Intern @ Microsoft &middot; IIT Guwahati
            </p>
            <p className="text-white/60 mb-6 max-w-lg leading-relaxed">
              I build agentic systems, developer tooling, and backend infrastructure — from an
              LLM-driven bug-remediation pipeline at Microsoft to a hand-rolled CRDT for real-time
              collaborative editing. I like taking things apart (a CRDT, Git's object store) to
              understand them well enough to rebuild them, and pairing deterministic engineering
              with LLM judgment where it actually helps.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-white/60 hover:text-white transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="bg-white/[0.03] border border-white/10 p-6 rounded-xl hover:border-white/20 transition-colors">
            <ul className="space-y-4 text-white/70">
              <li className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <strong className="text-white">Indian Institute of Technology, Guwahati</strong>
                  <div className="text-white/50">B.Tech Major &middot; 2023 – Present</div>
                </div>
                <div className="text-right md:text-left">CGPA: 8.3/10</div>
              </li>
              <li className="flex flex-col md:flex-row md:justify-between text-sm text-white/50 border-t border-white/10 pt-3">
                <div>Senior Secondary &middot; CBSE Board &middot; 2023</div>
                <div>95.2%</div>
              </li>
              <li className="flex flex-col md:flex-row md:justify-between text-sm text-white/50">
                <div>Secondary &middot; CBSE Board &middot; 2021</div>
                <div>94.6%</div>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="bg-white/[0.03] border border-white/10 p-6 rounded-xl space-y-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div className="text-xs uppercase tracking-wider text-white/40 mb-2 font-pixel">{group.label}</div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 text-white/90 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:scale-105 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------------- Experience ---------------- */
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Microsoft',
      duration: 'May 2026 – Present',
      location: 'Hyderabad, India',
      description: [
        'Architected a gated, end-to-end agentic pipeline that autonomously remediates objectively-fixable UI bugs using a knowledge corpus of engineering and design standards, designed to resolve ~10% of the team’s total bug volume as extensible infrastructure for new defect types.',
        'Built a developer plugin that auto-enforces standardized design-system tokens in place of hardcoded/legacy style values, cutting recurring UI/UX inconsistencies across Microsoft’s enterprise Copilot Chat experience.',
        'Developed an AI-agent triage skill that auto-classifies UI bugs across quality categories (alignment/layout/color) and severity levels (token/variant/CSS) and determines auto-fixability, isolating deterministic, objectively-fixable defects.',
      ],
      techStack: ['Agentic Pipelines', 'LLMs', 'Developer Tooling', 'Design Systems'],
    },
    {
      title: 'Summer Research Intern',
      company: 'IDEAS-TIH @ ISI Kolkata',
      duration: 'May 2025 – Jul 2025',
      location: 'Remote',
      description: [
        'Developed a machine learning pipeline to forecast crop yield using 20+ years of real-world environmental and reservoir data, achieving a test R² score of 0.84.',
        'Predicted rainfall, temperature, and reservoir levels using Prophet; used these forecasts as inputs to an ensemble of regression models to estimate 2023 yield.',
      ],
      techStack: ['Python', 'Scikit-learn', 'Prophet', 'Time Series Forecasting'],
    },
    {
      title: 'Data Analyst Intern',
      company: 'NoQS Digital',
      duration: 'May 2024 – Jun 2024',
      location: 'Remote',
      description: [
        'Automated employee email workflows in JavaScript (data extraction + personalized messaging) and built Excel/Power BI dashboards to streamline operational reporting.',
      ],
      techStack: ['JavaScript', 'Automation', 'Power BI', 'Excel'],
    },
  ];

  return (
    <section id="experience" className="px-5 sm:px-6 md:px-10 lg:px-14 py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Experience</h2>
        </Reveal>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="relative border-l-2 border-white/20 pl-6 pb-2 group">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] group-hover:scale-125 transition-transform" />
                <h3 className="text-2xl font-bold">{exp.company}</h3>
                <p className="text-sm text-white/50 mt-0.5">{exp.title} &middot; {exp.duration} &middot; {exp.location}</p>
                <ul className="mt-2 space-y-1.5 text-white/70 list-disc list-outside ml-4">
                  {exp.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-white/80 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Projects ---------------- */
const CodeBracketsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const featuredProjects = [
  {
    title: 'MandateGuard',
    subtitle: 'Governance Layer for Financial AI Agents',
    icon: <ShieldIcon />,
    description:
      'A permit-gated action broker (FastAPI + OPA/Rego + PostgreSQL) enforcing authenticated, policy-checked, budget-bounded agent actions. Every action is verified via signed receipts and a hash-chained audit log, validated with 11 deterministic adversarial scenarios (bypass, replay, tamper).',
    link: 'https://github.com/ShreyanshMehra/MandateGuard',
    tags: ['FastAPI', 'OPA/Rego', 'PostgreSQL', 'Security'],
  },
  {
    title: 'cocode',
    subtitle: 'Collaborative Real-Time Code Editor',
    icon: <UsersIcon />,
    description:
      'A hand-implemented causal-tree/RGA sequence CRDT (no CRDT libraries) letting concurrent edits from multiple clients converge without server-side locking. WebSocket rooms with presence, content-addressed snapshot versioning, and a CodeMirror 6 frontend with live remote cursors.',
    link: 'https://github.com/ShreyanshMehra/cocode',
    demo: 'https://shreyansh112-cocode.hf.space',
    tags: ['Go', 'CRDT', 'WebSockets', 'Docker'],
  },
  {
    title: 'gitfromscratch',
    subtitle: 'A Minimal Git Implementation in Go',
    icon: <TerminalIcon />,
    description:
      'Reimplements Git’s core internals — a content-addressed object store, staging index, refs, branches, diffs, and a basic merge — to show exactly how Git works under the hood. Objects use SHA-1 + zlib, so hashes match real git for the same content; every command is tested and verified against real git.',
    link: 'https://github.com/ShreyanshMehra/gitfromscratch',
    tags: ['Go', 'Systems Programming', 'Git Internals'],
  },
  {
    title: 'CV Align Agents',
    subtitle: 'Multi-Agent Resume Screening',
    icon: <CodeBracketsIcon />,
    description:
      'A multi-agent pipeline (LangGraph + Gemini: parser → matcher → deterministic scorer → hygiene checker → critic) with a confidence-gated self-correction loop, separating deterministic scoring/hygiene rules from LLM judgment calls. Shipped with 68 offline tests and a provider-abstracted FastAPI backend.',
    link: 'https://github.com/ShreyanshMehra/CV-Align-Agents',
    demo: 'https://shreyansh112-cv-align-agents.hf.space/',
    tags: ['LangGraph', 'Gemini', 'FastAPI', 'RAG'],
  },
];

const moreProjects = [
  {
    title: 'TechDocs Assistant',
    description: 'A local RAG assistant answering questions from technical documents using semantic search. LangChain for orchestration, ChromaDB for vector storage, MiniLM for embeddings.',
    image: docaiIMG,
    link: 'https://github.com/ShreyanshMehra/DocQuery-Assistant',
    tags: ['LangChain', 'RAG', 'NLP', 'Embeddings'],
  },
  {
    title: 'Holiday Package Purchase Prediction',
    description: 'Classification model predicting which employees are likely to buy a holiday package. Ensemble ML (XGBoost, Random Forest) with hyperparameter tuning, ~91% AUC.',
    image: hpIMG,
    link: 'https://github.com/ShreyanshMehra/Holiday-Package-Prediction',
    tags: ['Machine Learning', 'XGBoost'],
  },
  {
    title: 'Inventory Analytics: Urban Retail Co.',
    description: 'SQL + Power BI inventory analytics system identifying stock inefficiencies, reorder points, and demand patterns for data-driven inventory decisions.',
    image: sqlIMG,
    link: 'https://github.com/ShreyanshMehra/inventory_forcasting',
    tags: ['SQL', 'Power BI', 'Data Analysis'],
  },
  {
    title: 'Customer Churn Prediction',
    description: 'An ANN predicting customer churn from geography, credit score, and balance. Trained with TensorFlow/Keras, deployed as a real-time Streamlit app.',
    image: churnIMG,
    link: 'https://github.com/ShreyanshMehra/ANN-Classification-churn',
    tags: ['Deep Learning', 'Deployment'],
  },
  {
    title: 'SBI Fraud Detection',
    description: 'ML/DL models to detect fraud and localize defaulters using anonymized financial and location data, tuned for noisy, imbalanced data.',
    image: sbiIMG,
    link: 'https://github.com/ShreyanshMehra/SBI-Fraud-Detection',
    tags: ['Deep Learning', 'Machine Learning'],
  },
];

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="px-5 sm:px-6 md:px-10 lg:px-14 py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-white/50 mb-8">Systems, agents, and backend infrastructure I've built end to end.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <div className="group relative h-full bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                <div className="h-24 flex items-center px-6 bg-white/[0.04] border-b border-white/10">
                  <div className="text-white/90 group-hover:scale-110 transition-transform">{project.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-white/60">{project.subtitle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/60 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 text-white/70 text-xs rounded border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white hover:text-white/70 font-medium">
                      <GithubIcon /> Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white font-medium">
                        <ExternalLinkIcon /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-12">
            <button
              onClick={() => setShowMore((v) => !v)}
              className="flex items-center gap-2 text-lg font-semibold text-white/80 hover:text-white transition-colors"
            >
              {showMore ? 'Hide' : 'Show'} More Projects
              <span className={`transition-transform ${showMore ? 'rotate-180' : ''}`}>▾</span>
            </button>
          </div>
        </Reveal>

        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {moreProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 60}>
                <div className="bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-all">
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/60 mb-3 text-sm">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-sm">
                        View Project
                      </a>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-white/5 text-white/60 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------------- Achievements & Certifications ---------------- */
const AchievementsSection = () => {
  const achievements = [
    { title: "'AS' Grade — Top ~2–3 per 100 in Batch", description: 'Awarded the exceptional ‘AS’ distinction in an advanced engineering mathematics course.' },
    { title: 'Qualified JEE Advanced', description: "Cleared India's most competitive engineering entrance exam, among top candidates nationwide." },
    { title: 'Cleared NTSE Stage 1', description: 'Qualified for National Talent Search Examination Stage 2, among top students at the state level.' },
  ];

  const certifications = [
    {
      title: 'Introduction to Retrieval-Augmented Generation (RAG)',
      issuer: 'Duke University (Coursera)',
      date: 'May 2025',
      link: 'https://drive.google.com/uc?export=download&id=1LIDyECQSf-rMTDMiSuinwmRJeZOX3zgd',
    },
    {
      title: 'Data Science Projects Bootcamp',
      issuer: 'Krish Naik (Udemy)',
      date: 'June 2025',
      link: 'https://drive.google.com/uc?export=download&id=1E8CB3sSAOHbBrXa0Olne0dKO4BCtRT6p',
    },
    {
      title: 'Solving Inventory Inefficiencies Using SQL',
      issuer: 'C&A IITG Summer Projects ’25',
      date: 'June 2025',
      link: 'https://drive.google.com/uc?export=download&id=1tDCSr_GeTrszmVt-tACu3thj_oo7GyyD',
    },
  ];

  return (
    <section id="achievements" className="px-5 sm:px-6 md:px-10 lg:px-14 py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Achievements &amp; Certifications</h2>
        </Reveal>

        <div className="space-y-10">
          <div>
            <Reveal><h3 className="text-xl font-semibold mb-4">Achievements</h3></Reveal>
            <div className="space-y-4">
              {achievements.map((a, index) => (
                <Reveal key={index} delay={index * 80}>
                  <div className="border-l-2 border-white/20 pl-4 py-1 hover:bg-white/[0.03] rounded-r-lg transition-colors">
                    <h4 className="font-medium">{a.title}</h4>
                    <p className="mt-1 text-white/50">{a.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal><h3 className="text-xl font-semibold mb-4">Certifications</h3></Reveal>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Reveal key={index} delay={index * 80}>
                  <div className="border-l-2 border-white/20 pl-4 py-1 hover:bg-white/[0.03] rounded-r-lg transition-colors">
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-white/50">{cert.issuer} • {cert.date}</p>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white hover:underline">
                        View Certificate
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Contact / Footer ---------------- */
const ContactSection = () => (
  <section id="contact" className="px-5 sm:px-6 md:px-10 lg:px-14 py-24 border-t border-white/10">
    <div className="max-w-4xl mx-auto text-center">
      <Reveal>
        <p className="font-pixel text-white/50 text-xs mb-3">Get in touch</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Let's build something.</h2>
        <p className="text-white/60 max-w-lg mx-auto mb-8">
          Open to SWE internships and full-time roles. Reach out by email or find me on GitHub, LinkedIn, or LeetCode.
        </p>
        <a
          href="mailto:shreyanshduttmehra@gmail.com"
          className="inline-block px-6 py-3 border border-white/30 bg-white/5 hover:bg-white/10 transition-colors text-sm tracking-wider"
        >
          shreyanshduttmehra@gmail.com
        </a>
        <div className="flex items-center justify-center gap-6 mt-8">
          {socialLinks.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-white/60 hover:text-white transition-colors">
              {s.icon}
            </a>
          ))}
        </div>
      </Reveal>
    </div>
    <div className="mt-16 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
      © {new Date().getFullYear()} Shreyansh Dutt Mehra
    </div>
  </section>
);

/* ---------------- App ---------------- */
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyNav(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-white/20">
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <StickyNav visible={showStickyNav} onMenuOpen={() => setMenuOpen(true)} />
      <div ref={heroRef}>
        <HeroSection onMenuOpen={() => setMenuOpen(true)} />
      </div>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default App;
