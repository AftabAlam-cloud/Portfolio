import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Server, Download, ExternalLink, Calendar, Award, Star, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, icon: <Code className="w-6 h-6" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 85, icon: <Globe className="w-6 h-6" />, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', level: 80, icon: <Server className="w-6 h-6" />, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', level: 75, icon: <Database className="w-6 h-6" />, color: 'from-green-500 to-teal-500' },
    { name: 'Python', level: 85, icon: <Code className="w-6 h-6" />, color: 'from-blue-400 to-indigo-500' },
    { name: 'MySQL', level: 80, icon: <Database className="w-6 h-6" />, color: 'from-orange-400 to-red-500' },
    { name: 'JAVA', level: 75, icon: <Code className="w-6 h-6" />, color: 'from-red-500 to-yellow-500' },
    { name: 'HTML/CSS', level: 90, icon: <Code className="w-6 h-6" />, color: 'from-pink-400 to-yellow-400' },
    { name: 'UX Designer', level: 80, icon: <Sparkles className="w-6 h-6" />, color: 'from-purple-400 to-pink-500' }
  ];

  const projects = [
    {
      title: "Bank Management System",
      description: "A comprehensive banking management application built in JAVA, featuring account management, transactions, and reporting.",
      tech: ["JAVA"],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-green-500 via-blue-500 to-purple-500"
    },
    {
      title: "Tic Tac Toe",
      description: "A classic Tic Tac Toe game developed using Java and XML for Android, supporting two players and a simple UI.",
      tech: ["Java", "XML"],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500"
    },
    {
      title: "Chatting App",
      description: "A real-time chatting application built with Flutter, supporting group and private messaging with a modern interface.",
      tech: ["Flutter"],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500"
    },
    {
      title: "Stop Watch",
      description: "A simple and intuitive stopwatch application with start, stop, and reset functionalities.",
      tech: ["JavaScript", "React"],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-purple-400 via-pink-400 to-red-400"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Galgotias University",
      year: "2022-2025",
      grade: "8.1 CGPA",
      highlights: ["Data Structures & Algorithms", "Database Management", "Web Development", "Software Engineering", "UI/UX Design", "Devops Engineering", "JAVA", "Python", "HTML/CSS", "MySQL", "Flutter", "Android Development", "Git", "GitHub", "Figma", "Generative AI", "Windows", "Linux"]
    }
  ];

  const ScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Mouse follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-2xl border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse mr-auto">
              Aftab Alam
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => ScrollToSection(item)}
                    className={`capitalize relative group transition-all duration-300 ${
                      activeSection === item ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                      activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-teal-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-emerald-300 rounded-full animate-spin"></div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center min-h-screen text-center">
          {/* Side by Side Layout */}
          <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile Image */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative group w-full h-[500px] lg:h-full">
                <img src="/Aftab b.png"
                  alt="Aftab Alam"
                  className="w-full h-full object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-left lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-sm font-medium mb-6 animate-fadeInUp">
                <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
                Available for Work
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Aftab Alam
                </span>
              </h1>
              
              <div className="space-y-4 mb-8 animate-fadeInUp animation-delay-500">
                <p className="text-2xl md:text-3xl font-semibold text-gray-200">
                  <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
                    BCA Graduate
                  </span>
                  {' & '}
                  <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">
                    Full Stack Developer
                  </span>
                  {' & '}
                  <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">
                    Freelancer
                  </span>
                  {' & '}
                  <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                    Java Developer
                  </span>
                </p>
                <p className="text-lg text-gray-300 max-w-2xl">
                As a highly motivated and IT graduate in many field
 in IT . I am also a UI/UX designer and now learning
 Devops Engineering. So I am looking for an
 opportunities to explore my knowledge and
 Experience. I am strongly able to do such thing like
 Understand , Define , Design, Evaluate, Team
 Leading, Problem Solving , Analytical Skills, Web
 design, Learning new things, My goal is to gain
 hands-on experience and further develop my
 abilities in solving real-world challenges with
 creative and effective solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-1000">
                <button
                  onClick={() => ScrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  <span className="mr-2">View My Work</span>
                  <ExternalLink className="w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 animate-fadeInUp animation-delay-1500">
                <a href="https://github.com/AftabAlam-cloud" target="_blank" rel="noopener noreferrer" className="group p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm">
                  <Github className="w-6 h-6 group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/uxaftab/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" className="group p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm">
                  <Linkedin className="w-6 h-6 group-hover:text-white" />
                </a>
                <a href="mailto:uxaftab@gmail.com" className="group p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm">
                  <Mail className="w-6 h-6 group-hover:text-white" />
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Hello! I'm Aftab Alam
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A dedicated BCA graduate with a passion for technology and innovation. I specialize in 
                full-stack web development, creating responsive and user-friendly applications that solve 
                real-world problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in computer applications has equipped me with strong analytical thinking, 
                problem-solving skills, and a deep understanding of software development principles. 
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-500/30">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Deoria, UP, India</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-purple-500/30">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>BCA Graduate</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl text-center hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-3">5+</div>
                <div className="text-gray-300 font-medium">Projects Completed</div>
              </div>
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 p-8 rounded-2xl text-center hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text mb-3">3+</div>
                <div className="text-gray-300 font-medium">Years Learning</div>
              </div>
              <div className="group bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur-sm border border-green-500/20 p-8 rounded-2xl text-center hover:from-green-500/20 hover:to-cyan-500/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text mb-3">6+</div>
                <div className="text-gray-300 font-medium">Technologies</div>
              </div>
              <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 p-8 rounded-2xl text-center hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-3">100%</div>
                <div className="text-gray-300 font-medium">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="relative">
                  <div className="w-full bg-slate-700/50 rounded-full h-4 mb-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Proficiency</span>
                    <span className={`font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Technologies Section */}
      <section id="tools" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tools and Technologies
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool: Git */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-400 to-yellow-500 text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Git</h3>
            </div>
            {/* Tool: GitHub */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-gray-500/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-gray-700 to-black text-white">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">GitHub</h3>
            </div>
            {/* Tool: Visual Studio Code */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-500 text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Visual Studio Code</h3>
            </div>
            {/* Tool: MS Office */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">MS Office</h3>
            </div>
            {/* Tool: Adobe XD */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Adobe XD</h3>
            </div>
            {/* Tool: Figma */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Figma</h3>
            </div>
            {/* Tool: Generative AI */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Generative AI</h3>
            </div>
            {/* Tool: Windows */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-400 to-blue-700 text-white">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Windows</h3>
            </div>
            {/* Tool: Linux */}
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-gray-700 text-white">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Linux</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transform hover:scale-105 transition-all duration-500">
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 group/link">
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a href={project.live} className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition-all duration-300 group/link">
                      <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Award className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-4">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        {edu.year}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 text-green-400 rounded-full font-semibold text-sm">
                        {edu.grade}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certification
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-6 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Award className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="list-disc pl-6 space-y-3 text-lg text-gray-200">
                    <li>UI/UX designer <span className="text-cyan-400">(Coursera, Google)</span></li>
                    <li>Generative AI <span className="text-cyan-400">(Upgrade)</span></li>
                    <li>Training and development <span className="text-cyan-400">(NPTL)</span></li>
                    <li>Artificial Intelligence and fundamentals <span className="text-cyan-400">(IBM)</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="group flex items-center gap-4 p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-cyan-400">Email</div>
                      <div className="text-gray-300">uxaftab@gmail.com</div>
                    </div>
                  </div>
                  <div className="group flex items-center gap-4 p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-green-500/50 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-green-400">Phone</div>
                      <div className="text-gray-300">+91 7310008925</div>
                    </div>
                  </div>
                  <div className="group flex items-center gap-4 p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-red-500/50 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-red-400">Location</div>
                      <div className="text-gray-300">Deoria, Uttar Pradesh, India - 274405</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/AftabAlam-cloud" target="_blank" rel="noopener noreferrer" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                    <Github className="w-6 h-6 group-hover:text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/uxaftab/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-6 h-6 group-hover:text-white" />
                  </a>
                  <a href="mailto:uxaftab@gmail.com" target="_blank" rel="noopener noreferrer" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                    <Mail className="w-6 h-6 group-hover:text-white" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                  Send a Message
                </h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                      className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formEmail}
                      onChange={e => setFormEmail(e.target.value)}
                      className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      value={formMessage}
                      onChange={e => setFormMessage(e.target.value)}
                      className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors resize-none backdrop-blur-sm"
                    ></textarea>
                  </div>
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent('Portfolio Contact from ' + formName);
                      const body = encodeURIComponent(
                        `Name: ${formName}\nEmail: ${formEmail}\n\n${formMessage}`
                      );
                      window.location.href = `mailto:uxaftab@gmail.com?subject=${subject}&body=${body}`;
                    }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 space-y-2">
            <p className="text-lg">&copy; 2025 Aftab Alam. All rights reserved.</p>
            <p className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
      `}</style>
    </div>
  );
};

export default Portfolio;