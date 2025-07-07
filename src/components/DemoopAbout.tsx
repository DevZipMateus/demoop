import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const DemoopAbout = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl mx-auto bg-gradient-to-br from-demoop-lightgreen/30 to-white">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 text-demoop-primary tracking-tight leading-tight">
          Sobre a Demoop
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto mb-8 sm:mb-12 text-muted-foreground font-light tracking-wide leading-relaxed">
          9 anos transformando a limpeza com qualidade e excelência
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
        <div className="space-y-6 order-2 lg:order-1">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Somos uma loja que revende vários produtos de limpeza tanto nacionais quanto regionais. 
              Trabalhamos há 9 anos nesse mercado oferecendo produtos e utensílios para limpeza prática e eficiente.
            </p>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
              Atendemos no varejo, empresas e pessoas físicas, sempre buscando oferecer a melhor 
              seleção de produtos que garantem qualidade e eficiência no dia a dia.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-demoop-green/20">
            <h3 className="text-lg sm:text-xl font-semibold text-demoop-primary mb-3">Nosso Slogan</h3>
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-demoop-blue italic">
              "A limpeza que faz a diferença"
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 order-1 lg:order-2">
          <Card className="bg-white/80 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-demoop-primary mb-3 sm:mb-4">Nossa Visão</h3>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                Ser reconhecida como a principal referência no fornecimento de produtos e utensílios de limpeza, 
                promovendo a excelência em qualidade e inovação.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-demoop-blue/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-demoop-blue mb-3 sm:mb-4">Nossa Missão</h3>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                Nosso compromisso é oferecer aos nossos clientes a melhor seleção de produtos de limpeza e utensílios, 
                garantindo qualidade e eficiência. Buscamos facilitar a vida cotidiana com soluções práticas que 
                promovem um ambiente limpo e saudável.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-demoop-green/20 hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-demoop-green rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl font-bold text-white">9</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-demoop-primary mb-2">Anos de Experiência</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Desde 2015 oferecendo produtos de qualidade</p>
        </div>

        <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-demoop-blue/20 hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-demoop-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <span className="text-xl sm:text-2xl font-bold text-white">100%</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-demoop-blue mb-2">Qualidade Garantida</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Produtos nacionais e regionais selecionados</p>
        </div>

        <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-demoop-green/20 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-demoop-green to-demoop-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-bold text-white">B2B+B2C</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-demoop-primary mb-2">Atendimento Completo</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Varejo, empresas e pessoas físicas</p>
        </div>
      </div>
    </section>
  );
};

export default DemoopAbout;