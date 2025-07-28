
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
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-demoop-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-4 sm:right-16 w-32 h-32 sm:w-40 sm:h-40 bg-demoop-blue/10 rounded-full blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-demoop-green/5 to-demoop-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Content Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-6 opacity-0 animate-slide-up tracking-tight leading-tight">
            <span className="block text-demoop-primary">conheça</span>
            <span className="block text-demoop-blue">nossos produtos</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-foreground/80 mb-6 sm:mb-8 opacity-0 animate-slide-up animation-delay-200 font-light leading-relaxed">
            A limpeza que faz a diferença
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 opacity-0 animate-slide-up animation-delay-300 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            10 anos oferecendo produtos e utensílios de limpeza nacionais e regionais. 
            Atendemos varejo, empresas e pessoas físicas com qualidade e eficiência.
          </p>
          
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center opacity-0 animate-slide-up animation-delay-400 mb-12 sm:mb-16">
            <Button onClick={() => scrollToSection('services')} className="bg-demoop-primary hover:bg-demoop-darkgreen text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Nossos Produtos
            </Button>
            <Button variant="outline" onClick={handleWhatsAppClick} className="border-demoop-blue text-demoop-blue hover:bg-demoop-blue hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300">
              Fale Conosco
            </Button>
          </div>
        </div>
        
        {/* Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 opacity-0 animate-slide-up animation-delay-600">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group bg-white/80 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4 p-4 sm:p-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {product.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl text-demoop-primary group-hover:text-demoop-blue transition-colors duration-300">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground text-center leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoopHero;
