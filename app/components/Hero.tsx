'use client';

import Link from 'next/link';
import { siteConfig } from '../config';

export default function Hero() {
    return (
          <>
            {/* Navigation Bar */}
                <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
                        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                                  <Link href="/" className="text-2xl font-bold text-white">
                                              <span className="text-red-600">Sailor</span>span>GPT
                                  </Link>Link>
                                  <div className="hidden md:flex gap-8">
                                              <a href="#knowledge" className="text-slate-300 hover:text-white transition">Knowledge</a>a>
                                              <a href="#how-it-helps" className="text-slate-300 hover:text-white transition">How It Helps</a>a>
                                              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>a>
                                  </div>div>
                                  <div className="flex gap-3">
                                              <a href="https://sailorsuccess.online" className="text-slate-300 hover:text-white text-sm transition">
                                                            Sailor Success
                                              </a>a>
                                              <a href={`https://wa.me/919958110235?text=Hi%20there%2C%20I%20have%20a%20question%20about%20SailorGPT`} 
                                                 className="text-slate-300 hover:text-white text-sm transition">
                                                            WhatsApp
                                              </a>a>
                                  </div>div>
                        </div>div>
                </nav>nav>
          
            {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>div>
                
                        <div className="container mx-auto px-6 relative z-10">
                                  <div className="max-w-4xl">
                                    {/* Badge */}
                                              <div className="inline-block mb-6 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
                                                            <span className="text-sm font-medium text-slate-300">Web Version Available Now • WhatsApp Coming Soon</span>span>
                                              </div>div>
                                  
                                    {/* Main Heading */}
                                              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                                            Your Maritime Mentor
                                              </h1>h1>
                                  
                                    {/* Subheading */}
                                              <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                                                            Get authoritative answers on DNS, INDOS, CDC, exam prep, and maritime career guidance. 
                                                            Built by officers, for seafarers.
                                              </p>p>
                                  
                                    {/* Trust Indicators */}
                                              <div className="flex flex-wrap gap-6 mb-10 text-sm text-slate-300">
                                                            <div className="flex items-center gap-2">
                                                                            <span className="text-green-500">✓</span>span>
                                                                            <span>DGS-Approved Guidance</span>span>
                                                            </div>div>
                                                            <div className="flex items-center gap-2">
                                                                            <span className="text-green-500">✓</span>span>
                                                                            <span>24/7 Availability</span>span>
                                                            </div>div>
                                                            <div className="flex items-center gap-2">
                                                                            <span className="text-green-500">✓</span>span>
                                                                            <span>100% Private</span>span>
                                                            </div>div>
                                              </div>div>
                                  
                                    {/* CTA Buttons */}
                                              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                                            <Link 
                                                                              href={siteConfig.cta.tryNowUrl}
                                                                              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300 text-center"
                                                                            >
                                                                            Access SailorGPT (Web Version)
                                                            </Link>Link>
                                                            <Link
                                                                              href={`https://wa.me/919958110235?text=Hi%20Chief%2C%20I%20have%20questions%20about%20SailorGPT`}
                                                                              className="inline-block px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition duration-300 text-center border border-slate-700"
                                                                            >
                                                                            Chat on WhatsApp
                                                            </Link>Link>
                                              </div>div>
                                  
                                    {/* Secondary CTA Text */}
                                              <p className="text-sm text-slate-400 mb-12">
                                                            WhatsApp version launching soon. Early users get priority access.
                                              </p>p>
                                  
                                    {/* Social Proof */}
                                              <p className="text-slate-400 flex items-center gap-2">
                                                            <span>👥</span>span>
                                                            <span>Trusted by Indian officers and maritime cadets</span>span>
                                              </p>p>
                                  </div>div>
                        </div>div>
                
                  {/* Bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>div>
                </section>section>
          </>>
        );
}</>
