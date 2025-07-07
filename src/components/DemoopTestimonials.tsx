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
    <section id="testimonials" className="section-container bg-gradient-to-br from-demoop-lightblue/20 to-demoop-lightgreen/20">
      <div className="text-center mb-16">
        <h2 className="section-title text-demoop-primary">
          O que nossos clientes dizem
        </h2>
        <p className="section-subtitle text-muted-foreground">
          Depoimentos reais de quem confia na qualidade Demoop
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index}
            className="bg-white/90 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-demoop-green to-demoop-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-demoop-primary">
                  {testimonial.name}
                </h3>
              </div>
              
              <div className="mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-muted-foreground text-lg leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-demoop-green/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-demoop-primary mb-4">
            Seja nosso próximo cliente satisfeito!
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Junte-se às centenas de clientes que já confiam na qualidade dos nossos produtos.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-demoop-green">9</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-demoop-blue">100%</div>
              <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-demoop-primary">24h</div>
              <div className="text-sm text-muted-foreground">Atendimento disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoopTestimonials;