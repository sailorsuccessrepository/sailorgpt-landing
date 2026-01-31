import Link from 'next/link';
import { siteConfig } from '../config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-bounce">⚓</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse">🌊</div>
        <div className="absolute bottom-32 left-1/4 text-4xl animate-bounce delay-200">🚢</div>
        <div className="absolute top-60 right-1/3 text-5xl animate-pulse delay-300">⛵</div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-sm font-medium">Made for Indian Merchant Navy</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your AI Mentor for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Merchant Navy Success
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            ⚡ Get instant answers to DNS, INDOS, CDC, and career questions.
            <br className="hidden md:block" />
            🎯 Personalized guidance from your AI maritime mentor — available 24/7, even at 2 AM.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>DGS-approved syllabus</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>100% data privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Instant responses</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={siteConfig.cta.tryNowUrl}
              className="group relative inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="text-2xl">🚀</span>
              Try Now for FREE
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300"
            >
              <span className="text-xl">💎</span>
              View Plans
            </Link>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-blue-200 text-sm">
            <span className="text-xl">👥</span> Trusted by 500+ aspiring seafarers across India
          </p>
        </div>
      </div>

      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
