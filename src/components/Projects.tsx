'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, cardHover, buttonHover } from '../lib/animations';
import { useScrollAnimation } from '../lib/useScrollAnimation';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, isInView } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current weather, forecasts, and interactive maps with location-based services.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'A scalable REST API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.',
      image: '/api/placeholder/400/250',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, file sharing, and group chat functionality.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <motion.div 
        ref={ref}
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={fadeInUp}
        >
          <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
                variants={scaleIn}
                whileHover={cardHover}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-slate-400 dark:text-slate-500">🖼️</span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium"
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center py-2 px-4 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-700"
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 