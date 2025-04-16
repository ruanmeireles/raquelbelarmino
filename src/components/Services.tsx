import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Stethoscope, Zap, Ban as Bandage, Heart, Activity, Droplet, Thermometer, Target, Baby } from 'lucide-react';

const services = [
  {
    title: 'Laserterapia',
    description: 'Tratamento avançado que utiliza laser terapêutico para acelerar o processo de cicatrização e reduzir a dor.',
    icon: Zap
  },
  {
    title: 'Terapia por Pressão Negativa',
    description: 'Técnica que utiliza pressão subatmosférica para promover a cicatrização de feridas complexas.',
    icon: Target
  },
  {
    title: 'Curativos Especiais',
    description: 'Aplicação de curativos tecnológicos específicos para cada tipo de lesão, promovendo cicatrização ideal.',
    icon: Bandage
  },
  {
    title: 'Terapias Compressivas',
    description: 'Tratamento eficaz para úlceras venosas e linfedema, melhorando o retorno venoso.',
    icon: Heart
  },
  {
    title: 'Ozonioterapia',
    description: 'Terapia que utiliza ozônio medicinal para estimular a cicatrização e combater infecções.',
    icon: Activity
  },
  {
    title: 'PRF',
    description: 'Plasma Rico em Fibrina para regeneração tecidual acelerada e cicatrização natural.',
    icon: Droplet
  },
  {
    title: 'Laserterapia para Dor',
    description: 'Tratamento específico para alívio da dor utilizando laser terapêutico de baixa intensidade.',
    icon: Thermometer
  },
  {
    title: 'ILIB Terapia',
    description: 'Irradiação sanguínea com laser para melhorar a circulação e oxigenação dos tecidos.',
    icon: Stethoscope
  },
  {
    title: 'Fissura Mamária',
    description: 'Tratamento especializado para fissuras mamárias em lactantes, proporcionando alívio e cicatrização.',
    icon: Baby
  },
];

const ServiceCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover-scale group cursor-pointer">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-gold mr-3" />
        <h3 className="text-primary font-display text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="serviços" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12"
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;