import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card } from '../ui/Card';

const testimonials = [
    {
        quote: "A On Code IT transformou nossa infraestrutura. Reduzimos custos em 40% e aumentamos a disponibilidade para 99.9%.",
        author: "João Silva",
        role: "CTO, TechCorp Brasil",
        company: "TechCorp"
    },
    {
        quote: "Implementação rápida e suporte excepcional. Nossa equipe agora trabalha com ferramentas de IA que aumentaram a produtividade.",
        author: "Maria Santos",
        role: "CEO, InnovaSoft",
        company: "InnovaSoft"
    },
    {
        quote: "Parceria estratégica que nos permitiu focar no negócio enquanto eles cuidam de toda nossa infraestrutura de TI.",
        author: "Carlos Mendes",
        role: "Diretor, MegaRetail",
        company: "MegaRetail"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        O Que Nossos Clientes Dizem
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Resultados reais de empresas que confiam em nossos serviços
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full border-white/10 hover:border-neon/30">
                                <div className="mb-4">
                                    <Quote className="h-10 w-10 text-neon/50" />
                                </div>
                                <p className="mb-6 text-gray-300">{testimonial.quote}</p>
                                <div className="border-t border-white/10 pt-4">
                                    <div className="font-medium text-white">{testimonial.author}</div>
                                    <div className="mt-1 text-sm text-gray-400">{testimonial.role}</div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
