import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Volume2, Heart, Crown } from "lucide-react";

const Chants = () => {
  const chants = [
    {
      id: 1,
      title: "Himni i Hajduçt",
      category: "Himn",
      icon: Crown,
      lyrics: "E kuqe e zeza në zemër na djeg\nHajduçt klubi ynë, dashuria jonë është e vërtetë\nKurrë nuk do ndalemi, nëpër fitore e humbje\nNjë klub, një dashuri, përgjithmonë!"
    },
    {
      id: 2,
      title: "Ne Jemi Këtu",
      category: "Inkurajim",
      icon: Volume2,
      lyrics: "Ne jemi këtu, gjithmonë këtu\nPër klubin tonë, nëpër gjithçka që jeta sjell\nKëndo me zë të lartë, mos ndalo kurrë\nHajduçt është krenaria jonë!"
    },
    {
      id: 3,
      title: "Krenaria e Kuqe-Zezë",
      category: "Krenari",
      icon: Heart,
      lyrics: "E kuqe dhe e zeza mbahen me krenari\nNgjyra jonë, forca jonë\nAs stuhia nuk do na ndalojë\nHajduçt deri në fund!"
    },
    {
      id: 4,
      title: "Stadiumi Gjëmon",
      category: "Atmosferë",
      icon: Music,
      lyrics: "Stadiumi gjëmon kur ne këndojmë\nKënga jonë ngrihet deri në qiell\nKundërshtarët dridhen kur na dëgjojnë\nHajduçt ultras, kurrë nuk pushon!"
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
            <h3 className="font-ultras text-2xl text-primary mb-4">PROPONO NJË KËNGË TË RE</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Ke një ide për një këngë të re që do të jehojë në stadium? 
              Na e dërgo propozimin dhe mund të bëhet pjesë e koleksionit tonë!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ultras">
                DËRGO PROPOZIM
              </Button>
              <Button variant="ultras-outline">
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