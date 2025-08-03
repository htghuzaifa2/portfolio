import { Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} HTG Huzaifa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
