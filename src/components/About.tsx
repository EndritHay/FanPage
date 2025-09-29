import { Card } from "@/components/ui/card";
import { Heart, Flag, Users, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "STRAST",
      description: "Naša ljubav prema klubu je bezgranična. Svaki meč, svaka pobjeda, svaki poraz - dijelimo sve zajedno."
    },
    {
      icon: Flag,
      title: "TRADICIJA", 
      description: "Više od 25 godina nosimo crveno-crne boje s ponosom. Naša tradicija se prenosi s koljena na koljeno."
    },
    {
      icon: Users,
      title: "BRATSTVO",
      description: "Nismo samo navijači - mi smo porodica. Jedan za sve, svi za jedan. To je naš put, to je naš život."
    },
    {
      icon: Trophy,
      title: "POBJEDA",
      description: "Zajedno slavimo pobjede i zajedno prolazimo kroz poraze. Naša snaga je u jedinstvu."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-ultras text-4xl md:text-5xl mb-4 ultras-heading text-primary">
            O NAMA
          </h2>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Hajduçt nije samo grupa navijača - mi smo zajednica koja živi i diše za svoj klub. 
            Naša priča počinje davne 1998. godine kad je skupina mladih entuzijasta odlučila 
            stvoriti nešto posebno. Danas smo ponosna ultras grupa koja čuva tradiciju i gradi budućnost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-ultras hover:shadow-glow group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-ultras rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-ultras text-xl text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card/30 rounded-lg p-8 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-ultras text-2xl text-primary mb-4">NAŠA MISIJA</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Stvaramo atmosferu koja inspirira igrače i intimidira protivnike. 
                Naši napjevi odzvanjaju stadionom, naše zastave vijore se ponosno, 
                a naša podrška nikad ne prestaje.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Učimo mlade generacije što znači biti pravi navijač - s poštovanjem, 
                strašću i nepokolebljivom vjerom u naš klub.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-6 bg-gradient-ultras rounded-lg shadow-ultras">
                <div className="font-ultras text-4xl text-white mb-2">JEDAN</div>
                <div className="font-ultras text-4xl text-white mb-2">KLUB</div>
                <div className="font-ultras text-4xl text-white">JEDNA LJUBAV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;