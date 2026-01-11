import Contact from '@/components/home/contact';
import FAQ from '@/components/home/FAQ';
import Features from '@/components/home/features';
import Hero from '@/components/home/hero';
import Pricing from '@/components/home/pricing';
import Testimonials from '@/components/home/testimonials';

export default function page() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  )
}



