import { useRef } from 'react';
import './App.css';
import DevicePreviewSection from './components/devicePreview/DevicePreviewSection';
import HeroSection from './components/hero/HeroSection';
import GiscusGuestbook from './components/guestbook/GiscusGuestbook';
import Footer from './components/common/ui/Footer/Footer';

function App() {
  const demoPreviewRef = useRef(null);
  const scrollToProject = () => {
    const el = demoPreviewRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setTimeout(() => {
      window.scrollBy({ top: rect.top - 60, left: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <section className='w-full h-full bg-[#0d1117] flex flex-col gap-6 box-border'>
      <HeroSection onProjectClick={scrollToProject} />
      <DevicePreviewSection ref={demoPreviewRef} />
      <GiscusGuestbook />
      <Footer />
    </section>
  );
}

export default App;
