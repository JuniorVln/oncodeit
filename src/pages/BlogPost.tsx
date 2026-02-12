import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const { slug } = useParams();

    return (
        <section className="relative py-32">
            <div className="mx-auto max-w-4xl px-6">
                <h1 className="text-4xl font-bold text-white mb-8">Blog Post: {slug}</h1>
                <p className="text-gray-400 text-lg">Post em construção...</p>
            </div>
        </section>
    );
}
