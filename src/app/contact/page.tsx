import Footer from '@/components/footer';
import Header from '@/components/header';
import ContactSection from '@/components/sections/contact';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
