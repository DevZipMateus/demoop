
import React, { useState, useEffect } from 'react';
import { products } from '@/data/products';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="catalogo" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-demoop-lightgreen/10 to-demoop-lightblue/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-demoop-primary mb-4">
            Catálogo de Produtos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha completa de produtos de limpeza
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-demoop-green/20">
            <img
              src={products[currentIndex].image}
              alt={`Produto R$ ${products[currentIndex].price}`}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop';
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
            onClick={() => window.location.href = '/catalogo'}
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
