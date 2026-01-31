import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import UpdatesAndSafety from './components/UpdatesAndSafety';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import TryNowCTA from './components/TryNowCTA';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Hero />
      <Capabilities />
      <UpdatesAndSafety />
      <Pricing />
      <Comparison />
      <TryNowCTA />
      <Footer />
    </>
  );
}
