import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Process from './components/Process.jsx';
import WhyUs from './components/WhyUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import GalleryCarousel from './components/GalleryCarousel.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  // Reveal-on-scroll observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Process />
        <WhyUs />
        <Testimonials />
        <GalleryCarousel />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
