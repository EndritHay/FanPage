import { Button } from "@/components/ui/button";
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import hajductLogo from "@/assets/hajduct-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Rreth Nesh", href: "#about" },
    { name: "Galeria", href: "#gallery" },
    { name: "Këngët", href: "#chants" },
    { name: "Ngjarjet", href: "#events" }
  ];

  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={hajductLogo} 
                alt="Hajduçt Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-ultras text-2xl text-primary ultras-glow">
                HAJDUÇT
              </span>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-6 max-w-md">
              Më shumë se 25 vjet mbajmë ngjyrat e kuqe dhe të zeza me krenari. 
              Pasioni ynë, tradita jonë, familja jonë - kjo jemi ne, Hajduçt ultras.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Heart className="w-4 h-4 text-primary" />
              <span>Një klub, një dashuri, përgjithmonë</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-ultras text-lg text-primary mb-4">LIDHJE TË SHPEJTA</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-ultras text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-ultras text-sm"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-ultras text-lg text-primary mb-4">KONTAKTI</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@hajduct.al</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <span>+383 44 123 456</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button 
                  key={social.label}
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/20 hover:text-primary"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground/60">
            &copy; 2024 Hajduçt Ultras. Të gjitha të drejtat të rezervuara.
          </div>
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-ultras">Rregullat e përdorimit</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-ultras">Privatësia</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;