import { motion } from 'framer-motion';
import { Shield, Server, Lock, Cloud, Sparkles, Bot, Zap, Cpu, Activity, Database, Terminal, HardDrive } from 'lucide-react';
import { Card } from '../ui/Card';

const services = {
    core: [
        { icon: Server, label: "Gestão de Redes" },
        { icon: Lock, label: "Cibersegurança" },
        { icon: Shield, label: "Suporte N3" },
        { icon: Cloud, label: "Cloud Computing" },
        { icon: Activity, label: "Monitoramento 24/7" },
        { icon: Database, label: "Banco de Dados" },
        { icon: Terminal, label: "DevOps & SRE" },
        { icon: HardDrive, label: "Backup & Recovery" },
    ],
    ai: [
        { icon: Bot, label: "Agentes Autônomos" },
        { icon: Sparkles, label: "Vibe Coding" },
        { icon: Zap, label: "High-Perf Sites" },
        { icon: Cpu, label: "AI Integration" },
    ]
};

export function Services() {
    return (
        <section id="services" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Soluções Híbridas</h2>
                    <p className="mt-4 text-zinc-400">Estabilidade legado + Inovação acelerada.</p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Core IT Group */}
                    <Card className="group border-emerald-500/10 hover:border-emerald-500/30">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Core IT</h3>
                                <p className="text-sm text-emerald-400">Estabilidade & Infraestrutura</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {services.core.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4 text-center transition-colors hover:bg-emerald-500/10"
                                >
                                    <item.icon className="mb-2 h-6 w-6 text-zinc-400 group-hover:text-emerald-400" />
                                    <span className="text-sm font-medium text-zinc-300">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    {/* AI Solutions Group */}
                    <Card className="group border-indigo-500/10 hover:border-indigo-500/30">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">AI Solutions</h3>
                                <p className="text-sm text-indigo-400">Inovação & Automação</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {services.ai.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4 text-center transition-colors hover:bg-indigo-500/10"
                                >
                                    <item.icon className="mb-2 h-6 w-6 text-zinc-400 group-hover:text-indigo-400" />
                                    <span className="text-sm font-medium text-zinc-300">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
