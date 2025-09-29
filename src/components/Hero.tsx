import { Button } from "@/components/ui/button";
import { ArrowDown, Flag, Heart, Users } from "lucide-react";
import hajductLogo from "@/assets/hajduct-logo.png";
import ultrasHero from "@/assets/ultras-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ultrasHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-bounce-in">
          <img 
            src={hajductLogo} 
            alt="Hajduçt Logo" 
            className="w-32 h-32 mx-auto mb-6 animate-pulse-glow"
          />
          
          <h1 className="font-ultras text-6xl md:text-8xl mb-4 ultras-heading ultras-glow">
            HAJDUÇT
          </h1>
          
          <div className="text-xl md:text-2xl text-primary font-bold mb-2 tracking-wider">
            ULTRAS • STRAST • TRADICIJA
          </div>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-8 font-semibold">
            Naša srca kucaju u ritmu stadiona. Naša ljubav je crveno-crna.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="ultras" size="lg" className="text-lg px-8 py-4">
              <Flag className="w-5 h-5 mr-2" />
              PRIDRUŽI SE NAMA
            </Button>
            <Button variant="ultras-outline" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              NAŠA PRIČA
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-ultras text-primary">500+</div>
              <div className="text-sm text-foreground/70 font-semibold">Članova</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-ultras text-primary">25+</div>
              <div className="text-sm text-foreground/70 font-semibold">Godina</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-ultras text-primary">∞</div>
              <div className="text-sm text-foreground/70 font-semibold">Strasti</div>
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