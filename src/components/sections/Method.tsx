import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { User, Cpu, Code } from 'lucide-react';

const steps = [
    {
        icon: User,
        title: "Diagnóstico Humano",
        desc: "Entendemos a dor real do negócio, não apenas o ticket de suporte."
    },
    {
        icon: Cpu,
        title: "Geração via IA",
        desc: "Utilizamos agentes cognitivos para arquitetar soluções em velocidade recorde."
    },
    {
        icon: Code,
        title: "Implementação Técnica",
        desc: "Deploy robusto, com código limpo e escalável, validado por experts."
    }
];

export function Method() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <section id="method" className="relative py-32 overflow-hidden" ref={containerRef}>
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">O Método</h2>
                    <p className="mt-4 text-zinc-400">Do problema à solução em 3 passos.</p>
                </motion.div>

                <div className="relative flex flex-col items-center justify-between gap-12 md:flex-row md:gap-0">
                    {/* Connecting Line (Horizontal on Desktop, Vertical on Mobile? keeping it simple horizontal for now as per req, but responsive needs care) 
               Actually, for a 3 step horizontal timeline, a horizontal line is best.
           */}

                    <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-white/10 md:block">
                        <motion.div
                            style={{ width: lineHeight }}
                            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"
                        />
                    </div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center md:px-4"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-zinc-900 shadow-xl backdrop-blur-xl transition-transform hover:scale-110">
                                <step.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                            <p className="max-w-xs text-sm text-zinc-400">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
