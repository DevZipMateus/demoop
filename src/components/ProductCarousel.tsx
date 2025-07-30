
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '@/data/products';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  console.log('ProductCarousel renderizando com', products.length, 'produtos');

  useEffect(() => {
    if (products.length === 0) {
      console.warn('Nenhum produto encontrado para o carrossel');
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCatalogoClick = () => {
    navigate('/catalogo');
  };

  // Se não há produtos, mostrar uma mensagem de fallback
  if (!products || products.length === 0) {
    return (
      <section id="produtos-preview" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-demoop-lightgreen/10 to-demoop-lightblue/10">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-demoop-primary mb-4">
              Prévia dos Produtos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Produtos em carregamento...
            </p>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={handleCatalogoClick}
              className="bg-demoop-primary hover:bg-demoop-darkgreen text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="produtos-preview" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-demoop-lightgreen/10 to-demoop-lightblue/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-demoop-primary mb-4">
            Prévia dos Produtos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos produtos de limpeza
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-demoop-green/20">
            <img
              src={products[currentIndex]?.image || '/placeholder.svg'}
              alt={`Produto ${products[currentIndex]?.name || 'Desconhecido'}`}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
                console.warn('Erro ao carregar imagem do produto:', products[currentIndex]?.image);
              }}
            />
          </div>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {products.slice(0, 5).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex % 5 
                    ? 'bg-demoop-blue scale-125' 
                    : 'bg-demoop-green/30 hover:bg-demoop-green/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleCatalogoClick}
            className="bg-demoop-primary hover:bg-demoop-darkgreen text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
