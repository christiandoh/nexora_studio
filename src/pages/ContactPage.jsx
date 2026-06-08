import PageBanner from '../components/PageBanner';
import CTA from '../components/CTA';

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80"
        title="Contactez-nous"
        subtitle="Un appel de 30 minutes pour analyser votre situation — sans engagement."
      />
      <CTA />
    </main>
  );
}
