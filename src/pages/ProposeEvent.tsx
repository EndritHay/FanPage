import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

// List of European countries
const europeanCountries = [
  "Preshevë",
  "Bujanoc",
  "Prishtinë",
  "Gjilan",
  "Prizren",
  "Gjakovë",
  "Pejë",
  "Mitrovicë",
  "Tiranë",
  "Vlorë",
  "Shkodër",
  "Sarandë",
  "Selanik",
  "Gumenicë",
  "Tetovë",
  "Kumanovë",
  "Shkup",
  "Gostivar",
  "Manastir",
  "Dibër",
  "Ulqin",
  "Tivar",
  "Plavë",
  "Guci",
  "Pazar i Ri",

].sort();

const ProposeEvent = () => {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      ...formData,
      date: date ? format(date, 'PPP') : null,
    });
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-ultras text-primary mb-8 text-center">
          PROPONO NJË NGJARJE
        </h1>
        
        <Card className="p-6 bg-card/50 border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Titulli i Ngjarjes
              </label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Shkruaj titullin e ngjarjes..."
                className="bg-background"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Përshkrimi
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Përshkruaj ngjarjen..."
                className="bg-background min-h-[100px]"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Qyteti
              </label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between bg-background"
                  >
                    {formData.location || "Zgjidh një qytet..."}
                    <MapPin className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Kërko një qytet..." className="h-9" />
                      <CommandEmpty>Nuk u gjet asnjë qytet.</CommandEmpty>
                    <CommandGroup className="max-h-[300px] overflow-auto">
                      {europeanCountries.map((country) => (
                        <CommandItem
                          key={country}
                          value={country}
                          onSelect={(currentValue) => {
                            setFormData(prev => ({ ...prev, location: currentValue }));
                            setOpen(false);
                          }}
                        >
                          {country}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Data
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal bg-background',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Zgjidh një datë</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
            >
              DËRGO PROPOZIMIN
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProposeEvent;