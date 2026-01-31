import Link from 'next/link';
import { siteConfig } from '../config';

export default function TryNowCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 text-6xl animate-pulse">⚓</div>
        <div className="absolute bottom-20 right-20 text-6xl animate-bounce">🌊</div>
        <div className="absolute top-1/2 left-10 text-5xl animate-pulse delay-200">🚢</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Navigate Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Maritime Career? ⚓
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Join hundreds of seafarers who trust Sailor Success GPT for their career guidance.
            <br className="hidden md:block" />
            Start your journey today — completely free, no credit card required.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Instant setup</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🆓</span>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>100% secure</span>
            </div>
          </div>

          {/* CTA button */}
          <Link
            href={siteConfig.cta.tryNowUrl}
            className="group inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold text-xl px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="text-3xl">🚀</span>
            Try Sailor Success GPT Now
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>

          {/* Bottom note */}
          <p className="mt-8 text-blue-200 text-sm">
            Questions answered 24/7 • Even at 2 AM • Your AI maritime mentor
          </p>
        </div>
      </div>
    </section>
  );
}
