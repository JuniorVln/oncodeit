import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Reusing the same data structure from Blog.tsx for demonstration. 
// In a real app, this would come from an API or a CMS.
const blogPostsData = [
    {
        id: '1',
        slug: 'o-futuro-do-desenvolvimento-com-IA',
        title: 'O Futuro do Desenvolvimento com Inteligência Artificial',
        excerpt: 'Como ferramentas de IA estão transformando a forma como engenheiros escrevem, testam e fazem deploy de código em 2024.',
        content: `
A revolução da Inteligência Artificial não está apenas nas ferramentas que os usuários finais utilizam, mas também na maneira como os próprios softwares são construídos. Assistentes virtuais de código e agentes autônomos estão alterando permanentemente o paradigma do desenvolvimento de software.

### A Ascensão dos Assistentes de Código

Ferramentas como o GitHub Copilot e o ChatGPT mudaram a velocidade com que nós, desenvolvedores, escrevemos "boilerplate code". A IA agora é capaz de entender o contexto do nosso trabalho, sugar repositórios inteiros e fornecer sugestões não triviais.

### Impacto na Qualidade e Testes

A maior disrupção, entretanto, está chegando à etapa de QA e Testes. Modelos preditivos podem analisar pipelines de CI/CD para identificar trechos de código que historicamente mais apresentam bugs.

### O Papel do Desenvolvedor

A profissão não vai desaparecer, mas vai evoluir. O desenvolvedor do futuro (e do presente já na On Code IT) atua muito mais como um **Orquestrador de Sistemas** e **Arquiteto de Soluções** do que um digitador de linhas de código. A criatividade, a resolução de problemas complexos de negócios e a arquitetura de alto nível tornam-se habilidades fundamentais.
        `,
        date: '23 Fev 2026',
        category: 'Engenharia',
        readTime: '5 min',
        author: {
            name: 'Junior Heinrichs',
            role: 'Lead Architect',
            avatar: '/junior-avatar.jpg'
        },
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop'
    },
    {
        id: '2',
        slug: 'seguranca-em-arquiteturas-cloud-native',
        title: 'Segurança em Arquiteturas Cloud Native: Zero Trust na Prática',
        excerpt: 'Estratégias avançadas para implementar modelos Zero Trust em ambientes Kubernetes e microserviços escaláveis.',
        content: `
Com a migração acelerada para infraestruturas Cloud Native baseadas em microserviços, o perímetro de rede tradicional desapareceu. A abordagem clássica de segurança do tipo "castelo e fosso" já não é suficiente. É aqui que a arquitetura *Zero Trust* se torna indispensável.

### Nunca Confie, Sempre Verifique

O princípio fundamental do Zero Trust é que nenhuma entidade — seja ela interna ou externa à rede — é confiável por padrão. Todo acesso deve ser autenticado e autorizado continuamente.

### Implementação em Kubernetes

Em clusters Kubernetes, a implementação típica de Zero Trust exige o uso de um Service Mesh (como Istio ou Linkerd).
1.  **mTLS (Mutual TLS):** Todo o tráfego entre pods deve ser criptografado e mutuamente autenticado.
2.  **Políticas de Rede Baseadas em Identidade:** Autenticação a nível L7 (Aplicação) em vez de apenas L3/L4 (Rede).

### A Visão da On Code IT

Para os nossos clientes, tratamos a segurança como infraestrutura como código (IaC). A segurança não é um "add-on" adicionado no final do ciclo, mas um pilar nativo de qualquer sistema escalável que desenhamos.
        `,
        date: '18 Fev 2026',
        category: 'Infraestrutura & Cloud',
        readTime: '8 min',
        author: {
            name: 'Junior Heinrichs',
            role: 'Head of Cloud Security',
            avatar: '/junior-avatar.jpg'
        },
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop'
    },
    {
        id: '3',
        slug: 'vantagens-bpo-tecnologia',
        title: 'Por que empresas líderes estão adotando BPO de Tecnologia?',
        excerpt: 'Análise sobre como a terceirização estratégica de times de engenharia acelera o go-to-market e otimiza recursos.',
        content: `
Montar um esquadrão de tecnologia ("Tech Squad") de alta performance é demorado, custoso e arriscado para grande parte das empresas cujo negócio central não é o desenvolvimento de software.

### O Surgimento do BPO de TI Ágil

O modelo de outsourcing evoluiu drasticamente. Não se trata mais apenas de contratar desenvolvedores freelancers desconectados. O BPO moderno envolve *Squads as a Service* — times inteiros, já engrenados, com PMs, QAs, Devs e Tech Leads gerenciados externamente.

### Foco no Core Business

Ao externalizar o fardo de recrutamento técnico, retenção de talentos STEM e gestão de infraestrutura de TI, diretores e C-levels podem focar 100% de sua atenção nas regras de negócios, vendas e na jornada do usuário.

### Conclusão

Terceirizar de forma inteligente com uma parceira moderna de engenharia de software não é mais tido como redução de custo, e sim como ganho agressivo de *Time to Market*. É o ingrediente que separa as empresas que entregam, das que ficam patinando no backlog.
        `,
        date: '10 Fev 2026',
        category: 'Negócios',
        readTime: '6 min',
        author: {
            name: 'Junior Heinrichs',
            role: 'Business Strategist',
            avatar: '/junior-avatar.jpg'
        },
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop'
    }
];

