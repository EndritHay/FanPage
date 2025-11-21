import { Button } from "@/components/ui/button";
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import hajductLogo from "@/assets/gallery/full.png";

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
    <footer className="relative bg-black border-t border-primary/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6 group cursor-pointer">
              <div className="relative">
                <img
                  src={hajductLogo}
                  alt="Hajduçt Logo"
                  className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="font-ultras text-3xl text-primary ultras-glow group-hover:tracking-wider transition-all duration-300">
                HAJDUÇT
              </span>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-md text-base">
              Më shumë se 88 vjet mbajmë ngjyrat e kuqe dhe të zeza me krenari.
              Pasioni ynë, tradita jonë, familja jonë.
            </p>
            <div className="flex items-center gap-3 text-sm text-foreground/70 bg-primary/10 px-4 py-3 rounded-full inline-flex border border-primary/20">
              <Heart className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-semibold">Një klub, një dashuri, përgjithmonë</span>
            </div>
          </div>

          <div>
            <h3 className="font-ultras text-xl text-primary mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-ultras rounded-full"></div>
              LIDHJE TË SHPEJTA
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <div className="w-0 h-0.5 bg-gradient-ultras group-hover:w-4 transition-all duration-300"></div>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group"
                >
                  <div className="w-0 h-0.5 bg-gradient-ultras group-hover:w-4 transition-all duration-300"></div>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-ultras text-xl text-primary mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-ultras rounded-full"></div>
              KONTAKTI
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>info@hajduct.al</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+383 44 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Preshevë, Kosovë</span>
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300 border border-primary/20"
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
        <div className="py-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground/60">
            &copy; 2024 Hajduçt Ultras. Të gjitha të drejtat të rezervuara.
          </div>
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors duration-300">Rregullat e përdorimit</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">Privatësia</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;