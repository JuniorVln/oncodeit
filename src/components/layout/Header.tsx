import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Soluções', href: '#services' },
        { name: 'O Método', href: '#method' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="#" className="font-mono text-xl font-bold tracking-tighter text-white">
                    On Code<span className="text-indigo-500">_IT</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="outline" size="sm" className="hidden lg:flex">
                        Iniciar Projeto
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="flex p-2 text-zinc-400 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-zinc-950/90 backdrop-blur-xl md:hidden"
                >
                    <nav className="flex flex-col space-y-4 p-6">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-zinc-300 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="outline" className="w-full">
                            Iniciar Projeto
                        </Button>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
}
