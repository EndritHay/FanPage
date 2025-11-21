import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Volume2, Heart, Crown, Mic2 } from "lucide-react";

const Chants = () => {
  const chants = [
    // {
    //   id: 1,
    //   title: "Hajde o Hajduku jon",
    //   category: "Himn",
    //   icon: Crown,
    //   lyrics: "Hajde hajde o Hajduku jon\nVeç per ty do te kendojme\nNuk ka asgje tjeter ne ket bote\nVeç per ty do te luftojme!"
    // },
    // {
    //   id: 3,
    //   title: "shkau",
    //   category: "Krenari",
    //   icon: Heart,
    //   lyrics: "Hiqmu pi k***, largomu prej trolli\nTi q* dekmit serbi, kur dal prej kontrollit"
    // },
    // {
    //   id: 4,
    //   title: "Presheva",
    //   category: "Atmosferë",
    //   icon: Music,
    //   lyrics: "Moj Presheva trime fatin Cameri \nJo s'te lejme jetime sa t'ket shqiptari"
    // }
  ];

  const categories = ["Të gjitha", "Himn", "Inkurajim", "Krenari", "Atmosferë"];

  return (
    <section id="chants" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-red-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-ultras text-5xl md:text-6xl mb-6 ultras-heading text-primary">
            KËNGËT TONA
          </h2>
          <div className="w-32 h-1.5 bg-gradient-ultras mx-auto mb-8 rounded-full shadow-glow"></div>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            Këngët tona janë shpirtra e stadiumit. Çdo fjalë bart pasion,
            çdo tingull transmeton dashurinë për klubin tonë.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={category === "Të gjitha" ? "ultras" : "ultras-ghost"}
              size="sm"
              className="hover:scale-110 transition-all duration-300 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {chants.map((chant, index) => (
            <Card
              key={chant.id}
              className="p-8 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group animate-slide-up hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <chant.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-ultras text-2xl text-primary group-hover:ultras-glow transition-all duration-300">
                    {chant.title}
                  </h3>
                  <div className="text-sm text-foreground/70 font-semibold bg-primary/10 px-3 py-1 rounded-full inline-block mt-1">
                    {chant.category}
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-primary/20 mb-6">
                <pre className="text-foreground/90 font-medium leading-relaxed whitespace-pre-wrap text-base">
                  {chant.lyrics}
                </pre>
              </div>

              <div className="flex gap-3">
                <Button variant="ultras" size="sm" className="flex-1 hover:scale-105 transition-transform duration-300">
                  <Volume2 className="w-4 h-4 mr-2" />
                  DËGJOJE
                </Button>
                <Button variant="ultras-outline" size="sm" className="hover:scale-105 transition-transform duration-300">
                  NDAJ
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Song request section */}
        <div className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse">
              <Mic2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-ultras text-3xl text-primary mb-6">THURRI DY VARGJE PER NE</h3>
            <p className="text-foreground/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Ke një ide për një këngë të re që do të jehojë në stadium?
              Na e dërgo propozimin dhe mund të bëhet pjesë e koleksionit tonë!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ultras" className="hover:scale-105 transition-transform duration-300 shadow-xl text-lg px-8 py-6">
                DËRGO PROPOZIM
              </Button>
              <Button
                variant="ultras-outline"
                className="hover:scale-105 transition-transform duration-300 text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById('chants')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <Music className="w-5 h-5 mr-2" />
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