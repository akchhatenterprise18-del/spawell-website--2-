import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutBrief from '@/components/AboutBrief';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutBrief />
      {/* <Services /> */}
      <WhyUs />
      <Experience />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />

      <div className="floating-buttons">
        <a href="https://wa.me/918336915555" className="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
          <img src="/assets/images/whatsapp-icon.svg" alt="WhatsApp" />
        </a>
        <a href="tel:+918336915555" className="call-float" aria-label="Call Us">
          <img src="/assets/images/phone-icon.svg" alt="Call Us" />
        </a>
      </div>
    </main>
  );
}
