import PageBanner from '../components/PageBanner';
import Process from '../components/Process';

export default function MethodPage() {
  return (
    <main>
      <PageBanner
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
        title="La méthode Nexora"
        subtitle="Un processus transparent, des résultats prévisibles — inspiré des meilleurs studios californiens."
      />
      <Process />
    </main>
  );
}
