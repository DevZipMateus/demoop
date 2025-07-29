
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Produtos', id: 'services' },
    { name: 'Catálogo', id: 'catalogo', isPage: true },
    { name: 'Depoimentos', id: 'testimonials' },
    { name: 'Localização', id: 'location' },
    { name: 'Contato', id: 'contact' },
  ];

  const handleNavClick = (link: any) => {
    if (link.isPage) {
      navigate(`/${link.id}`);
    } else {
      // Se não estamos na página principal, navegar para lá primeiro
      if (location.pathname !== '/') {
        navigate('/');
        // Aguardar a navegação e então rolar para a seção
        setTimeout(() => {
          scrollToSection(link.id);
        }, 100);
      } else {
        scrollToSection(link.id);
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-1 sm:py-2 bg-white/95 backdrop-blur-md shadow-lg" 
          : "py-2 sm:py-3 bg-transparent"
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-1 sm:space-x-2 font-display font-bold text-base sm:text-lg lg:text-xl hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/dabf577d-abec-4c2f-aab4-f1a1c600dc29.png" 
              alt="Demoop Logo" 
              className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" 
            />
            <span className="hidden xs:inline text-demoop-blue text-sm sm:text-base lg:text-lg">Demoop</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="text-demoop-primary hover:text-demoop-blue transition-colors duration-300 text-sm lg:text-base font-medium relative group"
              onClick={() => handleNavClick(link)}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-demoop-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden text-demoop-primary p-1 sm:p-2 rounded-md hover:bg-demoop-lightgreen/50 transition-colors">
            <Menu size={18} className="sm:w-5 sm:h-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[80%] p-0 bg-gradient-to-br from-white to-demoop-lightgreen border-l-4 border-demoop-blue">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-3 sm:p-4 border-b border-demoop-lightgreen">
                <button 
                  onClick={handleLogoClick}
                  className="flex items-center space-x-2 font-display font-bold text-base sm:text-lg text-demoop-blue hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/dabf577d-abec-4c2f-aab4-f1a1c600dc29.png" 
                    alt="Demoop Logo" 
                    className="h-5 w-5 sm:h-6 sm:w-6" 
                  />
                  <span>Demoop</span>
                </button>
                <SheetClose className="p-2 rounded-full hover:bg-demoop-lightgreen/70 transition-all">
                  <X className="text-demoop-primary" size={16} />
                </SheetClose>
              </div>
              <nav className="flex flex-col items-stretch justify-start flex-1 mt-2 sm:mt-4">
                {navLinks.map((link, index) => (
                  <button
                    key={link.id}
                    className={cn(
                      "text-demoop-primary text-sm sm:text-base font-medium hover:bg-demoop-lightgreen/70 transition-all w-full text-center py-3 sm:py-4 px-3 flex items-center justify-center",
                      "relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-demoop-blue after:transition-all after:duration-300 hover:after:w-1/3"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => {
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      setTimeout(() => handleNavClick(link), 100);
                    }}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
              <div className="p-3 sm:p-4 border-t border-demoop-lightgreen mt-auto">
                <div className="text-demoop-gray text-xs text-center">
                  © 2024 Demoop Limpeza
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
