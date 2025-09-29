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
      description: "Më shumë se 25 vjet mbajmë ngjyrat e kuqe dhe të zeza me krenari. Tradita jonë kalon nga brezi në brez."
    },
    {
      icon: Users,
      title: "VËLLAZËRIA",
      description: "Ne nuk jemi vetëm tifozë - ne jemi familje. Një për të gjithë, të gjithë për një. Kjo është rruga jonë, kjo është jeta jonë."
    },
    {
      icon: Trophy,
      title: "FITORJA",
      description: "Së bashku festojmë fitoret dhe së bashku kalojmë nëpër humbjet. Forca jonë është në bashkim."
    }
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
            Hajduçt nuk është thjesht një grup tifozësh - ne jemi një komunitet që jeton dhe thithë për klubin tonë. 
            Historia jonë fillon në vitin 1998 kur një grup të rinjsh entuziastë vendosën 
            të krijojnë diçka të veçantë. Sot jemi një grup krenar ultras që ruajmë traditën dhe ndërtojmë të ardhmen.
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
                I mësojmë brezat e rinj se çfarë do të thotë të jesh tifoz i vërtetë - me respekt, 
                pasion dhe besim të palëkundshëm në klubin tonë.
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