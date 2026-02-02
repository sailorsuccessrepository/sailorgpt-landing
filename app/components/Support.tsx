export default function Support() {
    const whatsappNumber = '919958110235';
    const whatsappMessage = encodeURIComponent(
          'Hi! I have questions about SailorGPT and would like to understand how it can help me with my maritime career.'
        );

  return (
        <section id="support" className="py-20 bg-slate-950 border-t border-slate-800">
              <div className="container mx-auto px-6">
                      <div className="max-w-3xl mx-auto text-center">
                        {/* Header */}
                                <div className="mb-12">
                                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                                          Questions? We're Here to Help
                                            </h2>h2>
                                            <p className="text-xl text-slate-300">
                                                          Not sure if SailorGPT is right for you? Our team of maritime experts are available on WhatsApp to answer any questions and guide you toward the best decision.
                                            </p>p>
                                </div>div>
                      
                        {/* Two Column Layout */}
                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                  {/* SailorGPT Info */}
                                            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-left hover:border-red-600 transition duration-300">
                                                          <h3 className="text-2xl font-bold text-white mb-4">About SailorGPT</h3>h3>
                                                          <ul className="space-y-3 text-slate-300 text-sm">
                                                                          <li className="flex items-start gap-3">
                                                                                            <span className="text-red-600 text-lg">✓</span>span>
                                                                                            <span><strong>Web-based mentor</strong>strong> available now via Graphy platform</span>span>
                                                                          </li>li>
                                                                          <li className="flex items-start gap-3">
                                                                                            <span className="text-red-600 text-lg">✓</span>span>
                                                                                            <span><strong>WhatsApp version</strong>strong> launching soon with priority access for early adopters</span>span>
                                                                          </li>li>
                                                                          <li className="flex items-start gap-3">
                                                                                            <span className="text-red-600 text-lg">✓</span>span>
                                                                                            <span><strong>DGS-aligned answers</strong>strong> on DNS, INDOS, CDC, exams, and career paths</span>span>
                                                                          </li>li>
                                                                          <li className="flex items-start gap-3">
                                                                                            <span className="text-red-600 text-lg">✓</span>span>
                                                                                            <span><strong>24/7 availability</strong>strong> with instant responses to maritime questions</span>span>
                                                                          </li>li>
                                                                          <li className="flex items-start gap-3">
                                                                                            <span className="text-red-600 text-lg">✓</span>span>
                                                                                            <span><strong>Free trial available</strong>strong> – start exploring before purchasing</span>span>
                                                                          </li>li>
                                                                          <li className="flex items-start gap-3">
                                                                                            <span className="text-red-600 text-lg">✓</span>span>
                                                                                            <span><strong>₹99/month Lite plan</strong>strong> covers unlimited questions and career guidance</span>span>
                                                                          </li>li>
                                                          </ul>ul>
                                            </div>div>
                                
                                  {/* WhatsApp Support */}
                                            <div className="bg-gradient-to-br from-green-900/20 to-slate-800/50 border border-green-600/50 rounded-lg p-8 text-left hover:border-green-500 transition duration-300">
                                                          <h3 className="text-2xl font-bold text-white mb-4">WhatsApp Support</h3>h3>
                                                          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                                                          Our support team includes serving maritime officers and career counselors. They'll help you understand:
                                                          </p>p>
                                                          <ul className="space-y-3 text-slate-300 text-sm mb-8">
                                                                          <li>• How SailorGPT complements your maritime journey</li>li>
                                                                          <li>• Which pricing plan fits your needs</li>li>
                                                                          <li>• Real career experiences and insights</li>li>
                                                                          <li>• Integration with our broader Sailor Success platform</li>li>
                                                                          <li>• Early access opportunities for WhatsApp version</li>li>
                                                          </ul>ul>
                                                          <a
                                                                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300"
                                                                          >
                                                                          <span>💬</span>span> Chat with Chief on WhatsApp
                                                          </a>a>
                                                          <p className="text-xs text-slate-400 mt-4">
                                                                          Typically replies within 1-2 hours (9 AM - 9 PM IST)
                                                          </p>p>
                                            </div>div>
                                </div>div>
                      
                        {/* Trust Message */}
                                <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
                                            <p className="text-slate-300 mb-4">
                                                          <span className="text-lg">🌊</span>span> Whether you're just exploring maritime options or are a seasoned officer looking for guidance—our team understands your journey because we've lived it.
                                            </p>p>
                                            <p className="text-slate-400 text-sm">
                                                          SailorGPT is built to be your 24/7 mentor. Our support team is here to ensure you get maximum value from our platform.
                                            </p>p>
                                </div>div>
                      
                        {/* FAQ */}
                                <div className="mt-12 text-left">
                                            <h3 className="text-2xl font-bold text-white text-center mb-8">Common Questions</h3>h3>
                                            <div className="space-y-6">
                                                          <div>
                                                                          <h4 className="text-white font-bold mb-2">Is SailorGPT only for deck officers?</h4>h4>
                                                                          <p className="text-slate-400 text-sm">
                                                                                            No. SailorGPT serves deck officers, engine officers, ratings, cadets, and anyone exploring a merchant navy career. Questions are personalized based on your background.
                                                                          </p>p>
                                                          </div>div>
                                                          <div>
                                                                          <h4 className="text-white font-bold mb-2">Do I need to pay to try SailorGPT?</h4>h4>
                                                                          <p className="text-slate-400 text-sm">
                                                                                            No. Free tier includes 10 questions per day. Upgrade to Lite (₹99/month) for unlimited access and advanced features.
                                                                          </p>p>
                                                          </div>div>
                                                          <div>
                                                                          <h4 className="text-white font-bold mb-2">When is the WhatsApp version launching?</h4>h4>
                                                                          <p className="text-slate-400 text-sm">
                                                                                            WhatsApp version is launching in Q1 2026. Early adopters will get priority access. Chat with us on WhatsApp to express your interest.
                                                                          </p>p>
                                                          </div>div>
                                                          <div>
                                                                          <h4 className="text-white font-bold mb-2">How is SailorGPT different from coaching centers?</h4>h4>
                                                                          <p className="text-slate-400 text-sm">
                                                                                            Unlike coaching institutes, SailorGPT is built by real maritime officers (120+ years combined experience), not by educators trying to monetize maritime knowledge. We provide honest answers—sometimes that means telling you what coaching centers won't.
                                                                          </p>p>
                                                          </div>div>
                                            </div>div>
                                </div>div>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
