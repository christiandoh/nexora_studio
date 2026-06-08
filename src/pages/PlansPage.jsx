import PageBanner from '../components/PageBanner';
import Plans from '../components/Plans';

export default function PlansPage() {
  return (
    <main>
      <PageBanner
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        title="Nos offres"
        subtitle="Votre partenaire tech à temps plein. Des formules mensuelles pour stabiliser votre roadmap."
      />
      <Plans />
    </main>
  );
}
