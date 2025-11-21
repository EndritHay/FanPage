import { Card } from "@/components/ui/card";
import { Heart, Flag, Users, Brain } from "lucide-react";

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
      icon: Brain,
      title: "Mentaliteti",
      description: "Me një klub të vjetër poaq sa Presheva, mentaliteti ultra-nacionalist është ngulitur thellë në zemrat tona."
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-ultras text-5xl md:text-6xl mb-6 ultras-heading text-primary animate-in fade-in slide-in-from-bottom duration-700">
            RRETH NESH
          </h2>
          <div className="w-32 h-1.5 bg-gradient-ultras mx-auto mb-8 rounded-full shadow-glow"></div>
          <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed font-medium text-justify backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-primary/10">
            Çdo qytet që ka një histori, mundohet ta ruajë dhe ta kultivojë atë, jo vetëm në aspektin politik, shoqëror e kulturor, por edhe në atë sportiv. Edhe pse Presheva nuk ka pasur ndonjë arritje të veçantë në përmasa të mëdha, futbolli si sporti më popullor ka qenë gjithmonë pjesë e pandashme e jetës sportive të këtij qyteti.
            <br /><br />
            Kur flitet për futbollin preshevar, padyshim mendja shkon te klubi i futbollit "Hajduku", një emër i lidhur ngushtë me traditën dhe identitetin sportiv të Preshevës. Ky klub u themelua dhe u regjistrua rreth vitit 1937, duke qenë klubi i parë i organizuar në këtë trevë  pothuajse bashkëmoshatar me KF "Hajduku" nga Spliti. Këtë e dëshmojnë gojëdhënat dhe kujtimet e njohësve të hershëm të futbollit në Preshevë.
            <br /><br />
            Fatkeqësisht, pas një historie të gjatë e të pasur, klubi u shua në vitin 2011, duke lënë një boshllëk të madh në sportin e këtij qyteti. Megjithatë, edhe sot po bëhen përpjekje të vazhdueshme për rikthimin e tij, në mënyrë që "Hajduku" të marrë sërish vendin që i takon në historinë sportive të Preshevës.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="p-8 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group animate-slide-up hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-ultras text-2xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.title}
                </h3>
                <p className="text-foreground/80 text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-ultras text-3xl text-primary mb-6 flex items-center gap-3">
                <div className="w-2 h-12 bg-gradient-ultras rounded-full"></div>
                MISIONI YNË
              </h3>
              <p className="text-foreground/90 leading-relaxed text-lg">
                Ne krijojmë atmosferën që frymëzon lojtarët dhe intimidon kundërshtarët.
                Këngët tona jehojnë në stadium, flamujt tanë valëviten krenarë,
                dhe mbështetja jonë nuk pushon kurrë.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg">
                I mësojmë brezat e rinj se çfarë do të thotë të jesh tifoz i vërtetë me
                pasion dhe besim të palëkundshëm në klubin dhe kombëtaren tonë.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-10 bg-gradient-to-br from-primary via-red-700 to-red-900 rounded-2xl shadow-2xl shadow-primary/40 hover:scale-105 transition-transform duration-500 border border-red-500/30">
                <div className="font-ultras text-5xl text-white mb-3 drop-shadow-lg">NJË</div>
                <div className="font-ultras text-5xl text-white mb-3 drop-shadow-lg">KLUB</div>
                <div className="font-ultras text-5xl text-white drop-shadow-lg">NJË DASHURI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;