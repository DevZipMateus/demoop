
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { products } from '@/data/products';

const Catalogo = () => {
  const cleanPrice = (price: string) => {
    return price.replace(/\s*-\s*\d+$/, '');
  };

  const handleWhatsAppClick = (price: string) => {
    const cleanedPrice = cleanPrice(price);
    const message = `Olá! Gostaria de mais informações sobre o produto de R$ ${cleanedPrice}.`;
    window.open(`https://wa.me/5548999982838?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-28 sm:pt-32 lg:pt-36">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-demoop-primary mb-4">
              Catálogo de Produtos
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra nossa linha completa de produtos de limpeza com os melhores preços
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-demoop-green/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={`Produto R$ ${cleanPrice(product.price)}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-demoop-blue mb-2">
                    R$ {cleanPrice(product.price)}
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(product.price)}
                    className="w-full bg-demoop-primary hover:bg-demoop-darkgreen text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md"
                  >
                    Consultar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
