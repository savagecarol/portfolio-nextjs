'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, cardHover } from '../lib/animations';
import { useScrollAnimation } from '../lib/useScrollAnimation';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const { ref, isInView } = useScrollAnimation();

  const skills = {
    frontend: [
      { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', level: 85, color: 'from-black to-gray-700' },
      { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-800' },
      { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-blue-500' },
      { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
    ],
    backend: [
      { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
      { name: 'Python', level: 75, color: 'from-blue-500 to-yellow-500' },
      { name: 'PostgreSQL', level: 70, color: 'from-blue-600 to-indigo-600' },
      { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-800' },
    ],
    tools: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-600' },
      { name: 'Docker', level: 70, color: 'from-blue-500 to-blue-700' },
      { name: 'AWS', level: 65, color: 'from-yellow-500 to-orange-500' },
      { name: 'Vercel', level: 85, color: 'from-black to-gray-700' },
      { name: 'Figma', level: 75, color: 'from-purple-500 to-pink-500' },
    ],
  };

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={fadeInUp}
        >
          <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
              variants={scaleIn}
              whileHover={cardHover}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <motion.div
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div 
          className="mt-16 text-center"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">
            Other Skills & Interests
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
            variants={staggerContainer}
          >
            {[
              'Responsive Design', 'REST APIs', 'GraphQL', 'Testing', 'CI/CD',
              'Performance Optimization', 'SEO', 'Accessibility', 'Agile/Scrum',
              'Problem Solving', 'Team Collaboration', 'Technical Writing'
            ].map((skill) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-md"
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Learning Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current with the latest trends and tools.
            Currently exploring new frameworks and methodologies to enhance my development skills.
          </p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
          >
            {['Rust', 'Web3', 'Machine Learning', 'Microservices'].map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                variants={scaleIn}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 