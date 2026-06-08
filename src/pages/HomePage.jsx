import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Showcase from '../components/Showcase';
import FeaturedGrid from '../components/FeaturedGrid/FeaturedGrid';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Showcase />
      <FeaturedGrid />
      <Testimonials />
    </main>
  );
}
