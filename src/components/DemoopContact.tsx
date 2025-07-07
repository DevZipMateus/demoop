import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const DemoopContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const message = `Olá! Meu nome é ${formData.name}.

📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}

Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/5548999982838?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para enviar sua mensagem via WhatsApp.",
    });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Resposta rápida pelo WhatsApp",
      icon: "💬",
      action: () => window.open('https://wa.me/5548999982838?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Demoop.', '_blank'),
      color: "from-green-500 to-green-600"
    },
    {
      title: "Telefone",
      description: "(48) 99998-2838",
      icon: "📞",
      action: () => window.open('tel:+5548999982838', '_self'),
      color: "from-demoop-blue to-demoop-darkblue"
    },
    {
      title: "Email",
      description: "demoop@outlook.com",
      icon: "✉️",
      action: () => window.open('mailto:demoop@outlook.com', '_self'),
      color: "from-demoop-green to-demoop-darkgreen"
    },
    {
      title: "Instagram",
      description: "@demooplimpeza",
      icon: "📱",
      action: () => window.open('https://instagram.com/demooplimpeza', '_blank'),
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-demoop-lightgreen/20 to-white">
      <div className="text-center mb-16">
        <h2 className="section-title text-demoop-primary">
          Entre em Contato
        </h2>
        <p className="section-subtitle text-muted-foreground">
          Estamos prontos para atender você da melhor forma
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Formulário de Contato */}
        <Card className="bg-white/90 backdrop-blur-sm border-demoop-green/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-demoop-primary text-center">
              Envie sua Mensagem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-demoop-primary mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-demoop-green/30 focus:border-demoop-green focus:ring-demoop-green/20"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-demoop-primary mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-demoop-green/30 focus:border-demoop-green focus:ring-demoop-green/20"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-demoop-primary mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-demoop-green/30 focus:border-demoop-green focus:ring-demoop-green/20"
                  placeholder="(48) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-demoop-primary mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="border-demoop-green/30 focus:border-demoop-green focus:ring-demoop-green/20 resize-none"
                  placeholder="Conte-nos como podemos ajudar você..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-demoop-primary hover:bg-demoop-darkgreen text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                💬 Enviar via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Métodos de Contato */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-demoop-primary mb-6 text-center lg:text-left">
              Outras formas de contato
            </h3>
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  onClick={method.action}
                  className="bg-white/80 backdrop-blur-sm border-demoop-green/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-demoop-primary group-hover:text-demoop-blue transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                    <div className="text-demoop-green text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-demoop-green/10 to-demoop-blue/10 border-demoop-green/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-demoop-primary mb-4">
                Atendimento Especializado
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a encontrar os melhores produtos de limpeza 
                para suas necessidades específicas.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-demoop-green">9 anos</div>
                  <div className="text-sm text-muted-foreground">de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-demoop-blue">24h</div>
                  <div className="text-sm text-muted-foreground">resposta WhatsApp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoopContact;