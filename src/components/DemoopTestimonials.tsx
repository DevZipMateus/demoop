import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const DemoopTestimonials = () => {
  const testimonials = [
    {
      name: "Valdete",
      text: "Demoop nosso shopping da limpeza, tudo que você procura para uma limpeza eficiente você encontra!",
      rating: 5
    },
    {
      name: "Maria",
      text: "Você encontra sempre produtos maravilhosos para auxiliar nosso dia a dia!",
      rating: 5
    },
    {
      name: "Joana", 
      text: "Melhores panos para limpeza você encontra aqui!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl mx-auto bg-gradient-to-br from-demoop-lightblue/20 to-demoop-lightgreen/20">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 text-demoop-primary tracking-tight leading-tight">
          O que nossos clientes dizem
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto mb-8 sm:mb-12 text-muted-foreground font-light tracking-wide leading-relaxed">
          Depoimentos reais de quem confia na qualidade Demoop
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index}
            className="bg-white/90 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
          >
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-demoop-green to-demoop-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-lg sm:text-2xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-demoop-primary">
                  {testimonial.name}
                </h3>
              </div>
              
              <div className="mb-4 sm:mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-muted-foreground text-base sm:text-lg leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-demoop-green/20 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-demoop-primary mb-3 sm:mb-4">
            Seja nosso próximo cliente satisfeito!
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">
            Junte-se às centenas de clientes que já confiam na qualidade dos nossos produtos.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-demoop-green">9</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-demoop-blue">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-demoop-primary">24h</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Atendimento disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoopTestimonials;