import { Youtube, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} HTG Huzaifa. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
            <a href="https://wa.me/923251480148" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 inline-flex justify-center items-center bg-transparent border-2 border-primary text-primary text-xl rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:shadow-[0_0_20px_hsl(var(--primary))]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </a>
            <a href="#" aria-label="Discord" className="w-10 h-10 inline-flex justify-center items-center bg-transparent border-2 border-primary text-primary text-xl rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:shadow-[0_0_20px_hsl(var(--primary))]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc-3"><path d="M5.2 3.8A10 10 0 1 0 18 20a10 10 0 0 0-12.8-16.2Z"/><circle cx="12" cy="12" r="2"/><path d="M12 14a2 2 0 1 0 0-4"/><path d="M12 12a4 4 0 1 1-4-4"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 inline-flex justify-center items-center bg-transparent border-2 border-primary text-primary text-xl rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:shadow-[0_0_20px_hsl(var(--primary))]">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 inline-flex justify-center items-center bg-transparent border-2 border-primary text-primary text-xl rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:shadow-[0_0_20px_hsl(var(--primary))]">
              <Instagram className="h-5 w-5" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
