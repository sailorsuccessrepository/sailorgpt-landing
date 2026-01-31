export default function Capabilities() {
  const features = [
    {
      icon: '📝',
      title: 'DNS, INDOS & CDC Guidance',
      description: 'Get instant answers about documentation, application processes, and renewal procedures'
    },
    {
      icon: '📚',
      title: 'Exam Preparation',
      description: 'Study smart with DGS-approved syllabus coverage, practice questions, and concept explanations'
    },
    {
      icon: '🧭',
      title: 'Career Navigation',
      description: 'From cadet to captain — get personalized advice on ranks, certifications, and career paths'
    },
    {
      icon: '🕒',
      title: '24/7 Availability',
      description: 'Your AI mentor never sleeps. Ask questions at 2 AM or on holidays — always get instant help'
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Adaptive responses based on your experience level, from aspiring cadets to senior officers'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your questions and conversations stay 100% private. No data sharing, ever.'
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Succeed at Sea 🌊
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your comprehensive AI-powered companion for Indian Merchant Navy success
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-4">
              <span className="text-2xl">✨</span> And much more! Shipping line info, visa guidance, salary benchmarks, and daily maritime updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
