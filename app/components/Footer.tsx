import Link from 'next/link';
import { siteConfig } from '../config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand column */}
            <div>
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">⚓</span>
                {siteConfig.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Your AI-powered mentor for Indian Merchant Navy success.
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-cyan-400">⚡</span> Available 24/7, even at 2 AM
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#capabilities" className="hover:text-cyan-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="hover:text-cyan-400 transition-colors">
                    Compare Plans
                  </a>
                </li>
                <li>
                  <Link href={siteConfig.cta.tryNowUrl} className="hover:text-cyan-400 transition-colors">
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
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    DGS Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Career Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Exam Prep Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
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
                  <a href="mailto:help@sailorsuccess.online" className="hover:text-cyan-400 transition-colors">
                    help@sailorsuccess.online
                  </a>
                </li>
                <li className="text-gray-400">
                  Support available 24/7
                </li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                  👥
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                  📧
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Sailor Success. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              🇮🇳 Proudly made for Indian seafarers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
