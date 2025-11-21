import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Lock, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log('Attempting login with:', formData);
      
      // First check if the server is reachable
      try {
        const testResponse = await fetch('http://localhost:5000/api/test');
        if (!testResponse.ok) {
          throw new Error('Server is not responding properly');
        }
        console.log('Server is reachable');
      } catch (error) {
        console.error('Server connection test failed:', error);
        throw new Error('Nuk mund të lidhet me serverin. Ju lutemi kontrolloni nëse serveri është duke punuar.');
      }
      
      // Proceed with login
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Log the raw response for debugging
      console.log('Raw response:', response);

      let data;
      const textResponse = await response.text();
      console.log('Response text:', textResponse);
      
      try {
        data = JSON.parse(textResponse);
      } catch (error) {
        console.error('Failed to parse response:', error);
        throw new Error('Përgjigja e serverit nuk është e vlefshme');
      }
      
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      console.log('Login successful:', data);
      
      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Show success toast
      toast({
        title: "Mirë se erdhe!",
        description: `Kyçja u krye me sukses, ${data.user.name}!`,
      });
      
      // Navigate to home
      setTimeout(() => navigate('/'), 500);
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        variant: "destructive",
        title: "Gabim në kyçje",
        description: error.message || 'Ka ndodhur një gabim. Ju lutemi provoni përsëri.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-md">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-ultras text-primary mb-4">
            KYÇU
          </h1>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
        </div>

        {/* Login Form */}
        <Card className="p-6 bg-card/50 border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 animate-shimmer" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="pl-10 bg-background"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Fjalëkalimi
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="••••••••"
                  className="pl-10 bg-background"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? 'DUKE U KYÇUR...' : 'KYÇU'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Nuk keni llogari?{' '}
            <Button 
              variant="link" 
              className="text-primary p-0 h-auto font-semibold hover:text-primary/80"
              onClick={() => navigate('/join')}
            >
              Regjistrohu
            </Button>
          </div>

          <Button 
            variant="ghost" 
            className="mt-4 w-full"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kthehu në faqen kryesore
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Login;
