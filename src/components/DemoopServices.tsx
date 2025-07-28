
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DemoopServices = () => {
  const services = [
    {
      title: "Produtos de Limpeza",
      description: "Linha completa de produtos de limpeza de marcas nacionais e regionais reconhecidas pela qualidade e eficiência.",
      icon: "🧴",
      color: "from-demoop-green to-demoop-darkgreen"
    },
    {
      title: "Utensílios de Limpeza", 
      description: "Panos, esponjas, vassouras e diversos utensílios para uma limpeza prática e eficiente.",
      icon: "🧽",
      color: "from-demoop-blue to-demoop-darkblue"
    },
    {
      title: "Produtos Automotivos",
      description: "Produtos especializados para limpeza e cuidados automotivos, mantendo seu veículo sempre impecável.",
      icon: "🚗",
      color: "from-demoop-green to-demoop-blue"
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-4 text-demoop-primary tracking-tight leading-tight">
          Nossos Produtos
        </h2>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 text-muted-foreground font-light tracking-wide leading-relaxed">
          Soluções completas em produtos de limpeza para todos os segmentos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="group bg-white/80 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          >
            <CardHeader className="text-center pb-3 sm:pb-4 p-3 sm:p-4 lg:p-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                {service.icon}
              </div>
              <CardTitle className="text-base sm:text-lg lg:text-xl text-demoop-primary group-hover:text-demoop-blue transition-colors duration-300">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <p className="text-muted-foreground text-center leading-relaxed text-xs sm:text-sm lg:text-base">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-demoop-green/10 to-demoop-blue/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-demoop-green/20">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-demoop-primary mb-3 sm:mb-4">
            Por que escolher a Demoop?
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">⭐</div>
              <h4 className="font-semibold text-demoop-primary mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">Qualidade</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Produtos selecionados e testados</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">🚚</div>
              <h4 className="font-semibold text-demoop-blue mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">Praticidade</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Entrega rápida e eficiente</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">💰</div>
              <h4 className="font-semibold text-demoop-primary mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">Preço Justo</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Melhores preços do mercado</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">🤝</div>
              <h4 className="font-semibold text-demoop-blue mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">Atendimento</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Suporte personalizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoopServices;
