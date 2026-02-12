import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Method } from './components/sections/Method';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-graphite-950 text-white selection:bg-neon/30">
      <Header />
      <main>
        <Hero />
        <Services />
        <Method />
        <Contact />
      </main>
      <Footer />

      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[128px]" />
      </div>
    </div>
  );
}

export default App;
