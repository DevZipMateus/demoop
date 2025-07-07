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
    <section id="services" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="section-title text-demoop-primary">
          Nossos Serviços
        </h2>
        <p className="section-subtitle text-muted-foreground">
          Soluções completas em produtos de limpeza para todos os segmentos
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="group bg-white/80 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          >
            <CardHeader className="text-center pb-4">
              <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                {service.icon}
              </div>
              <CardTitle className="text-xl text-demoop-primary group-hover:text-demoop-blue transition-colors duration-300">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-demoop-green/10 to-demoop-blue/10 rounded-3xl p-8 lg:p-12 border border-demoop-green/20">
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold text-demoop-primary mb-4">
            Por que escolher a Demoop?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-semibold text-demoop-primary mb-2">Qualidade</h4>
              <p className="text-sm text-muted-foreground">Produtos selecionados e testados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h4 className="font-semibold text-demoop-blue mb-2">Praticidade</h4>
              <p className="text-sm text-muted-foreground">Entrega rápida e eficiente</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-semibold text-demoop-primary mb-2">Preço Justo</h4>
              <p className="text-sm text-muted-foreground">Melhores preços do mercado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-demoop-blue mb-2">Atendimento</h4>
              <p className="text-sm text-muted-foreground">Suporte personalizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoopServices;