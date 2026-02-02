'use client';
import Hero from './components/Hero';
import KnowledgeHub from './components/KnowledgeHub';
import Capabilities from './components/Capabilities';
import UpdatesAndSafety from './components/UpdatesAndSafety';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import Support from './components/Support';
import TryNowCTA from './components/TryNowCTA';
import Footer from './components/Footer';

export default function Page() {
    return (
          <>
                <Hero />
                <KnowledgeHub />
                <Capabilities />
                <UpdatesAndSafety />
                <Pricing />
                <Comparison />
                <Support />
                <TryNowCTA />
                <Footer />
          </>>
        );
}</>
