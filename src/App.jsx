import './App.css';
import DevicePreviewSection from './components/devicePreview/DevicePreviewSection';
import HeroSection from './components/hero/HeroSection';

function App() {
    return (
        <section className='w-full h-full bg-neutral-950'>
            <HeroSection />
            <DevicePreviewSection />
        </section>
    );
}

export default App;
