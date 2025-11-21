import { Button } from "@/components/ui/button";
import { Menu, X, Users, Calendar, Music, Camera, Store } from "lucide-react";
import { useState, useEffect } from "react";
import hajductLogo from "@/assets/gallery/full.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check for user data in localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Rreth Nesh", href: "#about", icon: Users },
    { name: "Galeria", href: "#gallery", icon: Camera },
    { name: "Këngët", href: "#chants", icon: Music },
    { name: "Ngjarjet", href: "#events", icon: Calendar },
    { name: "Shop", href: "#shop", icon: Store }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-black/95 backdrop-blur-xl border-b border-primary/30 shadow-2xl shadow-primary/10'
        : 'bg-black/80 backdrop-blur-sm border-b border-primary/10'
      }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img
                src={hajductLogo}
                alt="Hajduçt Logo"
                className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <span className="font-ultras text-2xl text-primary ultras-glow group-hover:tracking-wider transition-all duration-300">
              HAJDUÇT
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-all duration-300 font-semibold relative group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="group-hover:tracking-wide transition-all duration-300">{item.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-ultras group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            {!user ? (
              <>
                <Link to="/join">
                  <Button variant="ultras" className="ml-4 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/50">
                    REGJISTROHU
                  </Button>
                </Link>

                <Link to="/login">
                  <Button variant="ultras-outline" className="ml-2 hover:scale-105 transition-transform duration-300">
                    KYÇU
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3 ml-4 bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
                <span className="text-sm text-foreground/90 font-semibold">
                  Mirë se erdhe, {user.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/20"
                  onClick={() => {
                    localStorage.removeItem('user');
                    setUser(null);
                    window.location.reload();
                  }}
                >
                  DIL
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="transition-transform duration-300 rotate-90" /> : <Menu className="transition-transform duration-300" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-primary/20 pt-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-all duration-300 font-semibold py-3 px-4 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              ))}
              {!user ? (
                <>
                  <Link to="/join">
                    <Button variant="ultras" className="mt-2 w-full">
                      REGJISTROHU
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="ultras-outline" className="mt-2 w-full">
                      KYÇU
                    </Button>
                  </Link>
                </>
              ) : (
                <Button
                  variant="outline"
                  className="mt-2 w-full"
                  onClick={() => {
                    localStorage.removeItem('user');
                    setUser(null);
                    window.location.reload();
                  }}
                >
                  DIL
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;