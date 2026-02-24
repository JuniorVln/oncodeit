import { motion } from 'framer-motion';
import { Server, Users2, Code2, ArrowRight, Terminal, Bot, Sparkles, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'desenvolvimento',
        title: 'Desenvolvimento e Fábrica de Software',
        icon: Code2,
        description: 'Sistemas robustos construídos sob medida. Integrando tecnologias modernas e inteligência artificial para criar vantagens competitivas exclusivas.',
        features: ['Sistemas Web e Mobile', 'APIs e Integrações', 'Arquitetura Edge'],
        link: '/servicos/desenvolvimento'
    },
    {
        id: 'ia',
        title: 'Inteligência Artificial & Automação',
        icon: Bot,
        description: 'Potencialize sua empresa integrando inteligência artificial. Criamos agentes autônomos e automatizações cognitivas que trabalham 24/7.',
        features: ['Agentes Autônomos', 'Automação de Processos', 'LLM Integrations'],
        link: '/servicos/ia'
    },
    {
        id: 'infraestrutura',
        title: 'Infraestrutura Cloud & Sec',
        icon: Server,
        description: 'Arquiteturas projetadas para resiliência e escala. Do on-premise à nuvem, preparamos seu ambiente para o futuro corporativo.',
        features: ['Migração Cloud', 'DevSecOps', 'Monitoramento 24/7'],
        link: '/servicos/infraestrutura'
    },
    {
        id: 'terceirizacao-ti',
        title: 'Terceirização de TI (BPO)',
        icon: Users2,
        description: 'Especialize sua operação com squads dedicadas de alta performance. Reduza custos, diminua riscos e aumente a velocidade de entrega.',
        features: ['Alocação de Especialistas', 'Gestão Ágil', 'Flexibilidade de Escala'],
        link: '/servicos/terceirizacao-ti'
    },
    {
        id: 'assistentes-chatbots',
        title: 'Assistentes & Chatbots IA',
        icon: Sparkles,
        description: 'Transforme sua base de conhecimento em uma inteligência corporativa ativa. Suporte autônomo com agentes inteligentes focados em vendas e retenção.',
        features: ['Arquitetura RAG', 'Integração LLM', 'Suporte N1 Automático'],
        link: '/servicos/ia'
    },
    {
        id: 'integracao-agentes',
        title: 'Integração de Sistemas & Agents',
        icon: Cpu,
        description: 'Conecte ferramentas tradicionais (ERP, CRM) com agentes cognitivos (MCPs). Decisões autônomas diretamente conectadas com a fonte da verdade da corporação.',
        features: ['Hub de Automação B2B', 'Model Context Protocol', 'Multi-plataforma'],
        link: '/servicos/ia'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 50, damping: 15 } }
};

export default function Services() {
    return (
        <div className="min-h-screen bg-graphite-950 font-sans selection:bg-neon/30 selection:text-neon pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-neon)/0.05_0%,_transparent_60%)]" />

                <div className="container relative mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-neon/20 bg-neon/10 px-4 py-1.5 font-mono text-xs text-neon backdrop-blur-sm"
                        >
                            <Terminal size={14} />
                            <span>./listar_servicos.sh</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6"
                        >
                            Operações Críticas. <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-400">
                                Execução Impecável.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg tracking-wide text-gray-400 max-w-2xl mx-auto"
                        >
                            Projetamos, desenvolvemos e mantemos a infraestrutura tecnológica e o software que impulsionam o seu negócio para a próxima década.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-32 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.01 }}
                                className="group relative flex flex-col h-full rounded-2xl border border-white/5 bg-surface-900 p-8 shadow-2xl transition-all duration-300 hover:border-neon/40 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] overflow-hidden cursor-pointer"
                            >
                                {/* Glow Effect Background */}
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-neon/10 blur-3xl transition-all duration-500 group-hover:bg-neon/20" />

                                <Link to={service.link} className="absolute inset-0 z-10" aria-label={`Saiba mais sobre ${service.title}`} />

                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-graphite-950 text-white transition-colors duration-300 group-hover:border-neon/30 group-hover:text-neon">
                                    <service.icon size={28} />
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-white tracking-tight">{service.title}</h3>

                                <p className="mb-8 flex-grow text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mt-auto border-t border-white/5 pt-6">
                                    <h4 className="font-mono text-xs text-neon mb-4 uppercase tracking-wider">Features_</h4>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-300">
                                                <div className="mr-3 h-1 w-1 rounded-full bg-gray-500 group-hover:bg-neon transition-colors duration-300" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex w-full items-center justify-between font-mono text-sm text-white transition-colors group-hover:text-neon">
                                        <span>Initializar_Módulo</span>
                                        <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
