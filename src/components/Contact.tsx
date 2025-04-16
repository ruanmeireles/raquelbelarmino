import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contato" className="section-padding bg-primary">
      <div className="container mx-auto container-padding">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2.0 }}
          className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12"
        >
          Entre em Contato
        </motion.h2>

        <div className="flex items-center justify-center gap-8">
          {/* WhatsApp Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2.0 }}
            className="bg-white rounded-lg p-8 w-auto text-center"
          >
            <MessageSquare className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Atendimento via WhatsApp
            </h3>
            <p className="text-gray-600 mb-6">
              Resposta rápida e atendimento personalizado
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Iniciar Conversa
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;