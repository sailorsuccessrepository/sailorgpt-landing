'use client';
import Link from 'next/link';
import { siteConfig } from '../config';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for exploring',
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
      price: '₹99',
      period: 'per month',
      description: 'Most popular choice',
      features: [
        'Unlimited questions',
        'Advanced exam preparation',
        'Personalized career guidance',
        'Priority response time',
        'DGS notification alerts',
        'Shipping company database'
      ],
      cta: 'Get Started',
      url: siteConfig.pricing.lite.purchaseUrl,
      popular: true
    },
    {
      name: 'Pro',
      price: '₹199',
      period: 'per month',
      description: 'For serious advancement',
      features: [
        'Everything in Lite',
        'Interview preparation',
        'Resume review',
        'Salary negotiation',
        '1-on-1 expert consultation',
        'Job placement assistance',
        'Lifetime updates'
      ],
      cta: 'Go Pro',
      url: siteConfig.pricing.pro.purchaseUrl,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent
              <span className="block text-gradient mt-2">Pricing for Everyone</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Start free, upgrade anytime. No hidden fees, cancel whenever.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'scale-105 border-2 border-cyan-500'
                    : 'hover:border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.url}
                  className={`block text-center font-bold py-3 px-6 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white glow-cyan'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="text-center">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              All plans include data privacy protection and regular updates
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Payments processed securely via Graphy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
