import { Button } from "@/components/ui/button";
import { ArrowDown, Flag, Heart, Flame, Users } from "lucide-react";
import { useEffect, useState } from "react";
import hajductLogo from "@/assets/gallery/hajduct-logo.png";
import ultrasHero from "@/assets/gallery/ultras-hero.jpg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
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

    // Show content with delay
    const timer = setTimeout(() => setIsVisible(true), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${1 + scrollY * 0.001})`,
  };

  const textGlowStyle = {
    textShadow: `0 0 20px rgba(255, 0, 0, 0.5), 
                 0 0 40px rgba(255, 0, 0, 0.3), 
                 0 0 60px rgba(255, 0, 0, 0.2)`,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: `url(${ultrasHero})`,
          ...parallaxStyle
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Animated fire particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Flame 
              size={24}
              className="text-primary/30 animate-pulse" 
              style={{ 
                transform: `scale(${0.5 + Math.random()})`,
                opacity: 0.3 + Math.random() * 0.7
              }} 
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div 
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="space-y-6">
          <img 
            src={hajductLogo} 
            alt="Hajduçt Logo" 
            className="w-32 h-32 mx-auto mb-6 animate-pulse-slow hover:scale-110 transition-transform duration-300"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255, 0, 0, 0.3))' }}
          />
          
          <h1 
            className="font-ultras text-6xl md:text-8xl mb-4 ultras-heading"
            style={textGlowStyle}
          >
            HAJDUÇT
          </h1>
          
          <div className="text-xl md:text-2xl text-primary font-bold mb-2 tracking-wider animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            ULTRAS MENTALITY • PASION • TRADITË
          </div>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-8 font-semibold animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            Zemra e Preshevës • Krenaria e Kombëtares
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <Button 
              onClick={() => navigate('/join')}
              variant="ultras" 
              size="lg" 
              className="text-lg px-8 py-4 relative overflow-hidden group hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 group-hover:animate-shimmer" />
              <Flag className="w-5 h-5 mr-2" />
              BASHKOHU ME NE

            </Button>
            <Button 
              variant="ultras-outline" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-transform hover:bg-primary/10"
            >
              <Heart className="w-5 h-5 mr-2" />
              HISTORIA JONË
            </Button>
          </div>

          {/* Stats with counter animation */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <div className="text-center group">
              <div className="text-2xl font-ultras text-primary group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm text-foreground/70 font-semibold">Anëtarë</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-ultras text-primary group-hover:scale-110 transition-transform">88+</div>
              <div className="text-sm text-foreground/70 font-semibold">Vite</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-ultras text-primary group-hover:scale-110 transition-transform">∞</div>
              <div className="text-sm text-foreground/70 font-semibold">Pasion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;