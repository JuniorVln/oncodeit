import { motion } from 'framer-motion';
import { User, Sparkles, Code, Plus } from 'lucide-react';

const steps = [
    {
        icon: User,
        title: "Diagnóstico Humano",
        desc: "Entendemos a dor real do negócio, não apenas o ticket de suporte.",
        gradient: "from-graphite-900 via-graphite-800 to-graphite-900",
        glow: "shadow-[0_0_80px_rgba(57,255,20,0.3)]",
        size: "tall" // Primeiro card mais alto
    },
    {
        icon: Sparkles,
        title: "Geração via IA",
        desc: "Utilizamos agentes cognitivos para arquitetar soluções em velocidade recorde.",
        gradient: "from-white/95 via-gray-100 to-white/90",
        glow: "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
        textColor: "text-graphite-950",
        iconColor: "text-graphite-950",
        size: "medium"
    },
    {
        icon: Code,
        title: "Implementação Técnica",
        desc: "Deploy robusto, com código limpo e escalável, validado por experts.",
        gradient: "from-neon via-[#90ff00] to-neon",
        glow: "shadow-[0_0_100px_rgba(57,255,20,0.6)]",
        textColor: "text-graphite-950",
        iconColor: "text-graphite-950",
        size: "tall"
    }
];

export function Method() {
    return (
        <section id="method" className="relative py-32 overflow-hidden">
            {/* Subtle Ambient Glow - Harmonizes with RootLayout */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-neon/8 blur-[180px] rounded-full" />
                <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-neon/5 blur-[160px] rounded-full" />
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid gap-8 lg:grid-cols-12 items-center">
                    {/* Left Side - Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4"
                    >
                        <h2 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
                            Vamos construir seu{' '}
                            <span className="relative">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">
                                    futuro tech
                                </span>
                                {' '}— juntos
                            </span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-400">
                            Do problema à solução em 3 passos.
                        </p>
                    </motion.div>

                    {/* Right Side - Bento Cards */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {steps.map((step, idx) => {
                                const Icon = step.icon;
                                const baseDelay = idx * 0.15;

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 60, rotateX: 10 }}
                                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: baseDelay,
                                            duration: 0.8,
                                            type: "spring",
                                            bounce: 0.3
                                        }}
                                        whileHover={{
                                            y: -8,
                                            rotateY: 2,
                                            transition: { duration: 0.3 }
                                        }}
                                        className={`
                                            group relative overflow-hidden rounded-[2.5rem] p-8
                                            bg-gradient-to-br ${step.gradient}
                                            ${step.glow}
                                            transition-all duration-500
                                            ${step.size === 'tall' ? 'sm:row-span-2 min-h-[420px]' : 'min-h-[280px]'}
                                            hover:scale-[1.02]
                                            border border-white/10
                                        `}
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            perspective: '1000px'
                                        }}
                                    >
                                        {/* Plus Button Top Right */}
                                        <motion.button
                                            whileHover={{ rotate: 90, scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className={`
                                                absolute right-6 top-6 flex h-10 w-10 items-center justify-center 
                                                rounded-full border transition-all
                                                ${step.textColor === 'text-graphite-950'
                                                    ? 'border-graphite-950/20 bg-graphite-950/10 text-graphite-950 hover:bg-graphite-950/20'
                                                    : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                                                }
                                            `}
                                        >
                                            <Plus className="h-5 w-5" />
                                        </motion.button>

                                        {/* Content */}
                                        <div className="flex h-full flex-col justify-between">
                                            {/* Icon */}
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                whileInView={{ scale: 1, rotate: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: baseDelay + 0.2,
                                                    type: "spring",
                                                    bounce: 0.5
                                                }}
                                                className={`
                                                    mb-6 flex h-16 w-16 items-center justify-center rounded-2xl
                                                    ${step.textColor === 'text-graphite-950'
                                                        ? 'bg-graphite-950/10'
                                                        : 'bg-white/10'
                                                    }
                                                    backdrop-blur-sm
                                                    transition-transform group-hover:scale-110
                                                `}
                                            >
                                                <Icon className={`h-8 w-8 ${step.iconColor || 'text-white'}`} />
                                            </motion.div>

                                            {/* Text */}
                                            <div>
                                                <h3 className={`
                                                    mb-3 text-2xl font-bold
                                                    ${step.textColor || 'text-white'}
                                                `}>
                                                    {step.title}
                                                </h3>
                                                <p className={`
                                                    text-sm leading-relaxed
                                                    ${step.textColor === 'text-graphite-950'
                                                        ? 'text-graphite-950/70'
                                                        : 'text-gray-400'
                                                    }
                                                `}>
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Hover Gradient Overlay */}
                                        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
