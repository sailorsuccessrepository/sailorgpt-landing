export default function KnowledgeHub() {
    const knowledgeAreas = [
      {
              icon: '📚',
              title: 'Technical Learning',
              description: 'Engine room systems, deck operations, COLREGS, SOLAS compliance',
              link: 'https://sailorsuccess.online/learn/',
              cta: 'Explore 200+ Articles'
      },
      {
              icon: '🎓',
              title: 'Career Guidance',
              description: 'IMU CET prep, deck/engine officer pathways, real salary data',
              link: 'https://sailorsuccess.online/careers/',
              cta: 'View 150+ Career Guides'
      },
      {
              icon: '💰',
              title: 'Financial Planning',
              description: 'NRE accounts, seafarer taxes, smart investments, emergency funds',
              link: 'https://sailorsuccess.online/money/',
              cta: 'Access 50+ Resources'
      },
      {
              icon: '⚖️',
              title: 'Legal & Rights',
              description: 'Contract protection, harassment handling, legal support at sea',
              link: 'https://sailorsuccess.online/rights/',
              cta: 'Read 75+ Articles'
      },
      {
              icon: '🔧',
              title: 'Maritime Tools',
              description: 'Resume templates, interview prep, salary calculators, readiness quiz',
              link: 'https://sailorsuccess.online/tools/',
              cta: 'Try 20+ Tools'
      },
      {
              icon: '🤝',
              title: 'Community & Support',
              description: 'Connect with fellow seafarers, get mentorship, share experiences',
              link: '#support',
              cta: 'Join the Community'
      }
        ];

  return (
        <section id="knowledge" className="py-20 bg-slate-900">
              <div className="container mx-auto px-6">
                      <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                                <div className="text-center mb-16">
                                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                                          The Sailor Success Knowledge Web
                                            </h2>h2>
                                            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                                                          SailorGPT connects you to our comprehensive knowledge base. Explore thousands of articles, guides, and tools—all built by Indian maritime officers.
                                            </p>p>
                                </div>div>
                      
                        {/* Knowledge Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {knowledgeAreas.map((area, index) => (
                        <a
                                          key={index}
                                          href={area.link}
                                          target={area.link.startsWith('http') ? '_blank' : undefined}
                                          rel={area.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                          className="group bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-red-600 hover:bg-slate-800 transition duration-300 transform hover:scale-105"
                                        >
                                        <div className="text-4xl mb-4">{area.icon}</div>div>
                                        <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>h3>
                                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                          {area.description}
                                        </p>p>
                                        <button className="text-red-600 font-semibold text-sm hover:text-red-500 transition">
                                          {area.cta} →
                                        </button>button>
                        </a>a>
                      ))}
                                </div>div>
                      
                        {/* Engagement Note */}
                                <div className="mt-16 bg-slate-800/30 border border-slate-700 rounded-lg p-8 text-center">
                                            <p className="text-slate-300 mb-4">
                                                          <span className="text-lg">🎯</span>span> Whether you're preparing for exams, navigating a career decision, or facing a maritime challenge—our knowledge base has answers.
                                            </p>p>
                                            <p className="text-slate-400 text-sm">
                                                          Still unsure about SailorGPT? <a href="#support" className="text-red-600 hover:text-red-500 font-semibold">Chat with our team on WhatsApp</a>a>—we're here to help.
                                            </p>p>
                                </div>div>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
