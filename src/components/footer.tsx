import { Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} HTG Huzaifa. All rights reserved.
        </p>
        <div className="footer-social-icons">
           <a href="https://wa.me/923251480148" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </a>
            <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" aria-label="Discord">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc-3"><path d="M5.2 3.8A10 10 0 1 0 18 20a10 10 0 0 0-12.8-16.2Z"/><circle cx="12" cy="12" r="2"/><path d="M12 14a2 2 0 1 0 0-4"/><path d="M12 12a4 4 0 1 1-4-4"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
