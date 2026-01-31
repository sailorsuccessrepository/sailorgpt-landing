import Link from 'next/link';
import { siteConfig } from '../config';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      icon: '🌊',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for exploring and trying out',
      features: [
        '10 questions per day',
        'Basic DNS/INDOS guidance',
        'General career advice',
        'Community support'
      ],
      cta: 'Try Now for FREE',
      url: siteConfig.pricing.free.purchaseUrl,
      popular: false
    },
    {
      name: 'Lite',
      icon: '⚡',
      price: '₹99',
      period: 'per month',
      description: 'Most popular for aspiring seafarers',
      features: [
        'Unlimited questions',
        'Advanced exam preparation',
        'Personalized career guidance',
        'Priority response time',
        'DGS notification alerts',
        'Shipping company database access'
      ],
      cta: 'Get Started',
      url: siteConfig.pricing.lite.purchaseUrl,
      popular: true
    },
    {
      name: 'Pro',
      icon: '💎',
      price: '₹199',
      period: 'per month',
      description: 'For serious career advancement',
      features: [
        'Everything in Lite',
        'Interview preparation',
        'Resume review & optimization',
        'Salary negotiation guidance',
        '1-on-1 expert consultation (monthly)',
        'Job placement assistance',
        'Lifetime updates'
      ],
      cta: 'Go Pro',
      url: siteConfig.pricing.pro.purchaseUrl,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Pricing for Everyone 💸
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free, upgrade anytime. No hidden fees, cancel whenever you want.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-cyan-500 shadow-cyan-500/20 scale-105'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 text-lg flex-shrink-0">✔</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.url}
                  className={`block text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="text-center">
            <p className="text-gray-600">
              <span className="text-xl">🔒</span> All plans include data privacy protection and regular updates
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Payments processed securely via Graphy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
