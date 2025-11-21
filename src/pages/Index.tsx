import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Shop from "@/components/Shop";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Shop />
      <Events />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
