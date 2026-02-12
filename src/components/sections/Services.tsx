import { motion } from 'framer-motion';
import { Shield, Server, Lock, Cloud, Sparkles, Bot, Zap, Cpu, Activity, Database, Terminal, HardDrive } from 'lucide-react';
import { Tabs } from '../ui/Tabs';

const services = {
    core: [
        { icon: Server, label: "Gestão de Redes", description: "Infraestrutura robusta e escalável" },
        { icon: Lock, label: "Cibersegurança", description: "Proteção avançada contra ameaças" },
        { icon: Shield, label: "Suporte N3", description: "Especialistas dedicados 24/7" },
        { icon: Cloud, label: "Cloud Computing", description: "Escalabilidade garantida" },
        { icon: Activity, label: "Monitoramento 24/7", description: "Vigilância contínua da infraestrutura" },
        { icon: Database, label: "Banco de Dados", description: "Gestão otimizada de dados" },
        { icon: Terminal, label: "DevOps & SRE", description: "Automação e confiabilidade" },
        { icon: HardDrive, label: "Backup & Recovery", description: "Seus dados sempre seguros" },
    ],
    ai: [
        { icon: Bot, label: "Agentes Autônomos", description: "IA que trabalha 24/7 para você" },
        { icon: Sparkles, label: "Vibe Coding", description: "Desenvolvimento acelerado por IA" },
        { icon: Zap, label: "High-Perf Sites", description: "Websites ultra-rápidos e otimizados" },
        { icon: Cpu, label: "AI Integration", description: "Integre IA em seus processos" },
    ]
};

function ServiceCard({ icon: Icon, label, description }: { icon: any; label: string; description: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-neon/30 hover:bg-neon/5"
        >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-neon/10 text-neon transition-all group-hover:bg-neon/20 group-hover:scale-110">
                <Icon className="h-7 w-7" />
            </div>
            <h4 className="mb-2 text-base font-semibold text-white">{label}</h4>
            <p className="text-sm text-gray-400">{description}</p>
        </motion.div>
    );
}

export function Services() {
    const tabs = [
        {
            id: 'core-it',
            label: 'Core IT',
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-neon/10 text-neon">
                            <Shield size={32} />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-white">Estabilidade & Infraestrutura</h3>
                        <p className="text-gray-400">
                            Soluções robustas para manter sua operação segura e disponível 24/7
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.core.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </div>
                </motion.div>
            ),
        },
        {
            id: 'ai-solutions',
            label: 'AI Solutions',
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-neon/10 text-neon">
                            <Sparkles size={32} />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-white">Inovação & Automação</h3>
                        <p className="text-gray-400">
                            Acelere sua transformação digital com agentes inteligentes e automação
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.ai.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </div>
                </motion.div>
            ),
        },
    ];

    return (
        <section id="services" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Soluções Híbridas</h2>
                    <p className="mt-4 text-gray-400">Estabilidade legado + Inovação acelerada.</p>
                </motion.div>

                <Tabs tabs={tabs} defaultTab="core-it" />
            </div>
        </section>
    );
}
