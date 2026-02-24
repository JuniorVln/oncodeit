import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Bot, Zap, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function InteligenciaArtificial() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const modules = [
        {
            title: "Desenvolvimento Assistido (Vibe Coding)",
            description: "Escreva software até 10x mais rápido. Nossas equipes (ou a sua) utilizam ferramentas como Claude Code e GitHub Copilot ativamente no processo dev, multiplicando as entregas diárias sem sacrificar a segurança.",
            icon: Zap
        },
        {
            title: "Agentes Autônomos de Operação",
            description: "O fim do trabalho repetitivo. Criamos assistentes (llm agents) capazes de gerenciar tickets de suporte, validar N1 triages, processar dados brutos e executar pipelines complexas tomando decisões contextuais.",
            icon: Bot
        },
        {
            title: "Engenharia de RAG e Chatbots",
            description: "Sua base de conhecimento transformada em uma inteligência corporativa ativa. Interaja em linguagem natural com documentos técnicos e guias de processos sem vazamento de dados confidenciais.",
            icon: Sparkles
        },
        {
            title: "Integração Híbrida em LLMs (Agents as a Service)",
            description: "Ligue ferramentas tradicionais como Jira, Zendesk, Salesforce e GitHub via MCPs (Model Context Protocol), conectando LLMs diretamente com a fonte da verdade da operação da companhia.",
            icon: Cpu
        }
    ];

    return (
        <div className="min-h-screen bg-graphite-950 font-sans selection:bg-neon/30 selection:text-neon pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-neon to-[#004d00] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>

                <div className="container relative z-10 mx-auto px-6 lg:px-8">
                    <Link to="/servicos" className="inline-flex items-center text-neon hover:text-green-400 transition-colors font-mono text-sm mb-8">
                        <ArrowLeft size={16} className="mr-2" />
                        voltar
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
                            }}
                            className="max-w-2xl"
                        >
                            <motion.div variants={fadeIn} className="mb-6 flex w-fit items-center gap-2 rounded-full border border-neon/20 bg-neon/10 px-4 py-1.5 font-mono text-xs text-neon backdrop-blur-sm">
                                <Bot size={14} />
                                <span>$ execute --module ai_core</span>
                                <span className="animate-pulse cursor-block">_</span>
                            </motion.div>

                            <motion.h1 variants={fadeIn} className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
                                Inteligência Artificial <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-400">& Automação</span>
                            </motion.h1>

                            <motion.p variants={fadeIn} className="text-lg leading-8 text-gray-400 mb-8">
                                O multiplicador definitivo de performance. Vamos muito além de simples integrações via API: construímos ecossistemas autônomos, assistentes corporativos avançados e capacitamos seu time para a próxima era da engenharia (Vibe Coding).
                            </motion.p>

                            <motion.div variants={fadeIn}>
                                <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Habilitar Automação IA
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Interactive/Visual Element for AI */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative lg:ml-auto"
                        >
                            <div className="relative rounded-2xl border border-white/10 bg-surface-900/50 p-8 pt-12 backdrop-blur-sm shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 font-mono text-xs text-neon/50">sys.prompt.active</div>
                                <div className="space-y-4 font-mono text-sm">
                                    <p className="text-green-500">{"// Agent initialization routine"}</p>
                                    <p className="text-gray-400"><span className="text-neon">User:</span> Analisar gargalos na fila de CI/CD e gerar fix.</p>
                                    <p className="text-blue-400"><span className="text-neon">Agent[DevOps]:</span> Recebido. Escaneando logs...</p>
                                    <div className="pl-4 border-l border-white/10 space-y-2 py-2">
                                        <p className="text-gray-500">{"> Found latency in integration-tests phase."}</p>
                                        <p className="text-gray-500">{"> Generating optimization patch (parallel execution)."}</p>
                                        <p className="text-gray-500">{"> Validating changes locally..."}</p>
                                    </div>
                                    <p className="text-blue-400"><span className="text-neon">Agent[DevOps]:</span> PR criado. Latência reduzida em 40%.</p>
                                </div>
                                {/* Glow element */}
                                <div className="absolute -inset-1 z-[-1] rounded-2xl bg-gradient-to-r from-neon/0 via-neon/10 to-neon/0 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="py-24 bg-surface-900/30 border-y border-white/5 relative">
                <div className="container px-6 lg:px-8 mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Módulos Inteligentes</h2>
                        <p className="text-gray-400">Das trincheiras do código ao pipeline automatizado, injetamos cognição artificial ondem o humano era o gargalo.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {modules.map((mod, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative rounded-2xl border border-white/5 bg-graphite-950 p-8 hover:border-neon/30 hover:bg-neon/5 transition-all duration-300"
                            >
                                <div className="mb-6 inline-flex rounded-lg bg-surface-900 p-3 text-neon border border-white/5 group-hover:border-neon/50">
                                    <mod.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{mod.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {mod.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefit Checkmarks */}
            <section className="py-24 relative">
                <div className="container px-6 lg:px-8 mx-auto max-w-5xl">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-surface-900/80 to-graphite-950 p-10 md:p-16">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">A Vantagem Competitiva Irreal (Vibe)</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "10x de velocidade em engenharia de sistemas",
                                "Zero vazamento de dados em automações locais",
                                "Processamento assíncrono cognitivo 24/7",
                                "Documentação viva e auto-gerada",
                                "Redução massiva de TCO (Total Cost of Ownership)",
                                "Decisões orientadas por fluxos RAG precisos"
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 text-gray-300"
                                >
                                    <CheckCircle2 className="text-neon flex-shrink-0" size={24} />
                                    <span>{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
