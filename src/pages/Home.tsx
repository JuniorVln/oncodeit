import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { Method } from '../components/sections/Method';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>On Code IT - Tecnologia Operacional e Exponencial</title>
                <meta 
                    name="description" 
                    content="Unimos a robustez da TI corporativa com a velocidade da Inteligência Artificial. Soluções em Core IT, Cloud, Cibersegurança e AI Solutions. Mais de 500 projetos entregues com 98% de satisfação." 
                />
                <meta 
                    name="keywords" 
                    content="TI corporativa, inteligência artificial, infraestrutura, cloud computing, cibersegurança, DevOps, AI solutions, consultoria TI, São Paulo" 
                />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="On Code IT - Tecnologia Operacional e Exponencial" />
                <meta 
                    property="og:description" 
                    content="Unimos a robustez da TI corporativa com a velocidade da Inteligência Artificial. Mais de 500 projetos entregues." 
                />
                <meta property="og:image" content="/og-image.jpg" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="On Code IT - Tecnologia Operacional e Exponencial" />
                <meta 
                    name="twitter:description" 
                    content="Unimos a robustez da TI corporativa com a velocidade da Inteligência Artificial." 
                />
                <meta name="twitter:image" content="/og-image.jpg" />
            </Helmet>
            
            <Hero />
            <Services />
            <Testimonials />
            <Method />
            <FAQ />
            <Contact />
        </>
    );
}
