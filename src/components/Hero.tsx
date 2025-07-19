'use client';

import { useEffect, useState } from 'react';
import SocialIcons from './SocialIcons';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Environment variables for content
  const heroContent = {
    greeting: process.env.NEXT_PUBLIC_HERO_GREETING || "👋 Hello, I'm Kartikeya Sharma",
    title: process.env.NEXT_PUBLIC_HERO_TITLE || "Full Stack Engineer & Tech Educator",
    subtitle: process.env.NEXT_PUBLIC_HERO_SUBTITLE || "I'm a Full Stack Engineer who loves building scalable systems and teaching others how modern backend architecture really works.",
    desc1: process.env.NEXT_PUBLIC_HERO_DESC1 || "🔍 I break down complex topics like System Design, gRPC, Git, and API protocols into easy-to-understand videos with real code, handwritten notes, and practical examples.",
    desc2: process.env.NEXT_PUBLIC_HERO_DESC2 || "🎥 Tech Educator on YouTube (@savagecarol) with 100+ in-depth videos helping 1000s of devs upskill in engineering.",
    desc3: process.env.NEXT_PUBLIC_HERO_DESC3 || "🧠 Currently diving deep into AI & Machine Learning, exploring how intelligent systems work under the hood and how to apply them in real-world projects.",
    cta1: process.env.NEXT_PUBLIC_HERO_CTA1 || "🎥 Watch My Videos",
    cta2: process.env.NEXT_PUBLIC_HERO_CTA2 || "💬 Get In Touch",
    connectText: process.env.NEXT_PUBLIC_HERO_CONNECT || "Connect with me",
    stats: {
      stat1: {
        value: process.env.NEXT_PUBLIC_HERO_STAT1_VALUE || "Full Stack",
        label: process.env.NEXT_PUBLIC_HERO_STAT1_LABEL || "Engineer"
      },
      stat2: {
        value: process.env.NEXT_PUBLIC_HERO_STAT2_VALUE || "100+",
        label: process.env.NEXT_PUBLIC_HERO_STAT2_LABEL || "Tech Videos"
      },
      stat3: {
        value: process.env.NEXT_PUBLIC_HERO_STAT3_VALUE || "1000s",
        label: process.env.NEXT_PUBLIC_HERO_STAT3_LABEL || "Devs Helped"
      },
      stat4: {
        value: process.env.NEXT_PUBLIC_HERO_STAT4_VALUE || "AI/ML",
        label: process.env.NEXT_PUBLIC_HERO_STAT4_LABEL || "Focus Area"
      }
    }
  };

  // Split title for styling
  const titleParts = heroContent.title.split('&');

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white pt-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Main Content */}
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Greeting */}
            <div className="mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-orange-primary text-white rounded-full shadow-lg">
                <span className="font-semibold text-lg">
                  {heroContent.greeting}
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                {titleParts[0]?.trim()}
                <span className="block text-orange-primary">{titleParts[1]?.trim()}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl text-black/70 font-medium leading-relaxed max-w-4xl mx-auto">
                {heroContent.subtitle}
              </h2>
            </div>

            {/* Description */}
            <div className="mb-12">
              <div className="text-lg text-black/60 leading-relaxed max-w-4xl mx-auto space-y-4">
                <p>{heroContent.desc1}</p>
                <p>{heroContent.desc2}</p>
                <p>{heroContent.desc3}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('youtube')}
                className="px-8 py-4 bg-orange-primary text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Watch my YouTube videos"
              >
                {heroContent.cta1}
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-gray-300 text-black font-semibold rounded-xl hover:bg-gray-50 hover:border-orange-primary transition-all duration-300 transform hover:scale-105"
                aria-label="Contact me for projects or collaboration"
              >
                {heroContent.cta2}
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center items-center space-x-8 md:space-x-12 mb-16">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-primary mb-1">{heroContent.stats.stat1.value}</div>
                <div className="text-sm text-black/60">{heroContent.stats.stat1.label}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-primary mb-1">{heroContent.stats.stat2.value}</div>
                <div className="text-sm text-black/60">{heroContent.stats.stat2.label}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-primary mb-1">{heroContent.stats.stat3.value}</div>
                <div className="text-sm text-black/60">{heroContent.stats.stat3.label}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{heroContent.stats.stat4.value}</div>
                <div className="text-sm text-black/60">{heroContent.stats.stat4.label}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-black mb-4">{heroContent.connectText}</h3>
              <SocialIcons variant="hero" className="justify-center" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 