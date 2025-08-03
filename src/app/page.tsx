import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import PortfolioSection from '@/components/sections/portfolio';
import AiToolSection from '@/components/sections/ai-tool';
import ContactSection from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Separator className="my-12 md:my-24" />
        <PortfolioSection />
        <Separator className="my-12 md:my-24" />
        <AiToolSection />
        <Separator className="my-12 md:my-24" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
