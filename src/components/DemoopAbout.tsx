import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const DemoopAbout = () => {
  return (
    <section id="about" className="section-container bg-gradient-to-br from-demoop-lightgreen/30 to-white">
      <div className="text-center mb-16">
        <h2 className="section-title text-demoop-primary">
          Sobre a Demoop
        </h2>
        <p className="section-subtitle text-muted-foreground">
          9 anos transformando a limpeza com qualidade e excelência
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              Somos uma loja que revende vários produtos de limpeza tanto nacionais quanto regionais. 
              Trabalhamos há 9 anos nesse mercado oferecendo produtos e utensílios para limpeza prática e eficiente.
            </p>
            <p className="text-foreground/80 text-base leading-relaxed">
              Atendemos no varejo, empresas e pessoas físicas, sempre buscando oferecer a melhor 
              seleção de produtos que garantem qualidade e eficiência no dia a dia.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-demoop-green/20">
            <h3 className="text-xl font-semibold text-demoop-primary mb-3">Nosso Slogan</h3>
            <p className="text-2xl font-light text-demoop-blue italic">
              "A limpeza que faz a diferença"
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-demoop-primary mb-4">Nossa Visão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Ser reconhecida como a principal referência no fornecimento de produtos e utensílios de limpeza, 
                promovendo a excelência em qualidade e inovação.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-demoop-blue/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-demoop-blue mb-4">Nossa Missão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Nosso compromisso é oferecer aos nossos clientes a melhor seleção de produtos de limpeza e utensílios, 
                garantindo qualidade e eficiência. Buscamos facilitar a vida cotidiana com soluções práticas que 
                promovem um ambiente limpo e saudável.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-demoop-green/20 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-demoop-green rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold text-white">9</span>
          </div>
          <h3 className="text-xl font-semibold text-demoop-primary mb-2">Anos de Experiência</h3>
          <p className="text-muted-foreground">Desde 2015 oferecendo produtos de qualidade</p>
        </div>

        <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-demoop-blue/20 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-demoop-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">100%</span>
          </div>
          <h3 className="text-xl font-semibold text-demoop-blue mb-2">Qualidade Garantida</h3>
          <p className="text-muted-foreground">Produtos nacionais e regionais selecionados</p>
        </div>

        <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-demoop-green/20 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-demoop-green to-demoop-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">B2B+B2C</span>
          </div>
          <h3 className="text-xl font-semibold text-demoop-primary mb-2">Atendimento Completo</h3>
          <p className="text-muted-foreground">Varejo, empresas e pessoas físicas</p>
        </div>
      </div>
    </section>
  );
};

export default DemoopAbout;