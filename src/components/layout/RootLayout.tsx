import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-graphite-950 text-white selection:bg-neon/30 selection:text-white">
            <Header />

            {/* Background Gradients */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[128px]" />
            </div>

            <main id="main-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
