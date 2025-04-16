import { motion } from 'framer-motion';
import enfRaquel  from "../assets/raquel-bg-none.png"

const Hero = () => {
  return (
    <section id="início" className="bg-[url(./assets/raquel-bg-image.png)] bg-center bg-cover bg-no-repeat min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-white"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Raquel Belarmino
            </h1>
            <h2 className="text-gold text-xl md:text-xl mb-8">
              Especialista em Tratamento de Feridas
            </h2>
            <p className="bg-secondary rounded-lg px-2 text-gray-200 mb-8 text-lg">
              Cuidados especializados para tratamento de feridas complexas com técnicas
              avançadas que promovem cicatrização eficaz e melhoram sua qualidade de
              vida. Tratamento humanizado com resultados comprovados.
            </p>
            <a href="#contato" className="btn-primary inline-block">
              Entre em contato
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0 }}
            className="hidden md:block"
          >
            <img
              src= {enfRaquel}
              alt="Profissional de saúde"
              className="w-full h-[865px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;