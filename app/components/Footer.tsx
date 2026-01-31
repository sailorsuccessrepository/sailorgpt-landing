import Link from 'next/link';
import { siteConfig } from '../config';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                {siteConfig.name}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Your AI-powered mentor for Indian Merchant Navy success.
              </p>
              <p className="text-sm text-cyan-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Available 24/7, even at 2 AM
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#capabilities" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Compare Plans
                  </a>
                </li>
                <li>
                  <Link href={siteConfig.cta.tryNowUrl} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Try Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    DGS Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Career Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Exam Prep
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:help@sailorsuccess.online" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    help@sailorsuccess.online
                  </a>
                </li>
                <li className="text-slate-400">
                  Support available 24/7
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-slate-400">
                © {new Date().getFullYear()} Sailor Success. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            <p className="text-center text-slate-500 text-xs mt-4">
              🇮🇳 Proudly made for Indian seafarers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
