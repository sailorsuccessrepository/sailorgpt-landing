export default function Comparison() {
  const features = [
    { name: 'Daily question limit', free: '10 questions', lite: 'Unlimited', pro: 'Unlimited' },
    { name: 'DNS/INDOS guidance', free: 'Basic', lite: 'Advanced', pro: 'Advanced' },
    { name: 'Exam preparation', free: '❌', lite: '✅', pro: '✅' },
    { name: 'Career guidance', free: 'General', lite: 'Personalized', pro: 'Personalized' },
    { name: 'Response priority', free: 'Standard', lite: 'Priority', pro: 'Highest' },
    { name: 'DGS notifications', free: '❌', lite: '✅', pro: '✅' },
    { name: 'Shipping company database', free: '❌', lite: '✅', pro: '✅' },
    { name: 'Interview prep', free: '❌', lite: '❌', pro: '✅' },
    { name: 'Resume review', free: '❌', lite: '❌', pro: '✅' },
    { name: 'Salary guidance', free: '❌', lite: '❌', pro: '✅' },
    { name: 'Expert consultation', free: '❌', lite: '❌', pro: '✅ Monthly' },
    { name: 'Job placement help', free: '❌', lite: '❌', pro: '✅' }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compare Plans
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Find Your Perfect Fit ⚖️
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly what's included in each plan
            </p>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <th className="p-4 text-left font-bold">Feature</th>
                  <th className="p-4 text-center font-bold">Free</th>
                  <th className="p-4 text-center font-bold bg-cyan-700">
                    <div className="flex items-center justify-center gap-2">
                      <span>Lite</span>
                      <span className="text-xl">⭐</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-blue-50 transition-colors`}
                  >
                    <td className="p-4 font-medium text-gray-900">{feature.name}</td>
                    <td className="p-4 text-center text-gray-700">{feature.free}</td>
                    <td className="p-4 text-center font-semibold text-cyan-600 bg-cyan-50">
                      {feature.lite}
                    </td>
                    <td className="p-4 text-center text-gray-700">{feature.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              <span className="text-xl">💡</span> Still unsure? Start with Free and upgrade anytime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
