import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesGrid from './components/ServicesGrid';
import YouthGroupHomes from './components/YouthGroupHomes';
import HorseAndAnimalInteractions from './components/HorseAndAnimalInteractions';
import AdultDayProgramming from './components/AdultDayProgramming';
import Standards from './components/Standards';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <YouthGroupHomes />
        <HorseAndAnimalInteractions />
        <AdultDayProgramming />
        <Standards />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
