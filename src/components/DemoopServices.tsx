import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DemoopServices = () => {
  const services = [
    {
      title: "Produtos Nacionais",
      description: "Linha completa de produtos de limpeza de marcas nacionais reconhecidas pela qualidade e eficiência.",
      icon: "🇧🇷",
      color: "from-demoop-green to-demoop-darkgreen"
    },
    {
      title: "Produtos Regionais", 
      description: "Seleção especial de produtos regionais que atendem necessidades específicas da nossa região.",
      icon: "🏪",
      color: "from-demoop-blue to-demoop-darkblue"
    },
    {
      title: "Utensílios de Limpeza",
      description: "Panos, esponjas, vassouras e diversos utensílios para uma limpeza prática e eficiente.",
      icon: "🧽",
      color: "from-demoop-green to-demoop-blue"
    },
    {
      title: "Atendimento B2B",
      description: "Fornecimento especializado para empresas com produtos em grandes quantidades e preços especiais.",
      icon: "🏢",
      color: "from-demoop-blue to-demoop-green"
    },
    {
      title: "Varejo",
      description: "Atendimento personalizado para pessoas físicas com produtos para limpeza doméstica.",
      icon: "🏠",
      color: "from-demoop-darkgreen to-demoop-green"
    },
    {
      title: "Consultoria em Limpeza",
      description: "Orientação especializada para escolher os melhores produtos conforme sua necessidade.",
      icon: "💡",
      color: "from-demoop-darkblue to-demoop-blue"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 text-demoop-primary tracking-tight leading-tight">
          Nossos Serviços
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto mb-8 sm:mb-12 text-muted-foreground font-light tracking-wide leading-relaxed">
          Soluções completas em produtos de limpeza para todos os segmentos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="group bg-white/80 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          >
            <CardHeader className="text-center pb-4 p-4 sm:p-6">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                {service.icon}
              </div>
              <CardTitle className="text-lg sm:text-xl text-demoop-primary group-hover:text-demoop-blue transition-colors duration-300">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-muted-foreground text-center leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 bg-gradient-to-r from-demoop-green/10 to-demoop-blue/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-demoop-green/20">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-demoop-primary mb-4">
            Por que escolher a Demoop?
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⭐</div>
              <h4 className="font-semibold text-demoop-primary mb-1 sm:mb-2 text-sm sm:text-base">Qualidade</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Produtos selecionados e testados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🚚</div>
              <h4 className="font-semibold text-demoop-blue mb-1 sm:mb-2 text-sm sm:text-base">Praticidade</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Entrega rápida e eficiente</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">💰</div>
              <h4 className="font-semibold text-demoop-primary mb-1 sm:mb-2 text-sm sm:text-base">Preço Justo</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Melhores preços do mercado</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🤝</div>
              <h4 className="font-semibold text-demoop-blue mb-1 sm:mb-2 text-sm sm:text-base">Atendimento</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Suporte personalizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoopServices;