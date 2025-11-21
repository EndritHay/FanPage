import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Flag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      id: 2,
      title: "Mbledhja Anglisë!",
      date: "18.11.2025",
      time: "13:00",
      location: "Lokali West, Tiranë",
      type: "Ndeshje",
      description: "Ndeshja e fundit e Eleminatoreve për Botërorin 2026!",
      attendees: 15
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Ndeshja kunder shk!ve",
      date: "01.03.2024",
      time: "18:00",
      location: "Prishtinë",
      type: "Festim",
      description: "Ndeshja me e madhe e kesaj dekade!",
      attendees: 150
    },

  ];

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-800/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-ultras text-5xl md:text-6xl mb-6 ultras-heading text-primary">
            NGJARJET
          </h2>
          <div className="w-32 h-1.5 bg-gradient-ultras mx-auto mb-8 rounded-full shadow-glow"></div>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            Ndiqni paraqitjet tona të ardhshme dhe bashkohuni me grupin.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="font-ultras text-3xl text-primary mb-10 flex items-center gap-4 justify-center">
            <Sparkles className="w-8 h-8 animate-pulse" />
            NGJARJET E ARDHSHME
            <Sparkles className="w-8 h-8 animate-pulse" />
          </h3>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className="p-8 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-primary to-red-700 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg">
                        {event.type}
                      </div>
                      <h3 className="font-ultras text-2xl md:text-3xl text-primary">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-foreground/90 mb-6 leading-relaxed text-lg">
                      {event.description}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 text-foreground/80 bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/80 bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-semibold">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/80 bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-semibold">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-6 lg:min-w-[250px] bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-primary/20">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-foreground/80 mb-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-3xl font-ultras text-primary">{event.attendees}</span>
                      </div>
                      <div className="text-sm text-foreground/60 font-semibold">të regjistruar</div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                      <Button variant="ultras" className="w-full hover:scale-105 transition-transform duration-300 shadow-lg">
                        REGJISTROHU
                      </Button>
                      <Button variant="ultras-outline" size="icon" className="w-full hover:scale-105 transition-transform duration-300">
                        <Flag className="w-5 h-5 mr-2" />
                        SHPËRNDAJ
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events & Event Submission */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="font-ultras text-2xl text-primary mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6" />
              NGJARJET E KALUARA
            </h3>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <Card
                  key={event.id}
                  className="p-8 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-to-r from-primary to-red-700 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg">
                          {event.type}
                        </div>
                        <h3 className="font-ultras text-2xl md:text-3xl text-primary">
                          {event.title}
                        </h3>
                      </div>

                      <p className="text-foreground/90 mb-6 leading-relaxed text-lg">
                        {event.description}
                      </p>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 text-foreground/80 bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/80 bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                          <Clock className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/80 bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-6 lg:min-w-[250px] bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-primary/20">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 text-foreground/80 mb-3">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="text-3xl font-ultras text-primary">{event.attendees}</span>
                        </div>
                        <div className="text-sm text-foreground/60 font-semibold">kanë marrë pjesë</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Event submission */}
          <div className="bg-gradient-to-br from-primary/20 to-red-900/20 backdrop-blur-xl rounded-2xl p-8 border border-primary/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 self-start sticky top-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-ultras text-2xl text-primary mb-4">PROPONO NJË NGJARJE</h3>
              <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                Ke një ide për një ngjarje të re? Po organizon diçka interesante?
                Na ndaj me ne dhe do të publikohet!
              </p>
            </div>
            <Link to="/propose-event">
              <Button variant="ultras" className="w-full hover:scale-105 transition-transform duration-300 shadow-xl text-lg py-6">
                DËRGO PROPOZIM
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;