/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUpRight, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Resume', id: 'resume' },
];

const experiences = [
  {
    company: 'Image Sensing Systems ISS',
    role: 'Full Stack Web Developer',
    period: '2023 — Present',
    description: 'Developed Supervisor web application and Autoscope Analytics using React with TS, Redux, Tanstack, and Tailwind CSS. Implemented serverless Lambda functions (Node JS) along with ECR and ECS for backend solutions. Optimized PostgreSQL databases.',
    skills: ['React', 'TypeScript', 'Redux', 'Tanstack', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS'],
    link: 'https://www.autoscopeanalytics.com/'
  },
  {
    company: 'Bosch Limited',
    role: 'Full Stack Web Developer',
    period: '2021 — 2022',
    description: 'Developed Integrated Energy Platform with React JS and TypeScript. Managed state with Redux and used Tanstack Query. Built Express JS backend on AWS. Ensured data integrity with PostgreSQL.',
    skills: ['React JS', 'TypeScript', 'Redux', 'Tanstack Query', 'Express JS', 'Node.js', 'PostgreSQL', 'AWS'],
    link: '#'
  }
];

const projects = [
  {
    title: 'Sprinta',
    description: 'A comprehensive Project Management Tool with Supabase for Database and Auth. Features workspaces, projects, tasks, subtasks with media upload, Generative AI integration, and multiple views like list and Kanban. Includes user comments and activity tracking.',
    skills: ['React', 'Supabase', 'Generative AI', 'Kanban', 'Real-time'],
    link: '#'
  },
  {
    title: 'Autoscope Analytics',
    description: 'Leverages industry-leading detection technologies to generate new data insights. Built with a focus on performance and real-time data visualization.',
    skills: ['React', 'Data Visualization', 'Analytics', 'Enterprise'],
    link: 'https://www.autoscopeanalytics.com/'
  },
  {
    title: 'Supervisor Web Application',
    description: 'A web-based version of the flagship desktop application for Intelligent Transportation Systems (ITS). Features comprehensive camera device management with listing, traffic monitoring, and real-time event detection for identifying wrong-way drivers and near-miss incidents. Developed to provide actionable data insights for improving roadway safety and traffic efficiency.',
    skills: ['React', 'ITS', 'Traffic Monitoring', 'Real-time Data'],
    link: 'https://www.imagesensing.com/about.html'
  }
];

const skills = [
  'React JS', 'Next JS', 'TypeScript', 'Node.js', 'Express JS', 
  'REST API', 'Python', 'PostgreSQL', 'Prisma', 'AWS', 
  'Docker', 'Figma', 'React Native'
];

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-teal-300/30 selection:text-teal-300 leading-relaxed antialiased">
      {/* Background Glow Simulation */}
      <div 
        className="fixed inset-0 z-30 transition duration-300 pointer-events-none lg:bg-[radial-gradient(600px_at_var(--mouse-x)_var(--mouse-y),rgba(29,78,216,0.15),transparent_80%)]"
        style={{
          //@ts-expect-error custom properties are not natively supported in React.CSSProperties
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Left Column: Header & Nav */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Hari Prasanth K</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Full Stack Web Developer
              </h2>
              <p className="mt-4 max-w-xs leading-relaxed">
                I build accessible, inclusive, and performant digital experiences for the web.
              </p>
              
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a 
                        className={cn(
                          "group flex items-center py-3 transition-all",
                          activeSection === item.id ? "active" : ""
                        )} 
                        href={`#${item.id}`}
                      >
                        <span className={cn(
                          "mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200",
                          activeSection === item.id ? "w-16 bg-slate-200" : ""
                        )}></span>
                        <span className={cn(
                          "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                          activeSection === item.id ? "text-slate-200" : ""
                        )}>
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <li>
                <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="https://github.com/Hariprasanth-HP" target="_blank" rel="noreferrer">
                  <span className="sr-only">GitHub</span>
                  <Github size={24} strokeWidth={1.5} />
                </a>
              </li>
              <li>
                <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="https://linkedin.com/in/hari-prasanth-k-02097b1b4" target="_blank" rel="noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
              </li>
              <li>
                <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="mailto:hari16205@gmail.com">
                  <span className="sr-only">Email</span>
                  <Mail size={24} strokeWidth={1.5} />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Column: Main Content */}
          <motion.main 
            id="content" 
            className="pt-24 lg:w-1/2 lg:py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4">
                  I'm a Full Web Stack Developer with over 3.5 years of experience specialized in building high-performance web applications using <span className="font-medium text-slate-200 underline decoration-teal-300 underline-offset-4">React</span>, <span className="font-medium text-slate-200 underline decoration-teal-300 underline-offset-4">TypeScript</span>, and <span className="font-medium text-slate-200 underline decoration-teal-300 underline-offset-4">Node.js</span>.
                </p>
                <p className="mb-4">
                  My journey in tech has been driven by a passion for solving complex problems and creating seamless user experiences. At <span className="text-slate-200">Image Sensing Systems</span>, I've led the development of critical analytics tools, transitioning from frontend interfaces to scalable backend solutions on <span className="text-slate-200">AWS</span>.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the latest in cloud architecture, contributing to open-source, or refining my skills in PostgreSQL and system design.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {experiences.map((exp) => (
                    <li key={`${exp.company}-${exp.role}`} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{exp.period}</header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                             <div>
                              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={exp.link} target="_blank" rel="noreferrer" aria-label={`${exp.role} at ${exp.company}`}>
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{exp.role} · <span className="inline-block">{exp.company}<ArrowUpRight size={16} className="inline-block ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></span></span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                          <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                            {exp.skills.map((skill) => (
                              <li key={skill} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-12">
                  <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group" href="/resume.pdf">
                    <span>View Full Resume</span>
                    <ArrowUpRight size={18} className="ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {projects.map((project) => (
                    <li key={project.title} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                           <h3>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={project.link} target="_blank" rel="noreferrer" aria-label={project.title}>
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{project.title}<ArrowUpRight size={16} className="inline-block ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">{project.description}</p>
                          <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                            {project.skills.map((skill) => (
                              <li key={skill} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="z-10 sm:order-1 sm:col-span-2">
                          <div className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 w-full aspect-video bg-slate-800 flex items-center justify-center text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                            Project Preview
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
              </div>
              <div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Rajalakshmi+Engineering+College" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      >
                        <span>Rajalakshmi Engineering College</span>
                        <ArrowUpRight size={16} className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </a>
                    </h3>
                    <p className="text-sm text-slate-400">Bachelor of Engineering (EEE)</p>
                    <p className="text-xs text-slate-500 mt-1">Chennai, India</p>
                  </div>
                </div>
                
                <h4 className="mt-12 text-sm font-bold uppercase tracking-widest text-slate-200">Technical Skills</h4>
                <ul className="mt-4 flex flex-wrap">
                  {skills.map((skill) => (
                    <li key={skill} className="mr-1.5 mt-2">
                       <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Resume Section */}
            <section id="resume" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Resume">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Resume</h2>
              </div>
              <div className="max-w-md">
                <p className="mb-6 text-sm text-slate-400">
                  Check my resume to view or download my full employment history, educational background, and a comprehensive list of my technical skills and certifications.
                </p>
                <div className="group relative rounded-xl border border-slate-200/10 bg-slate-800/50 p-6 transition-all hover:border-slate-200/30">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 rounded-full bg-teal-400/10 p-4 text-teal-300">
                      <FileText size={32} />
                    </div>
                    <h3 className="mb-2 text-lg font-medium text-slate-200">Hari Prasanth Résumé</h3>
                    <p className="mb-6 text-xs text-slate-500 uppercase tracking-widest">PDF Format • 1.2 MB</p>
                    
                    <div className="flex gap-4">
                      <a 
                        href={`${import.meta.env.BASE_URL}resume.pdf`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-teal-300 hover:text-teal-900"
                      >
                        View External
                        <ArrowUpRight size={16} className="ml-1" />
                      </a>
                      <a 
                        href={`${import.meta.env.BASE_URL}resume.pdf`} 
                        download
                        className="inline-flex items-center rounded-md border border-slate-200/30 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-200 hover:text-slate-900"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                  
                  {/* PDF Viewer Placeholder/Embed */}
                  <div className="mt-8 overflow-hidden rounded-lg border border-slate-200/10 bg-[#0f172a]">
                    <div className="flex items-center justify-between bg-slate-800/50 px-3 py-2 border-b border-slate-200/10">
                      <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                      </div>
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Resume Preview</span>
                    </div>
                    <div className="aspect-[1/1.4] w-full border-none relative">
                      <iframe 
                        src={`${import.meta.env.BASE_URL}resume.pdf#toolbar=0&navpanes=0&scrollbar=1`} 
                        className="w-full h-full border-none rounded-b-lg absolute inset-0"
                        title="Resume Preview"
                      >
                        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                          <p className="text-sm text-slate-400 mb-4">PDF Preview is not supported in this environment.</p>
                          <a 
                            href={`${import.meta.env.BASE_URL}resume.pdf`} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-teal-300 hover:underline text-xs"
                          >
                            Click here to view it in a new tab
                          </a>
                        </div>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            
          </motion.main>
        </div>
      </div>
    </div>
  );
}
