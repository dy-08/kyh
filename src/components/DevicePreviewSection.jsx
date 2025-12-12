import { useEffect, useState } from 'react';
import FeatureTabs from './FeatureTabs';
import DeviceMockup from './DeviceMockup';
import FeatureCaption from './FeatureCaption';

export default function DevicePreviewSection() {
    const [projects, setProjects] = useState([
        '/images/projects/p-react-youtube.jpg',
        '/images/projects/p-react-todo.jpg',
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    // 화면에 실제로 그려지는 이미지 인덱스(즉시 바꾸지 않음)
    const [renderIndex, setRenderIndex] = useState(0);
    // 페이드 상태
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        if (activeIndex === renderIndex) return;
        setIsFading(true);

        const t = setTimeout(() => {
            setRenderIndex(activeIndex);
            setIsFading(false);
        }, 200); // transition duration의 절반/동일 값으로 맞추면 됨

        return () => clearTimeout(t);
    }, [activeIndex, renderIndex]);
    return (
        <section className='w-full flex flex-col gap-6 justify-center items-center'>
            <DeviceMockup>
                <img
                    src={projects[renderIndex]}
                    alt='프로젝트'
                    className={`w-full h-full object-cover object-top transition-opacity duration-200 ${
                        isFading ? 'opacity-0' : 'opacity-100'
                    }`}
                />
            </DeviceMockup>
            <FeatureTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <FeatureCaption />
        </section>
    );
}
