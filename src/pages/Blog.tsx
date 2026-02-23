import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Calendar, ArrowRight } from 'lucide-react';

export const blogPosts = [
    {
        id: '1',
        slug: 'o-futuro-do-desenvolvimento-com-IA',
        title: 'O Futuro do Desenvolvimento com Inteligência Artificial',
        excerpt: 'Como ferramentas de IA estão transformando a forma como engenheiros escrevem, testam e fazem deploy de código em 2024.',
        date: '23 Fev 2026',
        category: 'Engenharia',
        readTime: '5 min',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop'
    },
    {
        id: '2',
        slug: 'seguranca-em-arquiteturas-cloud-native',
        title: 'Segurança em Arquiteturas Cloud Native: Zero Trust na Prática',
        excerpt: 'Estratégias avançadas para implementar modelos Zero Trust em ambientes Kubernetes e microserviços escaláveis.',
        date: '18 Fev 2026',
        category: 'Infraestrutura & Cloud',
        readTime: '8 min',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop'
    },
    {
        id: '3',
        slug: 'vantagens-bpo-tecnologia',
        title: 'Por que empresas líderes estão adotando BPO de Tecnologia?',
        excerpt: 'Análise sobre como a terceirização estratégica de times de engenharia acelera o go-to-market e otimiza recursos.',
        date: '10 Fev 2026',
        category: 'Negócios',
        readTime: '6 min',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop'
    }
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-graphite-950 font-sans selection:bg-neon/30 selection:text-neon pt-20">
            {/* Header Section */}
            <section className="relative py-24 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-neon)/0.05_0%,_transparent_70%)]" />
                <div className="container relative mx-auto px-6 lg:px-8 text-center">
                    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 font-mono text-xs text-neon backdrop-blur-sm">
                        <Terminal size={14} />
                        <span>/blog</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
                        On Code IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-400">Insights</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Artigos, tutoriais e análises profundas sobre engenharia de software, infraestrutura cloud e tendências exponenciais.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex flex-col h-full rounded-2xl border border-white/5 bg-surface-900 overflow-hidden hover:border-neon/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.1)]"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-graphite-950/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/50 text-neon border border-neon/20 backdrop-blur-md">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center text-xs text-gray-500 mb-4 font-mono">
                                        <Calendar size={14} className="mr-1.5" />
                                        {post.date}
                                        <span className="mx-2">•</span>
                                        {post.readTime} leitura
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon transition-colors">
                                        <Link to={`/blog/${post.slug}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center text-neon text-sm font-medium font-mono group/link">
                                        Ler Artigo
                                        <ArrowRight size={16} className="ml-1.5 transition-transform group-hover/link:translate-x-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
