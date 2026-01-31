export default function UpdatesAndSafety() {
  const trustSignals = [
    {
      icon: '🛡️',
      title: 'Data Privacy Guaranteed',
      description: 'Your conversations are encrypted and never shared with third parties'
    },
    {
      icon: '🇮🇳',
      title: 'India-Specific Content',
      description: 'Tailored for DGS regulations, Indian shipping companies, and local procedures'
    },
    {
      icon: '✅',
      title: 'Verified Information',
      description: 'All guidance based on official DGS circulars and approved maritime standards'
    },
    {
      icon: '🔄',
      title: 'Regular Updates',
      description: 'Database updated with latest DGS notifications, company requirements, and industry news'
    }
  ];

  return (
    <section id="updates-safety" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Always Updated,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Always Secure 🛡️
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted companion built with Indian seafarers in mind
            </p>
          </div>

          {/* Trust signals grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100"
              >
                <div className="text-5xl flex-shrink-0">
                  {signal.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {signal.title}
                  </h3>
                  <p className="text-gray-600">
                    {signal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Latest updates section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                📢 Stay Ahead of the Curve
              </h3>
              <p className="text-lg mb-6 text-blue-50">
                Get instant updates on DGS notifications, exam schedule changes, new shipping line requirements, and maritime industry news — all in one place.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">Updated daily with latest maritime information</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
