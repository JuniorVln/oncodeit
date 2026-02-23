import { motion } from 'framer-motion';
import { Users2, Target, Zap, Clock, UserPlus, HeartHandshake, ChevronRight, Terminal } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const benefits = [
    { name: 'Redução de Custos (Até 40%)', icon: Target },
    { name: 'Rápida Alocação', icon: Clock },
    { name: 'Profissionais Seniors', icon: Users2 },
    { name: 'Escala Flexível', icon: Zap },
    { name: 'Onboarding Simplificado', icon: UserPlus },
    { name: 'Retenção Garantida', icon: HeartHandshake },
];

const capabilities = [
    {
        title: 'Squads Ágeis e Dedicadas',
        description: 'Montamos a equipe perfeita para a sua necessidade técnica, com PMs, Tech Leads, Devs e QAs prontos para acelerar suas entregas.'
    },
    {
        title: 'Alocação de Especialistas',
        description: 'Precisa de um Arquiteto AWS ou de um Dev Node.js Senior de imediato? Alocamos o perfil exato no seu time atual.'
    },
    {
        title: 'Governança e Cultura',
        description: 'Nossos profissionais não são apenas recursos técnicos, eles mergulham na cultura da sua empresa e adotam as métricas do seu negócio como deles.'
    },
    {
        title: 'Business Process Outsourcing (BPO)',
        description: 'Assumimos processos inteiros da sua base de tecnologia para que você foque 100% no seu core business.'
    }
];

export default function TerceirizacaoTI() {
    return (
        <div className="min-h-screen bg-graphite-950 font-sans selection:bg-neon/30 selection:text-neon pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--color-neon)/0.03_0%,_transparent_50%)]" />

                <div className="container relative mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl"
                        >
                            <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 font-mono text-xs text-neon backdrop-blur-sm">
                                <Terminal size={14} />
                                <span>/servicos/terceirizacao-ti</span>
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
                                Terceirização de <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-400">TI & BPO</span>
                            </h1>

                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Escalonamento elástico de times de engenharia. Traga a força de trabalho e a inteligência corporativa da On Code IT para dentro da sua empresa. Sem burocracia, com alto impacto.
                            </p>

                            <Button
                                className="group"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Solicitar Especialistas
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>

                        {/* Decorative Visual Element */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-neon/10 blur-[100px] rounded-full" />
                            <div className="relative rounded-2xl border border-white/10 bg-surface-900/50 backdrop-blur p-8 overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="font-mono text-sm text-gray-300 space-y-2 opacity-80 select-none">
                                    <p><span className="text-neon">const</span> squad = <span className="text-blue-400">new</span> TechSquad();</p>
                                    <p>squad.<span className="text-yellow-200">allocate</span>(&#123;</p>
                                    <p className="pl-4">engineers: <span className="text-purple-400">5</span>,</p>
                                    <p className="pl-4">seniority: <span className="text-green-400">'Senior/Specialist'</span></p>
                                    <p>&#125;);</p>
                                    <p className="text-gray-500">// Alinhando cultura e processos...</p>
                                    <p className="mt-4"><span className="text-neon">{'>'} Squad integrada e pronta para entrega.</span></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Modelos de Alocação</h2>
                        <p className="text-gray-400 max-w-2xl">Adaptamos nossas tropas para encaixar perfeitamente no momento e nas necessidades da sua operação técnica.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {capabilities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-8 rounded-xl border border-white/5 bg-surface-900 hover:border-neon/30 transition-all duration-300"
                            >
                                <div className="h-12 w-12 rounded bg-graphite-950 flex items-center justify-center mb-6 border border-white/5 group-hover:border-neon/50 text-gray-400 group-hover:text-neon transition-colors">
                                    <Users2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 relative bg-surface-900 border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Vantagens Estratégicas</h2>
                        <p className="text-gray-400">Por que as maiores empresas confiam partes cruciais de seu negócio aos nossos times.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-graphite-950 hover:bg-white/[0.02] transition-colors text-center"
                            >
                                <benefit.icon size={32} className="text-gray-500 mb-4" />
                                <span className="text-sm font-medium text-gray-300">{benefit.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
