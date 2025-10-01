import { Button } from "@/components/ui/button";
import { ArrowDown, Flag, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import hajductLogo from "@/assets/gallery/hajduct-logo.png";
import ultrasHero from "@/assets/gallery/ultras-hero.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxY = scrollY * 0.5;
  const contentOpacity = Math.max(0, 1 - scrollY * 0.002);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{ 
          backgroundImage: `url(${ultrasHero})`,
          transform: `translateY(${parallaxY}px) scale(${1 + scrollY * 0.001})`,
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 transition-opacity duration-300"
          style={{ opacity: contentOpacity }}
        ></div>
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-300"
        style={{ opacity: contentOpacity }}
      >
        <div className="animate-in fade-in slide-in-from-bottom duration-700">
          <img 
            src={hajductLogo} 
            alt="Hajduçt Logo" 
            className="w-32 h-32 mx-auto mb-6 animate-pulse"
          />
          
          <h1 className="font-ultras text-6xl md:text-8xl mb-4 ultras-heading ultras-glow animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            HAJDUÇT
          </h1>
          
          <div className="text-xl md:text-2xl text-primary font-bold mb-2 tracking-wider animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            ULTRAS • PASION • TRADITË
          </div>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-8 font-semibold animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            Zemra e Preshevës • Krenaria e Kombëtares.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <Button variant="ultras" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              <Flag className="w-5 h-5 mr-2" />
              BASHKOHU ME NE
            </Button>
            <Button variant="ultras-outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 mr-2" />
              HISTORIA JONË
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <div className="text-center">
              <div className="text-2xl font-ultras text-primary">500+</div>
              <div className="text-sm text-foreground/70 font-semibold">Anëtarë</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-ultras text-primary">88+</div>
              <div className="text-sm text-foreground/70 font-semibold">Vite</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-ultras text-primary">∞</div>
              <div className="text-sm text-foreground/70 font-semibold">Pasion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;