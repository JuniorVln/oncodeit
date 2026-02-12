import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="relative flex min-h-screen items-center justify-center">
            <div className="mx-auto max-w-2xl px-6 text-center">
                <h1 className="text-9xl font-bold text-neon mb-4">404</h1>
                <h2 className="text-3xl font-bold text-white mb-4">Página Não Encontrada</h2>
                <p className="text-gray-400 text-lg mb-8">
                    A página que você procura não existe ou foi movida.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-neon px-6 py-3 text-graphite-950 font-medium hover:bg-neon-hover transition-colors"
                >
                    Voltar para Home
                </Link>
            </div>
        </section>
    );
}
