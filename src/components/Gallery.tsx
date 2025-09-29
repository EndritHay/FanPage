import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Play, Calendar } from "lucide-react";

const Gallery = () => {
  // Mock gallery data - in real app would come from backend
  const photos = [
    { id: 1, title: "Derbiu kundër Partizanit", date: "15.03.2024", type: "photo" },
    { id: 2, title: "Koreografia 'Krenaria e Kuqe-Zezë'", date: "08.03.2024", type: "photo" },
    { id: 3, title: "Finali i Kupës", date: "22.02.2024", type: "video" },
    { id: 4, title: "Tifozëria në transfertë", date: "10.02.2024", type: "photo" },
    { id: 5, title: "Festimi i 25 vjetëve", date: "01.02.2024", type: "video" },
    { id: 6, title: "Turneu dimëror", date: "15.01.2024", type: "photo" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-ultras text-4xl md:text-5xl mb-4 ultras-heading text-primary">
            GALERIA
          </h2>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Momentet më të bukura të komunitetit tonë ultras. Çdo ndeshje, çdo koreografi, 
            çdo moment pasioni është regjistruar përgjithmonë në zemrat tona.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden bg-card/50 border-primary/20 hover:border-primary/50 transition-ultras hover:shadow-glow cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-gradient-dark relative overflow-hidden">
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="w-16 h-16 text-primary/60 group-hover:text-primary transition-ultras" />
                  ) : (
                    <Camera className="w-16 h-16 text-primary/60 group-hover:text-primary transition-ultras" />
                  )}
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-ultras"></div>
                
                {/* Type indicator */}
                <div className="absolute top-3 right-3">
                  <div className="bg-primary/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white">
                    {item.type === 'video' ? 'VIDEO' : 'FOTO'}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-ultras">
                  {item.title}
                </h3>
                <div className="flex items-center text-foreground/60 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="ultras-outline" size="lg">
            <Camera className="w-5 h-5 mr-2" />
            SHIKO TË GJITHA
          </Button>
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-gradient-dark rounded-lg p-8 text-center">
          <h3 className="font-ultras text-2xl text-primary mb-4">DËRGO FOTOGRAFITË E TUA</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Ke një fotografi të shkëlqyer nga ndeshja apo nga tubimi ynë? 
            Na e dërgo dhe do të jetë pjesë e galerisë sonë zyrtare!
          </p>
          <Button variant="ultras">
            DËRGO FOTO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;