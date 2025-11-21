import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Flag, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useNavigate } from 'react-router-dom';

const cities = [
    { name: "Preshevë", region: "trojet", color: "bg-red-600" },
    { name: "Bujanoc", region: "trojet", color: "bg-red-600" },
    { name: "Prishtinë", region: "kosova", color: "bg-blue-600" },
    { name: "Gjilan", region: "kosova", color: "bg-blue-600" },
    { name: "Prizren", region: "kosova", color: "bg-blue-600" },
    { name: "Gjakovë", region: "kosova", color: "bg-blue-600" },
    { name: "Pejë", region: "kosova", color: "bg-blue-600" },
    { name: "Mitrovicë", region: "kosova", color: "bg-blue-600" },
    { name: "Tiranë", region: "shqiperia", color: "bg-primary" },
    { name: "Vlorë", region: "shqiperia", color: "bg-primary" },
    { name: "Shkodër", region: "shqiperia", color: "bg-primary" },
    { name: "Sarandë", region: "shqiperia", color: "bg-primary" },
    { name: "Selanik", region: "trojet", color: "bg-red-600" },
    { name: "Gumenicë", region: "trojet", color: "bg-red-600" },
    { name: "Tetovë", region: "maqedonia", color: "bg-yellow-600" },
    { name: "Kumanovë", region: "maqedonia", color: "bg-yellow-600" },
    { name: "Shkup", region: "maqedonia", color: "bg-yellow-600" },
    { name: "Gostivar", region: "maqedonia", color: "bg-yellow-600" },
    { name: "Manastir", region: "maqedonia", color: "bg-yellow-600" },
    { name: "Dibër", region: "maqedonia", color: "bg-yellow-600" },
    { name: "Ulqin", region: "mali-zi", color: "bg-green-600" },
    { name: "Tivar", region: "mali-zi", color: "bg-green-600" },
    { name: "Plavë", region: "mali-zi", color: "bg-green-600" },
    { name: "Guci", region: "mali-zi", color: "bg-green-600" },
    { name: "Pazar i Ri", region: "trojet", color: "bg-red-600" },
].sort((a, b) => a.name.localeCompare(b.name));

const regions = [
    { id: "shqiperia", name: "Shqipëria", color: "bg-primary" },
    { id: "kosova", name: "Kosova", color: "bg-blue-600" },
    { id: "maqedonia", name: "Maqedonia", color: "bg-yellow-600" },
    { id: "mali-zi", name: "Mali i Zi", color: "bg-green-600" },
    { id: "trojet", name: "Trojet", color: "bg-red-600" },
];

const ProposeEvent = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState<Date>();
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.location || !date) {
            setErrorMessage('Ju lutemi plotësoni të gjitha fushat!');
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:5000/api/events/propose', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    location: formData.location,
                    date: date.toISOString(),
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('✅ Event submitted:', data);
                setSubmitStatus('success');
                setFormData({ title: '', description: '', location: '' });
                setDate(undefined);
                setSelectedRegion(null);
                setTimeout(() => navigate('/'), 2000);
            } else {
                throw new Error(data.error || 'Failed to submit');
            }
        } catch (error) {
            console.error('❌ Error:', error);
            setErrorMessage(error instanceof Error ? error.message : 'Gabim në dërgim');
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredCities = selectedRegion
        ? cities.filter(city => city.region === selectedRegion)
        : cities;

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-ultras text-primary mb-8 text-center">
                    PROPONO NJË NGJARJE
                </h1>

                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                        <div>
                            <p className="font-semibold text-green-500">Propozimi u dërgua me sukses!</p>
                            <p className="text-sm text-foreground/70">Do të rishikojmë propozimin tuaj së shpejti.</p>
                        </div>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-3">
                        <AlertCircle className="w-6 h-6 text-red-500" />
                        <div>
                            <p className="font-semibold text-red-500">Gabim!</p>
                            <p className="text-sm text-foreground/70">{errorMessage}</p>
                        </div>
                    </div>
                )}

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Map Section */}
                    <Card className="p-6 bg-card/50 border-primary/20 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-center mb-6">Zgjidh Lokacionin</h2>

                            {/* Region Selection */}
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {regions.map((region) => (
                                    <Button
                                        key={region.id}
                                        variant="outline"
                                        className={cn(
                                            'relative overflow-hidden transition-all duration-300',
                                            selectedRegion === region.id ? region.color + ' text-white' : 'hover:bg-card'
                                        )}
                                        onClick={() => setSelectedRegion(region.id)}
                                    >
                                        <Flag className="w-4 h-4 mr-2" />
                                        {region.name}
                                    </Button>
                                ))}
                            </div>

                            {/* City Grid */}
                            <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto p-2">
                                {filteredCities.map((city) => (
                                    <Button
                                        key={city.name}
                                        variant="outline"
                                        className={cn(
                                            'transition-all duration-300',
                                            formData.location === city.name ? city.color + ' text-white' : 'hover:bg-card'
                                        )}
                                        onClick={() => setFormData(prev => ({ ...prev, location: city.name }))}
                                    >
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {city.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Form Section */}
                    <Card className="p-6 bg-card/50 border-primary/20 order-1 lg:order-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="text-sm font-medium mb-2 block">
                                    Titulli i Ngjarjes *
                                </label>
                                <Input
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    placeholder="Shkruaj titullin e ngjarjes..."
                                    className="bg-background"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">
                                    Përshkrimi *
                                </label>
                                <Textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                    placeholder="Përshkruaj ngjarjen..."
                                    className="bg-background min-h-[100px]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">
                                    Qyteti i Zgjedhur *
                                </label>
                                <div className="flex items-center space-x-2 p-2 bg-background rounded-md border">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span className="text-foreground">
                                        {formData.location || "Nuk është zgjedhur"}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">
                                    Data *
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
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Duke dërguar...' : 'DËRGO PROPOZIMIN'}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProposeEvent;
