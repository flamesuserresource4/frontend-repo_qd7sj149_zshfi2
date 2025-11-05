import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ServicesContact from './components/ServicesContact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0b10] text-white">
      {/* Top nav (simple anchor links for smooth scroll) */}
      <header className="fixed left-0 right-0 top-0 z-40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/80 hover:text-white">DEEPSITE</a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Portfolio />
        <ServicesContact />
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Deepsite • Built with motion and precision
      </footer>
    </div>
  );
}

export default App;
