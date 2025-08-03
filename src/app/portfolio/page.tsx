import Footer from '@/components/footer';
import Header from '@/components/header';
import PortfolioSection from '@/components/sections/portfolio';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}
