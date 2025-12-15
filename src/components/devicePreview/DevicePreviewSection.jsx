import { useEffect, useState } from 'react';
import DeviceMockup from './mobile/DeviceMockup';
import FeatureTabs from './mobile/FeatureTabs'
import ProjectCaptionCard from './ProjectCaptionCard';

const PROJECTS = [
    {
        id: "youtube",
        tabLabel: "유튜브\n클론코딩",
        image: "/images/projects/p-react-youtube.jpg",
        period: "2025.12 - 현재",
        title: "유튜브 클론코딩",
        desc: "YouTube Data API를 활용한 영상 검색·재생 웹 애플리케이션",
        stack: ["react", "vite", "tailwindCSS", "vercel"],
        targets: ['mobile'],
    },
    {
        id: "todo",
        tabLabel: "투두\n프로젝트",
        image: "/images/projects/p-react-todo.jpg",
        period: "2025.11 - 2025.12",
        title: "투두 프로젝트",
        desc: "상태 관리와 CRUD 중심의 투두 웹 애플리케이션",
        stack: ["react", "vite", "tailwindCSS"],
        targets: ['mobile'],
    },
];

export default function DevicePreviewSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const [renderIndex, setRenderIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const activeProject = PROJECTS[activeIndex];
    const renderProject = PROJECTS[renderIndex];

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
        <>
            {/* mobile */}
            <section className="block lg:hidden">
                <div className='w-full scale-90 sm:scale-90 lg:scale-100 flex flex-col gap-6 justify-center items-center'>
                    {/* 공통 헤더 */}
                    <p className='text-green-600 text-sm font-bold'>프로젝트 한눈에 보기</p>
                    <p className='text-base text-center text-white font-bold'>
                        기간과 기술 스택을 중심으로<br />
                        주요 프로젝트를 빠르게 살펴보세요.
                    </p>

                    {/* 모바일: 반응형 완료 프로젝트 */}
                    <DeviceMockup>
                        <img
                            src={renderProject.image}
                            alt={renderProject.title}
                            className={`w-full h-full object-cover object-top transition-opacity duration-200 ${isFading ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                    </DeviceMockup>
                    <FeatureTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} tabs={PROJECTS.map(p => p.tabLabel)} />
                    <div className='w-full flex flex-col gap-1'>
                        <ProjectCaptionCard
                            period={activeProject.period}
                            title={activeProject.title}
                            desc={activeProject.desc}
                            stack={activeProject.stack}
                            onDetailClick={() => console.log("modal")}
                        />
                    </div>
                </div>
            </section>
            {/* desktop */}
            <section className="hidden lg:block">
                {/* DesktopProjectSlider 여기에 */}
            </section>
        </>
    );
}
