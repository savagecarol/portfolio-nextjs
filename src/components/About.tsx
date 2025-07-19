export default function About() {
  // Environment variables for content
  const aboutContent = {
    title: process.env.NEXT_PUBLIC_ABOUT_TITLE || "About Me",
    subtitle: process.env.NEXT_PUBLIC_ABOUT_SUBTITLE || "Get to know me better and understand my journey in the world of technology",
    whoIAm: {
      title: process.env.NEXT_PUBLIC_ABOUT_WHO_TITLE || "Who I Am",
      desc1: process.env.NEXT_PUBLIC_ABOUT_WHO_DESC1 || "I'm a Full Stack Engineer who loves building scalable systems and teaching others how modern backend architecture really works. My passion lies in breaking down complex technical concepts into digestible, practical knowledge.",
      desc2: process.env.NEXT_PUBLIC_ABOUT_WHO_DESC2 || "Currently, I'm diving deep into AI & Machine Learning to understand how intelligent systems work under the hood and how to apply them in real-world projects."
    },
    whatIDo: {
      title: process.env.NEXT_PUBLIC_ABOUT_WHAT_TITLE || "What I Do",
      items: [
        process.env.NEXT_PUBLIC_ABOUT_WHAT_ITEM1 || "Build scalable systems and modern backend architecture",
        process.env.NEXT_PUBLIC_ABOUT_WHAT_ITEM2 || "Create educational content on System Design, gRPC, Git, and API protocols",
        process.env.NEXT_PUBLIC_ABOUT_WHAT_ITEM3 || "Help 1000s of developers upskill through 100+ in-depth YouTube tutorials",
        process.env.NEXT_PUBLIC_ABOUT_WHAT_ITEM4 || "Explore AI & Machine Learning for real-world applications"
      ]
    },
    approach: {
      title: process.env.NEXT_PUBLIC_ABOUT_APPROACH_TITLE || "My Approach",
      description: process.env.NEXT_PUBLIC_ABOUT_APPROACH_DESC || "I believe in breaking down complex topics into simple, actionable knowledge. Every video I create includes real code examples, handwritten notes, and practical applications. My goal is to help developers understand not just the \"how\" but the \"why\" behind modern backend architecture."
    },
    stats: {
      stat1: {
        value: process.env.NEXT_PUBLIC_ABOUT_STAT1_VALUE || "Full Stack",
        label: process.env.NEXT_PUBLIC_ABOUT_STAT1_LABEL || "Engineer"
      },
      stat2: {
        value: process.env.NEXT_PUBLIC_ABOUT_STAT2_VALUE || "100+",
        label: process.env.NEXT_PUBLIC_ABOUT_STAT2_LABEL || "Tech Videos"
      },
      stat3: {
        value: process.env.NEXT_PUBLIC_ABOUT_STAT3_VALUE || "1000s",
        label: process.env.NEXT_PUBLIC_ABOUT_STAT3_LABEL || "Devs Helped"
      },
      stat4: {
        value: process.env.NEXT_PUBLIC_ABOUT_STAT4_VALUE || "AI/ML",
        label: process.env.NEXT_PUBLIC_ABOUT_STAT4_LABEL || "Focus Area"
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            {aboutContent.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {aboutContent.subtitle}
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
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{aboutContent.stats.stat1.value}</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{aboutContent.stats.stat1.label}</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{aboutContent.stats.stat2.value}</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{aboutContent.stats.stat2.label}</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{aboutContent.stats.stat3.value}</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{aboutContent.stats.stat3.label}</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{aboutContent.stats.stat4.value}</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{aboutContent.stats.stat4.label}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                {aboutContent.whoIAm.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {aboutContent.whoIAm.desc1}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {aboutContent.whoIAm.desc2}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                {aboutContent.whatIDo.title}
              </h3>
              <div className="space-y-4">
                {aboutContent.whatIDo.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-purple-500' : 
                      index === 2 ? 'bg-green-500' : 'bg-orange-500'
                    }`}></div>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                {aboutContent.approach.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {aboutContent.approach.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 