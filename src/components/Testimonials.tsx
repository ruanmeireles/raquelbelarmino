import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    text: 'O tratamento com a Raquel mudou minha vida. Depois de meses lutando com uma ferida crônica, finalmente encontrei a solução que precisava.',
  },
  {
    name: 'João Santos',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80',
    text: 'Profissional extremamente dedicada e atenciosa. O tratamento foi eficaz e sua abordagem humanizada fez toda diferença.',
  },
  {
    name: 'Ana Oliveira',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80',
    text: 'Excelente atendimento e resultados surpreendentes. Recomendo fortemente para quem busca um tratamento de qualidade.',
  },
];

const TestimonialCard = ({ name, image, text }: { name: string; image: string; text: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover-scale">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-display font-semibold text-primary">{name}</h3>
          <div className="flex text-gold mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{text}</p>
    </div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="depoimentos" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12"
        >
          Depoimentos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;