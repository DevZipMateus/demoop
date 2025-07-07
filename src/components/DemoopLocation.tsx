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
    <section id="location" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 text-demoop-primary tracking-tight leading-tight">
          Nossa Localização
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto mb-8 sm:mb-12 text-muted-foreground font-light tracking-wide leading-relaxed">
          Visite nossa loja e conheça pessoalmente nossos produtos
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Informações de Contato */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          <Card className="bg-gradient-to-br from-demoop-lightgreen/50 to-white border-demoop-green/20 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-demoop-primary mb-4 sm:mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-demoop-green rounded-full flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-demoop-primary mb-1 text-sm sm:text-base">Endereço</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Av. Inocente Pagnan, 255<br />
                      Centro, Morro da Fumaça - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-demoop-blue rounded-full flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold text-demoop-blue mb-1 text-sm sm:text-base">Telefone/WhatsApp</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">(48) 99998-2838</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-demoop-primary rounded-full flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-demoop-primary mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">demoop@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-demoop-green to-demoop-blue rounded-full flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold text-demoop-primary mb-1 text-sm sm:text-base">Redes Sociais</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Instagram: @demooplimpeza<br />
                      Facebook: Demoop Demoop
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-demoop-green hover:bg-demoop-darkgreen text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1"
            >
              💬 Fale Conosco
            </Button>
            <Button 
              onClick={handleMapClick}
              variant="outline"
              className="border-demoop-blue text-demoop-blue hover:bg-demoop-blue hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 flex-1"
            >
              🗺️ Ver no Mapa
            </Button>
          </div>
        </div>

        {/* Mapa */}
        <div className="relative order-1 lg:order-2">
          <div className="bg-gradient-to-br from-demoop-lightgreen/30 to-demoop-lightblue/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg border border-demoop-green/20">
            <div 
              onClick={handleMapClick}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl cursor-pointer group hover:shadow-2xl transition-all duration-300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.2744985577756!2d-49.16326442488585!3d-28.64775428240598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521f5b5b5b5b5b5%3A0x0!2sAv.%20Inocente%20Pagnan%2C%20255%20-%20Centro%2C%20Morro%20da%20Fuma%C3%A7a%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl sm:rounded-2xl transition-all duration-300 group-hover:scale-105 sm:h-[300px]"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                  <span className="text-demoop-primary font-semibold text-sm sm:text-base">Clique para ver no Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <div className="bg-gradient-to-r from-demoop-green/10 to-demoop-blue/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-demoop-green/20">
          <h3 className="text-xl sm:text-2xl font-semibold text-demoop-primary mb-3 sm:mb-4">
            Horário de Funcionamento
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold text-demoop-blue mb-2 text-sm sm:text-base">Segunda a Sexta</h4>
              <p className="text-muted-foreground text-sm sm:text-base">08:00 às 18:00</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-demoop-green mb-2 text-sm sm:text-base">Sábados</h4>
              <p className="text-muted-foreground text-sm sm:text-base">08:00 às 12:00</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            * Horários podem variar em feriados
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoopLocation;