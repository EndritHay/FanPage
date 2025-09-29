import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Chants from "@/components/Chants";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Chants />
      <Events />
      <Footer />
    </main>
  );
};

export default Index;
