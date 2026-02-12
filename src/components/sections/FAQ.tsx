import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "Como funciona o processo de contratação?",
        answer: "Iniciamos com uma consultoria gratuita para entender suas necessidades. Em seguida, apresentamos uma proposta personalizada com escopo, prazos e investimento. Após aprovação, montamos a equipe e iniciamos o projeto com sprints semanais e comunicação transparente."
    },
    {
        question: "Qual o prazo médio de implementação?",
        answer: "Depende da complexidade do projeto. Projetos de infraestrutura básica levam de 2-4 semanas. Soluções de IA customizadas podem levar de 1-3 meses. Sempre trabalhamos com entregas incrementais para você ver valor desde o início."
    },
    {
        question: "Vocês oferecem suporte contínuo?",
        answer: "Sim! Oferecemos planos de suporte 24/7 com SLA garantido. Nossos especialistas monitoram sua infraestrutura continuamente e respondem a incidentes em minutos. Também oferecemos manutenção preventiva e atualizações regulares."
    },
    {
        question: "Como garantem a segurança dos dados?",
        answer: "Seguimos as melhores práticas de segurança: criptografia end-to-end, autenticação multi-fator, auditorias regulares, conformidade com LGPD e ISO 27001. Seus dados ficam em data centers certificados no Brasil com backup redundante."
    },
    {
        question: "Trabalham com empresas de qual porte?",
        answer: "Atendemos desde startups até grandes corporações. Nossa abordagem é escalável e adaptamos soluções para cada realidade. Temos cases de sucesso em diversos segmentos como e-commerce, saúde, financeiro e manufatura."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative py-32">
            <div className="mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Perguntas Frequentes
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Respostas rápidas para suas principais dúvidas
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                            >
                                <span className="pr-4 font-medium text-white">{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 flex-shrink-0 text-neon transition-transform ${
                                        openIndex === idx ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <motion.div
                                id={`faq-answer-${idx}`}
                                initial={false}
                                animate={{
                                    height: openIndex === idx ? 'auto' : 0,
                                    opacity: openIndex === idx ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="border-t border-white/10 p-6 pt-4 text-gray-400">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
