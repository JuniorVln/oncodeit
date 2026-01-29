import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ChevronRight, Code2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-20">
            {/* Simulated Modern Video Background */}
            <div className="absolute inset-0 z-0 bg-zinc-950">
                <div className="absolute inset-0 bg-zinc-950/80 z-10" />

                {/* Moving Lights/Gradients */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] bg-[radial-gradient(circle_at_center,_var(--color-indigo-500)_0%,_transparent_50%)] opacity-30 blur-[100px]"
                />

                <motion.div
                    animate={{
                        x: ["-20%", "20%", "-20%"],
                        y: ["-20%", "20%", "-20%"],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 h-[800px] w-[800px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen"
                />

                <motion.div
                    animate={{
                        x: ["20%", "-20%", "20%"],
                        y: ["20%", "-20%", "20%"],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen"
                />

                {/* Grid Overlay for Tech Vibe */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                {/* Typewriter snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 font-mono text-sm text-indigo-400 backdrop-blur-sm"
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                        Operacional e Exponencial.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl"
                >
                    Unimos a robustez da TI corporativa com a velocidade da Inteligência Artificial.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button size="lg" className="w-full sm:w-auto group">
                        Começar Agora
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        Conhecer Soluções
                    </Button>
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
                    <span className="text-xs uppercase tracking-widest text-zinc-600">Scroll</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-zinc-600 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
