import React from 'react';
import { Button } from '@/components/ui/button';

const DemoopHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548999982838?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Demoop.', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-demoop-lightgreen/20 to-demoop-lightblue/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-demoop-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-demoop-blue/10 rounded-full blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-demoop-green/5 to-demoop-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 opacity-0 animate-slide-up tracking-tight leading-tight">
              <span className="block text-demoop-primary">Demoop</span>
              <span className="block text-demoop-blue">Produtos de Limpeza</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-8 opacity-0 animate-slide-up animation-delay-200 font-light leading-relaxed">
              A limpeza que faz a diferença
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-10 opacity-0 animate-slide-up animation-delay-300 max-w-2xl mx-auto lg:mx-0">
              9 anos oferecendo produtos e utensílios de limpeza nacionais e regionais. 
              Atendemos varejo, empresas e pessoas físicas com qualidade e eficiência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-slide-up animation-delay-400">
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-demoop-primary hover:bg-demoop-darkgreen text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Nossos Produtos
              </Button>
              <Button 
                variant="outline"
                onClick={handleWhatsAppClick}
                className="border-demoop-blue text-demoop-blue hover:bg-demoop-blue hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
          
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-slide-up animation-delay-600">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-demoop-green/20 to-demoop-blue/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/dabf577d-abec-4c2f-aab4-f1a1c600dc29.png" 
                  alt="Demoop Logo" 
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-demoop-green to-demoop-blue rounded-full blur opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoopHero;