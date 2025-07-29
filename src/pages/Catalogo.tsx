
import React from 'react';
import { Package } from 'lucide-react';
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

  const handleCompleteCatalogClick = () => {
    const message = `Olá! Gostaria de ver o catálogo completo de produtos da Demoop.`;
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

          {/* Nova seção do catálogo completo */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="bg-gradient-to-br from-demoop-lightgreen/20 to-demoop-lightblue/20 rounded-3xl p-8 sm:p-12 lg:p-16 border border-demoop-green/20 shadow-xl">
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-6 sm:mb-8">
                  <div className="text-6xl sm:text-7xl mb-4">🛍️</div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-demoop-primary mb-4">
                    Temos Muito Mais Produtos!
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                    Esta é apenas uma amostra do nosso catálogo. Temos centenas de produtos de limpeza, 
                    utensílios domésticos e muito mais. Entre em contato conosco para conhecer nossa 
                    linha completa e encontrar exatamente o que você precisa.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-demoop-green/20">
                    <div className="flex items-center justify-center mb-3">
                      <Package className="w-8 h-8 sm:w-10 sm:h-10 text-demoop-primary" />
                    </div>
                    <div className="text-2xl sm:text-3xl mb-2 font-bold text-demoop-blue">500+</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Produtos disponíveis</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-demoop-green/20">
                    <div className="text-2xl sm:text-3xl mb-2">🚚</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Entrega rápida</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-demoop-green/20">
                    <div className="text-2xl sm:text-3xl mb-2">⭐</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Melhor qualidade</div>
                  </div>
                </div>

                <button
                  onClick={handleCompleteCatalogClick}
                  className="group bg-gradient-to-r from-demoop-green to-demoop-darkgreen hover:from-demoop-darkgreen hover:to-demoop-green text-white font-bold text-lg sm:text-xl py-4 sm:py-6 px-8 sm:px-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <span>📱</span>
                    <span>Ver Catálogo Completo</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                  <div className="text-sm sm:text-base opacity-90 mt-1">
                    Fale conosco no WhatsApp
                  </div>
                </button>

                <p className="text-xs sm:text-sm text-muted-foreground mt-6 opacity-75">
                  * Resposta rápida garantida • Atendimento personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
