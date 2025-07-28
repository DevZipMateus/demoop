
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DemoopHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548999982838?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Demoop.', '_blank');
  };

  const products = [
    {
      title: "Produtos de Limpeza",
      description: "Linha completa de produtos de limpeza de marcas nacionais e regionais",
      icon: "🧴",
      color: "from-demoop-green to-demoop-darkgreen"
    },
    {
      title: "Utensílios de Limpeza", 
      description: "Panos, esponjas, vassouras e diversos utensílios para limpeza",
      icon: "🧽",
      color: "from-demoop-blue to-demoop-darkblue"
    },
    {
      title: "Linha Automotiva",
      description: "Produtos especializados para limpeza e cuidados automotivos",
      icon: "🚗",
      color: "from-demoop-green to-demoop-blue"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-demoop-lightgreen/20 to-demoop-lightblue/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-2 sm:left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-demoop-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-2 sm:right-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-demoop-blue/10 rounded-full blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-demoop-green/5 to-demoop-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content Section - Left */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-4 lg:mb-6 opacity-0 animate-slide-up tracking-tight leading-tight">
              <span className="block text-demoop-primary">conheça</span>
              <span className="block text-demoop-blue">nossos produtos</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-foreground/80 mb-4 sm:mb-6 opacity-0 animate-slide-up animation-delay-200 font-light leading-relaxed">
              A limpeza que faz a diferença
            </p>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-muted-foreground mb-6 sm:mb-8 opacity-0 animate-slide-up animation-delay-300 leading-relaxed">
              10 anos oferecendo produtos e utensílios de limpeza nacionais e regionais. 
              Atendemos varejo, empresas e pessoas físicas com qualidade e eficiência.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 justify-center lg:justify-start opacity-0 animate-slide-up animation-delay-400">
              <Button onClick={() => scrollToSection('services')} className="bg-demoop-primary hover:bg-demoop-darkgreen text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Nossos Produtos
              </Button>
              <Button variant="outline" onClick={handleWhatsAppClick} className="border-demoop-blue text-demoop-blue hover:bg-demoop-blue hover:text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-full transition-all duration-300">
                Fale Conosco
              </Button>
            </div>
          </div>
          
          {/* Products Section - Right */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 opacity-0 animate-slide-up animation-delay-600 order-1 lg:order-2">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-102 hover:-translate-y-1"
              >
                <CardHeader className="p-3 sm:p-4 pb-2 sm:pb-3">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center text-lg sm:text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                      {product.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-sm sm:text-base lg:text-lg text-demoop-primary group-hover:text-demoop-blue transition-colors duration-300">
                        {product.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoopHero;
