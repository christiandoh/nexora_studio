import PageBanner from '../components/PageBanner';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <main>
      <PageBanner
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
        title="Nos services"
        subtitle="Du web à l'IA, on construit vos actifs digitaux avec des standards Silicon Valley."
      />
      <Services />
    </main>
  );
}