export default function BlogPost() {
    const { slug } = useParams();

    // Find the current post
    const post = blogPostsData.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-graphite-950 flex flex-col items-center justify-center pt-20">
                <h1 className="text-4xl font-bold text-white mb-4">404 - Post não encontrado</h1>
                <p className="text-gray-400 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
                <Link to="/blog">
                    <Button>Voltar para o Blog</Button>
                </Link>
            </div>
        );
    }

    // Function to render content with rudimentary Markdown-like parsing for headers
    const renderContent = (content: string) => {
        return content.split('\n').map((paragraph, idx) => {
            if (!paragraph.trim()) return null;

            if (paragraph.startsWith('### ')) {
                return (
                    <h3 key={idx} className="text-2xl font-bold text-white mt-10 mb-4">
                        {paragraph.replace('### ', '')}
                    </h3>
                );
            }

            // Handle bold text (simple regex)
            const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neon">$1</strong>');

            // Handle lists
            if (paragraph.match(/^\d+\.\s/)) {
                return (
                    <div key={idx} className="flex gap-2 text-gray-300 mb-4 pl-4">
                        <span className="text-neon">{paragraph.split('.')[0]}.</span>
                        <span dangerouslySetInnerHTML={{ __html: formattedText.replace(/^\d+\.\s/, '') }} />
                    </div>
                );
            }

            return (
                <p key={idx}
                    className="text-gray-300 mb-6 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: formattedText }}
                />
            );
        });
    };

    return (
        <article className="min-h-screen bg-graphite-950 font-sans selection:bg-neon/30 selection:text-neon pb-24">
            {/* Header Image & Title */}
            <div className="relative w-full flex flex-col justify-end min-h-[70vh] pt-20 pb-16">
                {/* Darkening Overlays */}
                <div className="absolute inset-0 bg-graphite-950/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/30 to-transparent z-10" />

                {/* Fade to background gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-graphite-950 to-transparent z-[15]" />

                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />

                <div className="relative z-20 w-full">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <Link to="/blog" className="inline-flex items-center text-neon hover:text-green-400 transition-colors font-mono text-sm mb-6">
                                <ArrowLeft size={16} className="mr-2" />
                                Voltar para Insights
                            </Link>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neon/10 text-neon border border-neon/20 backdrop-blur-md">
                                    {post.category}
                                </span>
                                <div className="flex items-center text-sm text-gray-400 font-mono">
                                    <Terminal size={14} className="mr-1.5" />
                                    {post.slug}
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap shadow-sm bg-surface-900 border border-white/5 rounded-xl p-4 md:p-6 w-fit items-center gap-6 mt-8">
                                <div className="flex items-center gap-3">
                                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border border-white/10" />
                                    <div>
                                        <div className="text-white font-medium">{post.author.name}</div>
                                        <div className="text-xs text-neon">{post.author.role}</div>
                                    </div>
                                </div>
                                <div className="hidden md:block w-px h-8 bg-white/10" />
                                <div className="flex items-center text-sm text-gray-400 font-mono">
                                    <Calendar size={14} className="mr-2" />
                                    {post.date}
                                </div>
                                <div className="hidden md:block w-px h-8 bg-white/10" />
                                <div className="flex items-center text-sm text-gray-400 font-mono">
                                    <Clock size={14} className="mr-2" />
                                    {post.readTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <div className="container mx-auto px-6 lg:px-8 pt-16">
                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 max-w-3xl"
                    >
                        <p className="text-xl text-gray-400 font-medium mb-10 leading-relaxed italic border-l-2 border-neon pl-6">
                            "{post.excerpt}"
                        </p>

                        <div className="prose prose-invert prose-lg max-w-none">
                            {renderContent(post.content)}
                        </div>

                        {/* Share & Actions */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400 font-mono text-sm">Compartilhar:</span>
                                <button className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-neon transition-colors">
                                    <Share2 size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <div className="lg:w-80 space-y-8">
                        <div className="p-6 rounded-2xl border border-white/5 bg-surface-900 sticky top-28">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Terminal size={18} className="text-neon" />
                                Sobre a On Code IT
                            </h4>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                Somos uma software house focada em criar infraestruturas digitais de alta performance e squads ágeis para escalar o seu negócio de forma segura.
                            </p>
                            <Link to="/contato" className="block">
                                <Button variant="primary" className="w-full justify-center">
                                    Fale com um Especialista
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
