import { Button } from "@/components/ui/button";
import { ArrowDown, Flag, Heart, Flame } from "lucide-react";
import { useEffect, useState } from "react";
import hajductLogo from "@/assets/gallery/full.png";
import ultrasHero from "@/assets/gallery/ultras-hero-realistic.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const timer = setTimeout(() => setIsVisible(true), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(${1 + Math.min(scrollY * 0.0005, 0.1)})`,
    transition: 'transform 0.1s ease-out'
  };

  const textGlowStyle = {
    textShadow: `0 0 20px rgba(255, 0, 0, 0.5), 
                 0 0 40px rgba(255, 0, 0, 0.3), 
                 0 0 60px rgba(255, 0, 0, 0.2)`,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${ultrasHero})`,
          ...parallaxStyle
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      { /* PARTICLES <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomSize = 12 + Math.random() * 24;
          const randomDelay = Math.random() * 5;
          const randomDuration = 3 + Math.random() * 4;
          const randomOpacity = 0.15 + Math.random() * 0.45;
          const randomBlur = Math.random() * 2;
          
          return (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Flame 
                size={randomSize}
                className="text-primary/40 animate-pulse" 
                style={{ 
                  filter: `blur(${randomBlur}px)`,
                  opacity: randomOpacity
                }} 
              />
            </div>
          );
        })}
      </div> */}

      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="space-y-6">
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <img
              src={hajductLogo}
              alt="Hajduçt Logo"
              className="w-auto max-w-full object-contain"
              style={{ height: 'clamp(120px, 25vw, 180px)' }}
              style={{ filter: 'drop-shadow(0 0 30px rgba(255, 0, 0, 0.5))' }}
            />
          </div>

          <h1
            className="font-ultras text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-10 ultras-heading animate-in fade-in slide-in-from-bottom duration-700 delay-100"
            style={textGlowStyle}
          >
            HAJDUÇT
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-primary font-bold mb-4 tracking-wider animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            ULTRAS MENTALITY • ANTI-ANTIFA • ACAB
          </div>

          <p className="text-base sm:text-lg md:text-xl text-foreground/90 mb-10 font-semibold animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            Zemra e Preshevës • Krenaria e Kombëtares
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <Link to="/join">
              <Button
                variant="ultras"
                size="lg"
                className="text-lg px-8 py-4 relative overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 group-hover:animate-shimmer" />
                <Flag className="w-5 h-5 mr-2" />
                BASHKOHU ME NE
              </Button>
            </Link>
            <Button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              variant="ultras-outline"
              size="lg"
              className="text-lg px-8 py-4 hover:scale-105 transition-transform hover:bg-primary/10"
            >
              <Heart className="w-5 h-5 mr-2" />
              HISTORIA JONË
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-md mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-500 mt-8">
            <div className="text-center group cursor-default">
              <div className="text-xl sm:text-2xl md:text-3xl font-ultras text-primary group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-xs sm:text-sm text-foreground/70 font-semibold mt-1">Anëtarë</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-xl sm:text-2xl md:text-3xl font-ultras text-primary group-hover:scale-110 transition-transform duration-300">88+</div>
              <div className="text-xs sm:text-sm text-foreground/70 font-semibold mt-1">Vite</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-xl sm:text-2xl md:text-3xl font-ultras text-primary group-hover:scale-110 transition-transform duration-300">∞</div>
              <div className="text-xs sm:text-sm text-foreground/70 font-semibold mt-1">Pasion</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
      </div>

    </section>

  );
};

export default Hero;