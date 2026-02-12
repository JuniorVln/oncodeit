import { Terminal, Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Footer() {
    const footerLinks = {
        services: [
            { name: 'Core IT', href: '/servicos' },
            { name: 'AI Solutions', href: '/servicos' },
            { name: 'Consultoria', href: '/contato' },
        ],
        company: [
            { name: 'Sobre', href: '/sobre' },
            { name: 'Blog', href: '/blog' },
            { name: 'Carreiras', href: '#' },
        ],
        legal: [
            { name: 'Privacidade', href: '#' },
            { name: 'Termos de Uso', href: '#' },
            { name: 'Cookies', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Mail, href: 'mailto:contato@oncodeit.com.br', label: 'Email' },
    ];

    return (
        <footer className="border-t border-white/5 bg-graphite-950 py-16">
            <div className="mx-auto max-w-7xl px-6">
                {/* Main Footer Content */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Logo />
                        <p className="mt-4 text-sm text-gray-400">
                            Unindo a robustez da TI corporativa com a velocidade da Inteligência Artificial.
                        </p>
                        
                        {/* Social Links */}
                        <div className="mt-6">
                            <p className="mb-3 text-sm font-medium text-gray-300">Redes Sociais</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-neon/50 hover:bg-neon/10 hover:text-neon"
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Serviços
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-gray-400 transition-colors hover:text-neon"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Empresa
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-gray-400 transition-colors hover:text-neon"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 transition-colors hover:text-neon"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Terminal className="h-5 w-5 text-gray-500" />
                        <span className="font-mono text-sm text-gray-500">
                            On Code IT © 2026. São Paulo, SP.
                        </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-3 py-1">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-neon" />
                        <span className="font-mono text-xs font-medium text-neon">
                            System: Online
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
