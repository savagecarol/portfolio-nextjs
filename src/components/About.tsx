export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know me better and understand my journey in the world of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-slate-400 dark:text-slate-500">👨‍💻</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Full Stack</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">Engineer</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">Tech Videos</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1000s</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">Devs Helped</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">AI/ML</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">Focus Area</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I&apos;m a Full Stack Engineer who loves building scalable systems and teaching others how modern backend architecture really works. 
                My passion lies in breaking down complex technical concepts into digestible, practical knowledge.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently, I&apos;m diving deep into AI & Machine Learning to understand how intelligent systems work under the hood and how to apply them in real-world projects.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Build scalable systems and modern backend architecture
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Create educational content on System Design, gRPC, Git, and API protocols
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Help 1000s of developers upskill through 100+ in-depth YouTube tutorials
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Explore AI & Machine Learning for real-world applications
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                My Approach
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I believe in breaking down complex topics into simple, actionable knowledge. Every video I create 
                includes real code examples, handwritten notes, and practical applications. My goal is to help 
                developers understand not just the &quot;how&quot; but the &quot;why&quot; behind modern backend architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 