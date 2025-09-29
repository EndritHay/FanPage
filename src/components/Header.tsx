import { Button } from "@/components/ui/button";
import { Menu, X, Users, Calendar, Music, Camera } from "lucide-react";
import { useState } from "react";
import hajductLogo from "@/assets/hajduct-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "O nama", href: "#about", icon: Users },
    { name: "Galerija", href: "#gallery", icon: Camera },
    { name: "Pjesme", href: "#chants", icon: Music },
    { name: "Događaji", href: "#events", icon: Calendar },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-primary/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={hajductLogo} 
              alt="Hajduçt Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-ultras text-xl text-primary ultras-glow">
              HAJDUÇT
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-ultras font-semibold"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
            <Button variant="ultras" className="ml-4">
              PRIDRUŽI SE
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-ultras font-semibold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              ))}
              <Button variant="ultras" className="mt-2">
                PRIDRUŽI SE
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;