import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Play, Calendar, Upload } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import hajductLogo from "@/assets/gallery/hajduct-logo.png";
import ultrasHero from "@/assets/gallery/ultras-hero.jpg";
import shalala from "@/assets/gallery/shalala.png";
import west from "@/assets/gallery/west.jfif"
import KFHAJDUK from "@/assets/gallery/KFHAJDUK.jpg";
import vspcinja from "@/assets/gallery/vspcinja.jpg";
import dasempre from "@/assets/gallery/dasempre.jpg";
import { title } from "process";
const Gallery = () => {
  const isAdmin = true; // This should come from your auth system
  const [activeGallery, setActiveGallery] = useState<'club' | 'national' | 'all'>('national');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const photos = [

    {
      id: 3,
      title: "Paraqitje për Kombëtaren",
      date: "08.06.2025",
      type: "photo",
      category: "national",
      image: dasempre
    },
    {
      id: 3,
      title: "Paraqitje kunder Anglisë",
      data: "18.11.2025",
      type: "photo",
      category: "national",
      image: shalala
    },
    {
      id: 4,
      title: "Grumbullimi",
      date: "18.11.2025",
      type: "photo",
      category: "national",
      image: west
    }
  ];

  const filteredPhotos = activeGallery === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeGallery);

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

          {/* Gallery Type Selector */}
          <div className="flex justify-center gap-4 mt-8">
            {/* <Button
              variant={activeGallery === 'club' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveGallery('club')}
              className={`
                transition-all duration-300
                ${activeGallery === 'club'
                  ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                  : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600/10'
                }
              `}
            >
              PARAQITJET PER KLUBIN
            </Button> */}
            <Button
              variant={activeGallery === 'national' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveGallery('national')}
              className={`
                transition-all duration-300
                ${activeGallery === 'national'
                  ? 'bg-primary hover:bg-primary/90 text-white'
                  : 'border-primary text-primary hover:bg-primary/10'
                }
              `}
            >
              PARAQITJET PER KOMBËTAREN
            </Button>
          </div>


        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, index) => (
            <Card
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`
                group overflow-hidden bg-card/50 hover:shadow-glow cursor-pointer animate-slide-up
                ${item.category === 'club'
                  ? 'border-cyan-600/20 hover:border-cyan-600/50'
                  : 'border-primary/20 hover:border-primary/50'
                }
                transition-ultras
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-gradient-dark relative overflow-hidden">
                {/* Actual image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className={`
                  absolute inset-0 bg-gradient-to-br flex items-center justify-center
                  ${item.category === 'club'
                    ? 'from-cyan-600/20 to-cyan-600/5'
                    : 'from-primary/20 to-primary/5'
                  }
                `}>
                  {item.type === 'video' ? (
                    <Play className={`
                      w-16 h-16 transition-ultras
                      ${item.category === 'club'
                        ? 'text-cyan-600/60 group-hover:text-cyan-600'
                        : 'text-primary/60 group-hover:text-primary'
                      }
                    `} />
                  ) : (
                    <Camera className={`
                      w-16 h-16 transition-ultras
                      ${item.category === 'club'
                        ? 'text-cyan-600/60 group-hover:text-cyan-600'
                        : 'text-primary/60 group-hover:text-primary'
                      }
                    `} />
                  )}
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-ultras"></div>

                {/* Type indicator */}
                <div className="absolute top-3 right-3">
                  <div className={`
                    backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white
                    ${item.category === 'club' ? 'bg-cyan-600/90' : 'bg-primary/90'}
                  `}>
                    {item.type === 'video' ? 'VIDEO' : 'FOTO'}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className={`
                  font-bold text-lg mb-2 transition-ultras
                  ${item.category === 'club'
                    ? 'text-foreground group-hover:text-cyan-600'
                    : 'text-foreground group-hover:text-primary'
                  }
                `}>
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

        {/* Call to action - Event Proposal Section */}
        {true && (
          <div className="mt-16 bg-gradient-dark rounded-lg p-8 text-center">
            <h3 className="font-ultras text-2xl text-primary mb-4">PROPONO NJË NGJARJE</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Ke një ide për një tubim apo ngjarje? Na trego ku dhe kur,
              dhe ne do ta organizojmë së bashku!
            </p>
            <Link to="/propose-event">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 text-lg hover:scale-105 transition-all duration-300 shadow-glow"
              >
                PROPONO NJË NGJARJE
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Image Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-ultras text-primary">
                  {selectedImage.title}
                </DialogTitle>
              </DialogHeader>
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 flex items-center justify-between text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedImage.date}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-white ${selectedImage.category === 'club' ? 'bg-cyan-600' : 'bg-primary'
                    }`}>
                    {selectedImage.category === 'club' ? 'KLUBI' : 'KOMBËTARJA'}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;