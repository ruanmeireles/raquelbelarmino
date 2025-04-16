import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Clock, Heart, Star } from 'lucide-react';
import enfRaquel from "../assets/Raquel 2.jpeg"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Clock,
      title: '15+ Anos',
      description: 'de experiência na área da saúde'
    },
    {
      icon: Award,
      title: 'Especialista',
      description: 'em Tratamento de Feridas'
    },
    {
      icon: BookOpen,
      title: 'Estomaterapia',
      description: 'Pós-graduação especializada'
    },
    {
      icon: Heart,
      title: 'Humanização',
      description: 'Atendimento personalizado'
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2.0 }}
            className="relative"
          >
            <img
              src={enfRaquel}
              alt="Raquel Belarmino"
              className="w-full h-[800px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-lg shadow-lg">
              <Star className="w-8 h-8 text-white" />
              <p className="text-white font-bold mt-2">10+ anos como especialista</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Sobre a Especialista
            </h2>
            <p className="text-gray-600 mb-8">
              Com mais de 15 anos dedicados à área da saúde, Raquel Belarmino é referência
              no tratamento de feridas complexas. Sua abordagem única combina técnicas
              avançadas com um olhar humanizado, garantindo os melhores resultados para
              seus pacientes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 2.0, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50"
                  >
                    <Icon className="w-8 h-8 text-gold mb-3" />
                    <h3 className="font-display font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;