import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store, Heart, Tag, Star } from "lucide-react";
import { useState } from "react";
import bluza1 from "@/assets/gallery/bluza1.jfif";
import delta from "@/assets/gallery/delta.jfif"

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Të gjitha");

  const products = [
    {
      id: 1,
      name: "Bluzë HAJDUÇT",
      price: 35,
      originalPrice: 45,
      image: bluza1,
      category: "Veshje",
      description: "Fanellë zyrtare me emblemin e grupit",
      badge: "Bestseller",
      inStock: true
    },
    {
      id: 2,
      name: "Bluzë DELTA",
      price: 28,
      image: delta,
      category: "Veshje",
      description: "Bluzë DELTA",
      badge: "New",
      inStock: true
    },
    // {
    //   id: 3,
    //   name: "Mbajtëse Çelësash",
    //   price: 800,
    //   image: "/placeholder.svg",
    //   category: "Aksesorë",
    //   description: "Mbajtëse metalike me logo",
    //   inStock: true
    // },
    // {
    //   id: 4,
    //   name: "Pullë Vintage",
    //   price: 1200,
    //   image: "/placeholder.svg",
    //   category: "Aksesorë",
    //   description: "Pullë me dizajn klasik",
    //   inStock: true
    // },
    // {
    //   id: 5,
    //   name: "T-Shirt Ultra",
    //   price: 2500,
    //   image: "/placeholder.svg",
    //   category: "Veshje",
    //   description: "T-shirt me print ultras",
    //   inStock: true
    // },
    // {
    //   id: 6,
    //   name: "Kapele Kombëtare",
    //   price: 2000,
    //   image: "/placeholder.svg",
    //   category: "Aksesorë",
    //   description: "Kapele me ngjyrat e kuq e zi",
    //   inStock: false
    // },
    // {
    //   id: 7,
    //   name: "Hoodie HAJDUÇT",
    //   price: 5500,
    //   originalPrice: 6500,
    //   image: "/placeholder.svg",
    //   category: "Veshje",
    //   description: "Hoodie e rehatshme për dimër",
    //   badge: "Sale",
    //   inStock: true
    // },
    // {
    //   id: 8,
    //   name: "Sticker Pack",
    //   price: 500,
    //   image: "/placeholder.svg",
    //   category: "Aksesorë",
    //   description: "Paketë me 10 stikera të ndryshme",
    //   inStock: true
    // }
  ];

  const categories = ["Të gjitha", "Veshje", "Aksesorë"];

  const filteredProducts = selectedCategory === "Të gjitha"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('sq-AL')} EUR`;
  };

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-ultras text-4xl md:text-5xl mb-4 ultras-heading text-primary">
            SHOP
          </h2>
          <div className="w-24 h-1 bg-gradient-ultras mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Mbijetona zyrtare me emblemin e grupit. Çdo produkt është krijuar me dashuri për ultrasit e vërtetë.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "ultras" : "ultras-ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              <Store className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden bg-card/50 border-primary/20 hover:border-primary/50 transition-ultras hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-dark overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Badges */}
                {product.badge && (
                  <div className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-bold text-white ${product.badge === "Bestseller" ? "bg-primary" :
                    product.badge === "New" ? "bg-green-600" :
                      "bg-red-600"
                    }`}>
                    {product.badge}
                  </div>
                )}

                {/* Out of Stock Overlay */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JASHTË STOKUT</span>
                  </div>
                )}

                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-foreground/60 font-semibold">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="text-xs text-foreground/60">4.8</span>
                  </div>
                </div>

                <h3 className="font-ultras text-lg text-primary mb-2 group-hover:ultras-glow transition-ultras">
                  {product.name}
                </h3>

                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bold text-xl text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-foreground/50 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  variant="ultras"
                  className="w-full"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "BLEJ" : "JASHTË STOKUT"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Shop Info Section */}
        <div className="bg-card/30 rounded-lg p-8 border border-primary/20">
          <div className="text-center max-w-3xl mx-auto">
            <Store className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-ultras text-2xl text-primary mb-4">PËR PRODUKTET</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Çdo produkt që blejmë në shop është një mbështetje për grupin tonë.
              Produktet tona janë krijuar me cilësi të lartë dhe dizajn unik që pasqyron
              identitetin dhe pasionin e ultrasit të vërtetë.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-ultras rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Cilësi Premium</h4>
                <p className="text-sm text-foreground/70">
                  Materiale të zgjedhura me kujdes
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-ultras rounded-full flex items-center justify-center mx-auto mb-3">
                  <Tag className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Çmime Të Drejta</h4>
                <p className="text-sm text-foreground/70">
                  Mbështetje për aktivitetet e grupit
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-ultras rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Dorëzim i Shpejtë</h4>
                <p className="text-sm text-foreground/70">
                  Në të gjithë Kosovën dhe Maqedoninë
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

