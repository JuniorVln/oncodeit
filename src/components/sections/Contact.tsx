import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate network request
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }, 2000);
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Vamos Construir o Futuro</h2>
                    <p className="mt-4 text-gray-400">Entre em contato para uma consultoria técnica especializada.</p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-white">Canais de Atendimento</h3>
                            <p className="text-gray-400">
                                Nossa equipe de especialistas está pronta para analisar sua infraestrutura a qualquer momento.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/20 text-neon">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400">Email</p>
                                        <p className="text-white">contato@oncodeit.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/20 text-neon">
                                        <MapPin size={20} />
                                    </div>
                                     <div>
                                        <p className="text-sm font-medium text-gray-400">Sede</p>
                                        <p className="text-white">São Paulo, SP - Brasil</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/20 text-neon">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400">Telefone</p>
                                        <p className="text-white">+55 (11) 9999-9999</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-white/10 bg-graphite-900/50">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300">
                                        Nome Completo <span className="text-neon">*</span>
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        required
                                        type="text"
                                        className="w-full rounded-lg border border-white/10 bg-graphite-950 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/50"
                                        placeholder="Seu nome completo"
                                        aria-required="true"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300">
                                        Email Corporativo <span className="text-neon">*</span>
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        required
                                        type="email"
                                        className="w-full rounded-lg border border-white/10 bg-graphite-950 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/50"
                                        placeholder="voce@empresa.com.br"
                                        aria-required="true"
                                    />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-company" className="block text-sm font-medium text-gray-300">
                                            Empresa
                                        </label>
                                        <input
                                            id="contact-company"
                                            name="company"
                                            type="text"
                                            className="w-full rounded-lg border border-white/10 bg-graphite-950 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/50"
                                            placeholder="Nome da empresa"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300">
                                            Telefone
                                        </label>
                                        <input
                                            id="contact-phone"
                                            name="phone"
                                            type="tel"
                                            className="w-full rounded-lg border border-white/10 bg-graphite-950 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/50"
                                            placeholder="+55 (11) 99999-9999"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300">
                                        Mensagem <span className="text-neon">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full rounded-lg border border-white/10 bg-graphite-950 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/50"
                                        placeholder="Descreva seu desafio técnico..."
                                        aria-required="true"
                                        minLength={20}
                                    />
                                    <p className="text-xs text-gray-500">Mínimo 20 caracteres</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        id="contact-privacy"
                                        name="privacy"
                                        type="checkbox"
                                        required
                                        className="mt-1 h-4 w-4 rounded border-white/10 bg-graphite-950 text-neon focus:ring-2 focus:ring-neon/50"
                                        aria-required="true"
                                    />
                                    <label htmlFor="contact-privacy" className="text-xs text-gray-400">
                                        Concordo com a <a href="#" className="text-neon hover:underline">política de privacidade</a> <span className="text-neon">*</span>
                                    </label>
                                </div>

                                <Button
                                    disabled={loading || success}
                                    type="submit"
                                    className="w-full"
                                >
                                    {loading ? (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    ) : success ? (
                                        "Mensagem Enviada!"
                                    ) : (
                                        <>
                                            Enviar Mensagem
                                            <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
