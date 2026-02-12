import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { StatBadge } from '../ui/StatBadge';
import { ChevronRight, Code2, CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 bg-graphite-950">
                <div className="absolute inset-0 bg-graphite-950/70 z-10" /> {/* Overlay for text readability */}

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover opacity-60 motion-reduce:hidden"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>

                {/* Fallback for reduced motion or if video fails to load */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-neon)/0.15_0%,_transparent_50%)] opacity-40 blur-[100px] hidden motion-reduce:block" />

                {/* Grid Overlay for Tech Vibe */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-neon/20 bg-neon/5 px-5 py-2 text-sm backdrop-blur-sm"
                >
                    <CheckCircle2 size={16} className="text-neon" />
                    <span className="text-gray-300">
                        <strong className="text-white">10+ Anos</strong> de Experiência |
                        <strong className="text-white"> 500+</strong> Projetos Entregues
                    </span>
                </motion.div>

                {/* Typewriter snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 font-mono text-sm text-neon backdrop-blur-sm"
                >
                    <Code2 size={16} />
                    <span>&gt; System.init(AI_Agents)</span>
                    <span className="animate-pulse cursor-block">_</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
                >
                    Sua Tecnologia. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-neon">
                        Operacional e Exponencial.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 sm:text-xl"
                >
                    Unimos a robustez da TI corporativa com a velocidade da Inteligência Artificial.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button
                        size="lg"
                        className="w-full sm:w-auto group shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Começar Agora
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Conhecer Soluções
                    </Button>
                </motion.div>

                {/* Social Proof Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4"
                >
                    <StatBadge value="500+" label="Projetos" delay={0.9} />
                    <StatBadge value="98%" label="Satisfação" delay={1.0} />
                    <StatBadge value="24/7" label="Suporte" delay={1.1} />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-gray-600">Scroll</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-gray-600 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
