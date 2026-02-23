import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Target, Code2 } from 'lucide-react';

const values = [
    {
        icon: Shield,
        title: 'Robustez Corporativa',
        description: 'Fundação sólida para escalar sem quebrar. Entendemos a complexidade de operações críticas.',
    },
    {
        icon: Zap,
        title: 'Velocidade Exponencial',
        description: 'Integração nativa de Inteligência Artificial para multiplicar a produtividade do seu time.',
    },
    {
        icon: Target,
        title: 'Foco no Business',
        description: 'Não fazemos tecnologia pela tecnologia. Resolvemos problemas reais de negócio.',
    },
];

const stats = [
    { label: 'Anos de Experiência', value: '10+' },
    { label: 'Projetos Entregues', value: '500+' },
    { label: 'Linhas de Código', value: '10M+' },
    { label: 'Especialistas', value: '50+' },
];

export default function About() {
    return (
        <div className="min-h-screen bg-graphite-950 font-sans selection:bg-neon/30 selection:text-neon pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 sm:py-32">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="container relative mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 font-mono text-xs text-neon backdrop-blur-sm"
                        >
                            <Terminal size={14} />
                            <span>whoami --verbose</span>
                            <span className="animate-pulse cursor-block">_</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
                        >
                            A Engenharia por trás da <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neon">Inovação</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg leading-8 text-gray-400"
                        >
                            Na On Code IT, não somos apenas desenvolvedores. Somos arquitetos de sistemas inteligentes, combinando mais de uma década de experiência em engenharia de software com as mais recentes inovações em Inteligência Artificial.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Vibe / Story Section */}
            <section className="py-24 relative bg-surface-900 border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Nossa Filosofia: <span className="text-neon">Cyber-Industrial</span></h2>
                        <div className="space-y-6 text-gray-400">
                            <p>
                                Acreditamos que o software deve ser tratado com a mesma seriedade e rigor que a engenharia industrial. Interfaces intuitivas e operações à prova de falhas.
                            </p>
                            <p>
                                O que antes exigia equipes gigantescas e meses de desenvolvimento, hoje, graças à integração profunda de agentes de IA, conseguimos entregar com precisão cirúrgica em tempo recorde.
                            </p>
                            <p className="font-mono text-sm text-neon border-l-2 border-neon pl-4 py-1">
                                /* Build robust. Scale fast. */<br />
                                const onCode = new EnterpriseSolution();<br />
                                onCode.inject(AI_Agents);
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-2xl border border-white/10 bg-graphite-950 p-8 shadow-2xl"
                    >
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon/20 to-transparent opacity-20 blur-xl"></div>
                        <div className="relative flex flex-col gap-6">
                            <div className="flex items-center gap-4 text-white border-b border-white/10 pb-4">
                                <Code2 className="text-neon" size={24} />
                                <h3 className="text-xl font-bold">Stack Operacional</h3>
                            </div>
                            <ul className="space-y-4">
                                {['Arquitetura Resiliente', 'Desenvolvimento Ágil e Autônomo', 'Observabilidade Nativa', 'Segurança por Design'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-neon"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Nossos Pilares</h2>
                        <p className="text-gray-400">A base sobre a qual construímos cada linha de código e cada arquitetura de infraestrutura.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative rounded-2xl border border-white/5 bg-surface-900 p-8 hover:border-neon/30 transition-colors"
                            >
                                <div className="mb-6 inline-flex rounded-lg bg-neon/10 p-3 text-neon group-hover:bg-neon group-hover:text-graphite-950 transition-colors">
                                    <value.icon size={24} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 relative border-t border-white/5 bg-surface-900/50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/5">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center px-4"
                            >
                                <div className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-neon transition-colors">{stat.value}</div>
                                <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
