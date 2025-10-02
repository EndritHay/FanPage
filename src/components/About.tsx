import { Card } from "@/components/ui/card";
import { Heart, Flag, Users, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "PASIONI",
      description: "Dashuria jonë për klubin është e pakufishme. Çdo ndeshje, çdo fitore, çdo humbje - i ndajmë të gjitha së bashku."
    },
    {
      icon: Flag,
      title: "TRADITA", 
      description: "Më shumë se 88 vjet egzistencë mbajmë ngjyrat e klubit dhe të kombëtares me krenari. Tradita jonë kalon nga brezi në brez."
    },
    {
      icon: Users,
      title: "VËLLAZËRIA",
      description: "Ne nuk jemi vetëm tifozë të thjeshtë ne jemi familje. Një për të gjithë, të gjithë për një."
    },

  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-ultras text-4xl md:text-5xl mb-4 ultras-heading text-primary">
            RRETH NESH
          </h2>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
          Çdo qytet që ka një histori, mundohet ta ruajë dhe ta kultivojë atë, jo vetëm në aspektin politik, shoqëror e kulturor, por edhe në atë sportiv. Edhe pse Presheva nuk ka pasur ndonjë arritje të veçantë në përmasa të mëdha, futbolli si sporti më popullor ka qenë gjithmonë pjesë e pandashme e jetës sportive të këtij qyteti.

Kur flitet për futbollin preshevar, padyshim mendja shkon te klubi i futbollit “Hajduku”, një emër i lidhur ngushtë me traditën dhe identitetin sportiv të Preshevës. Ky klub u themelua dhe u regjistrua rreth vitit 1937, duke qenë klubi i parë i organizuar në këtë trevë  pothuajse bashkëmoshatar me KF “Hajduku” nga Spliti. Këtë e dëshmojnë gojëdhënat dhe kujtimet e njohësve të hershëm të futbollit në Preshevë.

Fatkeqësisht, pas një historie të gjatë e të pasur, klubi u shua në vitin 2011, duke lënë një boshllëk të madh në sportin e këtij qyteti. Megjithatë, edhe sot po bëhen përpjekje të vazhdueshme për rikthimin e tij, në mënyrë që “Hajduku” të marrë sërish vendin që i takon në historinë sportive të Preshevës.

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
              <h3 className="font-ultras text-2xl text-primary mb-4">MISIONI YNË</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ne krijojmë atmosferën që frymëzon lojtarët dhe intimidon kundërshtarët. 
                Këngët tona jehojnë në stadium, flamujt tanë valëviten krenarë, 
                dhe mbështetja jonë nuk pushon kurrë.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I mësojmë brezat e rinj se çfarë do të thotë të jesh tifoz i vërtetë me
                pasion dhe besim të palëkundshëm në klubin dhe kombëtaren tonë.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-6 bg-gradient-ultras rounded-lg shadow-ultras">
                <div className="font-ultras text-4xl text-white mb-2">NJË</div>
                <div className="font-ultras text-4xl text-white mb-2">KLUB</div>
                <div className="font-ultras text-4xl text-white">NJË DASHURI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;