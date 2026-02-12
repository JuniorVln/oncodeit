import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Serviços', href: '/servicos' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contato', href: '/contato' },
    ];

    return (
        <>
            {/* Skip to main content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-neon focus:px-4 focus:py-2 focus:text-graphite-950 focus:outline-none focus:ring-2 focus:ring-neon"
            >
                Pular para o conteúdo principal
            </a>

            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-graphite-950/50 backdrop-blur-xl"
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link to="/">
                        <Logo />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {links.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neon/50 focus:ring-offset-2 focus:ring-offset-graphite-950 ${isActive ? 'text-neon' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Button
                            variant="outline"
                            size="sm"
                            className="hidden lg:flex"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Iniciar Projeto
                        </Button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="flex p-2 text-gray-400 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-graphite-950/90 backdrop-blur-xl md:hidden"
                    >
                        <nav className="flex flex-col space-y-4 p-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => {
                                    setIsOpen(false);
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Iniciar Projeto
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </motion.header>
        </>
    );
}
