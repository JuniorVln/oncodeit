import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Services from './pages/Services';
import TerceirizacaoTI from './pages/ServicesDetail/TerceirizacaoTI';
import Infraestrutura from './pages/ServicesDetail/Infraestrutura';
import Desenvolvimento from './pages/ServicesDetail/Desenvolvimento';
import InteligenciaArtificial from './pages/ServicesDetail/InteligenciaArtificial';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import RootLayout from './components/layout/RootLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'servicos',
                element: <Services />,
            },
            {
                path: 'servicos/terceirizacao-ti',
                element: <TerceirizacaoTI />,
            },
            {
                path: 'servicos/infraestrutura',
                element: <Infraestrutura />,
            },
            {
                path: 'servicos/desenvolvimento',
                element: <Desenvolvimento />,
            },
            {
                path: 'servicos/ia',
                element: <InteligenciaArtificial />,
            },
            {
                path: 'sobre',
                element: <About />,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'blog/:slug',
                element: <BlogPost />,
            },
            {
                path: 'contato',
                element: <Contact />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export function AppRouter() {
    return (
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    );
}
