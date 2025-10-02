import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Volume2, Heart, Crown } from "lucide-react";

const Chants = () => {
  const chants = [
    {
      id: 1,
      title: "Hajde o Hajduku jon",
      category: "Himn",
      icon: Crown,
      lyrics: "Hajde hajde o Hajduku jon\nVeç per ty do te kendojme\nNuk ka asgje tjeter ne ket bote\nVeç per ty do te luftojme!"
    },
    {
      id: 2,
      title: "Shehri",
      category: "Inkurajim",
      icon: Volume2,
      lyrics: "Kujtou mir\nMos u nis\nHajduçt knej\nShehri t'prish!"
    },
    {
      id: 3,
      title: "shkau",
      category: "Krenari",
      icon: Heart,
      lyrics: "Hiqmu pi k***, largomu prej trolli\nTi q* dekmit serbi, kur dal prej kontrollit"
    },
    {
      id: 4,
      title: "Presheva",
      category: "Atmosferë",
      icon: Music,
      lyrics: "Moj Presheva trime fatin Cameri \nJo s'te lejme jetime sa t'ket shqiptari"
    }
  ];

  const categories = ["Të gjitha", "Himn", "Inkurajim", "Krenari", "Atmosferë"];

  return (
    <section id="chants" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-ultras text-4xl md:text-5xl mb-4 ultras-heading text-primary">
            KËNGËT TONA
          </h2>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Këngët tona janë shpirtra e stadiumit. Çdo fjalë bart pasion, 
            çdo tingull transmeton dashurinë për klubin tonë.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={category === "Të gjitha" ? "ultras" : "ultras-ghost"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {chants.map((chant, index) => (
            <Card 
              key={chant.id}
              className="p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-ultras hover:shadow-glow group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-ultras rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                  <chant.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-ultras text-xl text-primary group-hover:ultras-glow transition-ultras">
                    {chant.title}
                  </h3>
                  <div className="text-sm text-foreground/60 font-semibold">
                    {chant.category}
                  </div>
                </div>
              </div>
              
              <div className="bg-background/20 rounded-lg p-4 border border-primary/10">
                <pre className="text-foreground/80 font-medium leading-relaxed whitespace-pre-wrap text-sm">
                  {chant.lyrics}
                </pre>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="ultras-ghost" size="sm">
                  <Volume2 className="w-4 h-4 mr-2" />
                  DËGJOJE
                </Button>
                <Button variant="ghost" size="sm">
                  NDAJ
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Song request section */}
        <div className="bg-card/30 rounded-lg p-8 border border-primary/20">
          <div className="text-center">
            <Music className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-ultras text-2xl text-primary mb-4">THURRI DY VARGJE PER NE</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Ke një ide për një këngë të re që do të jehojë në stadium? 
              Na e dërgo propozimin dhe mund të bëhet pjesë e koleksionit tonë!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ultras">
                DËRGO PROPOZIM
              </Button>
              <Button variant="ultras-outline"
                onClick={() => {
                  document.getElementById('chants')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>

                <Music className="w-4 h-4 mr-2" />
                TË GJITHA KËNGËT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chants;