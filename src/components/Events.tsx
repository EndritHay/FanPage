import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Flag } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Derbiu - Hajduk kundër Dinamos",
      date: "15.04.2024",
      time: "20:00",
      location: "Stadiumi Poljud",
      type: "Ndeshje",
      description: "Derbiu më i madh i sezonit! Të gjithë në Poljud për të mbështetur tanët!",
      attendees: 245
    },
    {
      id: 2,
      title: "Koreografia 'Zemra e Kuqe'",
      date: "20.04.2024", 
      time: "18:00",
      location: "Tubim - Kafeja Central",
      type: "Përgatitje",
      description: "Përgatitje e koreografisë së re për finalin e kupës. Na duhen të gjitha duart!",
      attendees: 89
    },
    {
      id: 3,
      title: "Transferta - Split away",
      date: "28.04.2024",
      time: "16:00", 
      location: "Stacioni i autobusëve",
      type: "Transfertë",
      description: "Transport i organizuar për transfertën në Split. Regjistrimi i detyrueshëm!",
      attendees: 156
    }
  ];

  const pastEvents = [
    {
      title: "25 vjetori i Hajduçt",
      date: "01.03.2024",
      description: "Festimi i një çereku shekulli të ekzistencës së grupit tonë."
    },
    {
      title: "Turneu dimëror",
      date: "15.02.2024", 
      description: "Turneu tradicional në organizimin e grupeve ultras."
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-ultras text-4xl md:text-5xl mb-4 ultras-heading text-primary">
            NGJARJET
          </h2>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ndiqni ngjarjet tona të ardhshme dhe bashkohuni me grupin. 
            Çdo ngjarje është një mundësi për të treguar pasionin tonë!
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="font-ultras text-2xl text-primary mb-8 flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            NGJARJET E ARDHSHME
          </h3>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id}
                className="p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-ultras hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gradient-ultras px-3 py-1 rounded-full text-white text-xs font-bold">
                        {event.type}
                      </div>
                      <h3 className="font-bold text-xl text-primary">
                        {event.title}
                      </h3>
                    </div>
                    
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-foreground/60">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-foreground/60">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-foreground/60">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 lg:min-w-[200px]">
                    <div className="text-center">
                      <div className="flex items-center text-foreground/60 mb-2">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} të regjistruar
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ultras">
                        REGJISTROHU
                      </Button>
                      <Button variant="ultras-outline" size="icon">
                        <Flag className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-ultras text-2xl text-primary mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6" />
              NGJARJET E KALUARA
            </h3>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-card/30 border-primary/10"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground">{event.title}</h4>
                    <span className="text-xs text-foreground/60">{event.date}</span>
                  </div>
                  <p className="text-sm text-foreground/70">{event.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Event submission */}
          <div className="bg-gradient-dark rounded-lg p-6">
            <h3 className="font-ultras text-xl text-primary mb-4">PROPONO NJË NGJARJE</h3>
            <p className="text-foreground/80 mb-6 text-sm">
              Ke një ide për një ngjarje të re? Po organizon diçka interesante? 
              Na ndaj me ne dhe do të publikohet!
            </p>
            <Button variant="ultras" className="w-full">
              DËRGO PROPOZIM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;