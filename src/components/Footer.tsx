import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo-rb.jpeg'

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className='bg-whit grid md:grid-cols-2 items-center'>
            <img className='w-40' src={logo} alt="logo" />
            <h3 className="font-display text-2xl font-bold text-gold mb-">
              Enf. Raquel Belarmino
            </h3>
            <p className="text-gray-300">
              Especialista em Tratamento de Feridas e Estomaterapia
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <p className="text-gray-300 mb-2">Email: raquelbelarminopinheiro@gmail.com</p>
            <p className="text-gray-300">WhatsApp: (67) 99265-4285 </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/raquel5062?igsh=bHlleW5kc25udXE3" className="text-white hover:text-gold transition-colors" target="_blank">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Raquel Belarmino. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;