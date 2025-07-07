import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DemoopLocation = () => {
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/47p6aNKEeaeECWrW9?g_st=ipc', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548999982838?text=Olá!%20Gostaria%20de%20visitar%20a%20loja%20Demoop.', '_blank');
  };

  return (
    <section id="location" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="section-title text-demoop-primary">
          Nossa Localização
        </h2>
        <p className="section-subtitle text-muted-foreground">
          Visite nossa loja e conheça pessoalmente nossos produtos
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Informações de Contato */}
        <div className="space-y-8">
          <Card className="bg-gradient-to-br from-demoop-lightgreen/50 to-white border-demoop-green/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-demoop-primary mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-demoop-green rounded-full flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-demoop-primary mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Inocente Pagnan, 255<br />
                      Centro, Morro da Fumaça - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-demoop-blue rounded-full flex items-center justify-center text-white text-xl">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold text-demoop-blue mb-1">Telefone/WhatsApp</h4>
                    <p className="text-muted-foreground">(48) 99998-2838</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-demoop-primary rounded-full flex items-center justify-center text-white text-xl">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-demoop-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">demoop@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-demoop-green to-demoop-blue rounded-full flex items-center justify-center text-white text-xl">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold text-demoop-primary mb-1">Redes Sociais</h4>
                    <p className="text-muted-foreground">
                      Instagram: @demooplimpeza<br />
                      Facebook: Demoop Demoop
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-demoop-green hover:bg-demoop-darkgreen text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1"
            >
              💬 Fale Conosco
            </Button>
            <Button 
              onClick={handleMapClick}
              variant="outline"
              className="border-demoop-blue text-demoop-blue hover:bg-demoop-blue hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 flex-1"
            >
              🗺️ Ver no Mapa
            </Button>
          </div>
        </div>

        {/* Mapa */}
        <div className="relative">
          <div className="bg-gradient-to-br from-demoop-lightgreen/30 to-demoop-lightblue/30 rounded-3xl p-8 shadow-lg border border-demoop-green/20">
            <div 
              onClick={handleMapClick}
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group hover:shadow-2xl transition-all duration-300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.2744985577756!2d-49.16326442488585!3d-28.64775428240598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521f5b5b5b5b5b5%3A0x0!2sAv.%20Inocente%20Pagnan%2C%20255%20-%20Centro%2C%20Morro%20da%20Fuma%C3%A7a%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl transition-all duration-300 group-hover:scale-105"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <span className="text-demoop-primary font-semibold">Clique para ver no Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-demoop-green/10 to-demoop-blue/10 rounded-3xl p-8 shadow-lg border border-demoop-green/20">
          <h3 className="text-2xl font-semibold text-demoop-primary mb-4">
            Horário de Funcionamento
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold text-demoop-blue mb-2">Segunda a Sexta</h4>
              <p className="text-muted-foreground">08:00 às 18:00</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-demoop-green mb-2">Sábados</h4>
              <p className="text-muted-foreground">08:00 às 12:00</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * Horários podem variar em feriados
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoopLocation;