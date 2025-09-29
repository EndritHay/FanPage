import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Volume2, Heart, Crown } from "lucide-react";

const Chants = () => {
  const chants = [
    {
      id: 1,
      title: "Hajduçt Himna",
      category: "Himna",
      icon: Crown,
      lyrics: "Crveno i crno u srcu nam gori\nHajduçt naš klub, naša ljubav je prava\nNikad nećemo stati, kroz pobjedu i poraz\nJedan klub, jedna ljubav, zauvijek!"
    },
    {
      id: 2,
      title: "Mi Smo Tu",
      category: "Bodrenje",
      icon: Volume2,
      lyrics: "Mi smo tu, uvijek tu\nZa naš klub, kroz sve što život donosi\nGlasno pjevaj, nikad ne stani\nHajduçt je naš ponos!"
    },
    {
      id: 3,
      title: "Crveno-Crni Ponos",
      category: "Ponos",
      icon: Heart,
      lyrics: "Crveno i crno nose se s ponosom\nNaša boja, naša snaga\nNi oluja neće nas zaustaviti\nHajduçt do kraja!"
    },
    {
      id: 4,
      title: "Stadion Grmi",
      category: "Atmosfera",
      icon: Music,
      lyrics: "Stadion grmi kada mi zapjevamo\nNaša pjesma do neba se diže\nProtivnici drhte kad nas čuju\nHajduçt ultras, nikad ne miruje!"
    }
  ];

  const categories = ["Sve", "Himna", "Bodrenje", "Ponos", "Atmosfera"];

  return (
    <section id="chants" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-ultras text-4xl md:text-5xl mb-4 ultras-heading text-primary">
            NAŠE PJESME
          </h2>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Naše pjesme su duša stadiona. Svaka riječ nosi strast, 
            svaki ton prenosi ljubav prema našem klubu.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={category === "Sve" ? "ultras" : "ultras-ghost"}
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
                  POSLUŠAJ
                </Button>
                <Button variant="ghost" size="sm">
                  PODIJELI
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Song request section */}
        <div className="bg-card/30 rounded-lg p-8 border border-primary/20">
          <div className="text-center">
            <Music className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-ultras text-2xl text-primary mb-4">PREDLOŽI NOVU PJESMU</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Imaš ideju za novu pjesmu koja će odzvanjati stadionom? 
              Pošalji nam svoj prijedlog i možda će postati dio naše kolekcije!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ultras">
                POŠALJI PRIJEDLOG
              </Button>
              <Button variant="ultras-outline">
                <Music className="w-4 h-4 mr-2" />
                SVE PJESME
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chants;