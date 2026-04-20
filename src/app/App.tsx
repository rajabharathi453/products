import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Portfolio />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
