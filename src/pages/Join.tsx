import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Flag, Users, Heart, ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    phone: '',
    email: '',
    reason: ''
  });

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log('Form submitted:', formData);
    setStep(4); // Show success message
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-ultras text-primary mb-4">
            BASHKOHU ME NE
          </h1>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Bëhu pjesë e vëllazërisë sonë
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-background rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <Card className="p-6 bg-card/50 border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 animate-shimmer" />

          {step === 1 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Emri dhe Mbiemri
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Shkruaj emrin dhe mbiemrin..."
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Mosha
                </label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="Shkruaj moshën..."
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Qyteti
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Zgjidh qytetin...</option>
                  <optgroup label="Trojet">
                    <option value="Preshevë">Preshevë</option>
                    <option value="Bujanoc">Bujanoc</option>
                    <option value="Selanik">Selanik</option>
                    <option value="Gumenicë">Gumenicë</option>
                    <option value="Pazar i Ri">Pazar i Ri</option>
                  </optgroup>
                  <optgroup label="Kosova">
                    <option value="Prishtinë">Prishtinë</option>
                    <option value="Gjilan">Gjilan</option>
                    <option value="Prizren">Prizren</option>
                    <option value="Gjakovë">Gjakovë</option>
                    <option value="Pejë">Pejë</option>
                    <option value="Mitrovicë">Mitrovicë</option>
                  </optgroup>
                  <optgroup label="Shqipëria">
                    <option value="Tiranë">Tiranë</option>
                    <option value="Vlorë">Vlorë</option>
                    <option value="Shkodër">Shkodër</option>
                    <option value="Sarandë">Sarandë</option>
                  </optgroup>
                  <optgroup label="Maqedonia">
                    <option value="Tetovë">Tetovë</option>
                    <option value="Kumanovë">Kumanovë</option>
                    <option value="Shkup">Shkup</option>
                    <option value="Gostivar">Gostivar</option>
                    <option value="Manastir">Manastir</option>
                    <option value="Dibër">Dibër</option>
                  </optgroup>
                  <optgroup label="Mali i Zi">
                    <option value="Ulqin">Ulqin</option>
                    <option value="Tivar">Tivar</option>
                    <option value="Plavë">Plavë</option>
                    <option value="Guci">Guci</option>
                  </optgroup>
                </select>
              </div>
              <Button 
                onClick={handleNext}
                className="w-full bg-primary hover:bg-primary/90 animate-fade-in"
              >
                VAZHDO
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Numri i Telefonit
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Numri i telefonit..."
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="bg-background"
                />
              </div>
              <div className="flex gap-4">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  KTHEHU
                </Button>
                <Button 
                  onClick={handleNext}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  VAZHDO
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Pse dëshiron të bashkohesh me ne?
                </label>
                <Textarea
                  value={formData.reason}
                  onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
                  placeholder="Na trego pse dëshiron të jesh pjesë e grupit tonë..."
                  className="bg-background min-h-[150px]"
                />
              </div>
              <div className="flex gap-4">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  KTHEHU
                </Button>
                <Button 
                  onClick={handleSubmit}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  DËRGO
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8 space-y-6 animate-fade-in">
              <div className="animate-bounce">
                <Heart className="w-16 h-16 text-primary mx-auto" />
              </div>
              <h2 className="text-2xl font-ultras text-primary">
                FALEMINDERIT!
              </h2>
              <p className="text-foreground/80">
                Aplikimi juaj u dërgua me sukses. Do të ju kontaktojmë së shpejti!
              </p>
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="mt-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                KTHEHU NË FAQEN KRYESORE
              </Button>
            </div>
          )}
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center animate-fade-in">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Familja Jonë</h3>
            <p className="text-sm text-foreground/70">Bëhu pjesë e vëllazërisë</p>
          </div>
          <div className="text-center animate-fade-in">
            <Flag className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Pasioni</h3>
            <p className="text-sm text-foreground/70">Ndaj pasionin tënd për klubin dhe kombëtarin</p>
          </div>
          <div className="text-center animate-fade-in">
            <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Tradita</h3>
            <p className="text-sm text-foreground/70">Vazhdo traditën e ultrasve</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;