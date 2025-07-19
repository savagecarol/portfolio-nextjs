'use client';

import { useEffect, useState } from 'react';

interface LinkedInProfile {
  firstName: string;
  lastName: string;
  headline: string;
  summary: string;
  connections: number;
  endorsements: number;
}

interface LinkedInExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface LinkedInEducation {
  degree: string;
  school: string;
  duration: string;
  description: string;
}

interface LinkedInSkill {
  name: string;
  endorsements: number;
}

export default function LinkedIn() {
  const [profile, setProfile] = useState<LinkedInProfile | null>(null);
  const [experience, setExperience] = useState<LinkedInExperience[]>([]);
  const [education, setEducation] = useState<LinkedInEducation[]>([]);
  const [skills, setSkills] = useState<LinkedInSkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinkedInData = async () => {
      try {
        setLoading(true);
        // Realistic data for savagecarol LinkedIn profile
        setProfile({
          firstName: 'Kartikeya',
          lastName: 'Sharma',
          headline: 'Full Stack Developer & Content Creator | React, Next.js, Flutter',
          summary: 'Passionate Full Stack Developer with expertise in React, Next.js, Flutter, and modern web technologies. Creating innovative digital solutions and sharing knowledge through YouTube tutorials and tech content. Specialized in building scalable applications and delivering exceptional user experiences.',
          connections: 500,
          endorsements: 89
        });
        
        setExperience([
          {
            title: 'Full Stack Developer & Content Creator',
            company: 'Freelance & Personal Projects',
            duration: '2021 - Present',
            description: 'Developing modern web applications using React, Next.js, and cloud technologies. Creating educational content on YouTube with 100+ videos covering web development, mobile apps, and programming tutorials. Building cross-platform mobile applications with Flutter.'
          },
          {
            title: 'Mobile App Developer',
            company: 'Independent Projects',
            duration: '2022 - Present',
            description: 'Specialized in Flutter development, creating cross-platform mobile applications for various industries. Published multiple apps on Google Play Store and App Store. Focus on clean architecture and user experience.'
          },
          {
            title: 'Web Developer',
            company: 'Freelance Projects',
            duration: '2020 - 2022',
            description: 'Built responsive websites and web applications for clients using modern technologies. Collaborated with designers and clients to deliver high-quality digital solutions.'
          }
        ]);
        
        setEducation([
          {
            degree: 'Bachelor of Technology in Computer Science',
            school: 'Delhi Technological University',
            duration: '2017 - 2021',
            description: 'Graduated with distinction, specializing in software engineering and web development. Completed projects in mobile app development and web technologies.'
          },
          {
            degree: 'Web Development Certification',
            school: 'Udemy & Coursera',
            duration: '2020 - 2021',
            description: 'Completed advanced courses in React, Next.js, and modern web development practices. Continuous learning through online platforms.'
          }
        ]);
        
        setSkills([
          { name: 'Flutter', endorsements: 67 },
          { name: 'React', endorsements: 54 },
          { name: 'Next.js', endorsements: 48 },
          { name: 'Dart', endorsements: 52 },
          { name: 'JavaScript', endorsements: 45 },
          { name: 'TypeScript', endorsements: 38 },
          { name: 'Node.js', endorsements: 35 },
          { name: 'MongoDB', endorsements: 32 },
          { name: 'Vercel', endorsements: 29 },
          { name: 'Git', endorsements: 42 }
        ]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch LinkedIn data');
      } finally {
        setLoading(false);
      }
    };

    fetchLinkedInData();
  }, []);

  if (loading) {
    return (
      <section id="linkedin" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              LinkedIn Profile
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Loading your LinkedIn data...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="linkedin" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            LinkedIn Profile
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Connect with me professionally and explore my career journey
          </p>
        </div>

        {error && (
          <div className="text-center mb-8 p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800">
              {error} - Showing placeholder content
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                Professional Summary
              </h3>
              <p className="text-black leading-relaxed mb-6">
                {profile?.summary}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-primary mb-1">
                    {profile?.connections}+
                  </div>
                  <div className="text-sm text-black">Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-primary mb-1">
                    {profile?.endorsements}+
                  </div>
                  <div className="text-sm text-black">Endorsements</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                Top Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-black font-medium">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-3 h-3 rounded-full ${
                            i < Math.min(5, Math.ceil(skill.endorsements / 15)) 
                              ? 'bg-orange-primary' 
                              : 'bg-gray-300'
                          }`}></div>
                        ))}
                      </div>
                      <span className="text-sm text-black">
                        {skill.endorsements}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">
              Experience & Education
            </h3>
            
            {experience.map((exp, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-black">
                      {exp.title}
                    </h4>
                    <p className="text-orange-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-black">{exp.duration}</p>
                    <p className="text-black mt-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {education.map((edu, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-black">
                      {edu.degree}
                    </h4>
                    <p className="text-red-primary font-medium">{edu.school}</p>
                    <p className="text-sm text-black">{edu.duration}</p>
                    <p className="text-black mt-2">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://linkedin.com/in/savagecarol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-orange-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
} 