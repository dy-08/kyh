import { useRef } from "react";
import "./App.css";
import DevicePreviewSection from "./components/devicePreview/DevicePreviewSection";
import HeroSection from "./components/hero/HeroSection";

function App() {
  const demoPreviewRef = useRef(null);
  const scrollToProject = () => {
    const el = demoPreviewRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      window.scrollBy({ top: rect.top - 30, left: 0, behavior: "smooth" });
    }, 0);
  };
  return (
    <section className='w-full h-full bg-neutral-950/98'>
      <HeroSection onProjectClick={scrollToProject} />
      <DevicePreviewSection ref={demoPreviewRef} />
    </section>
  );
}

export default App;
