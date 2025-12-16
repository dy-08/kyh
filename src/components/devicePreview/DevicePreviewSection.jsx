import { useEffect, useState } from 'react';
import DeviceMockup from '../common/ui/DeviceMockup/DeviceMockup';
import FeatureTabs from './FeatureTabs'
import ProjectCaptionCard from './ProjectCaptionCard';
import Carousel from '../common/ui/Carousel/Carousel'

const PROJECTS = [
    {
        id: "youtube",
        tabLabel: "유튜브\n클론코딩",
        image: "/images/projects/p-react-youtube.jpg",
        period: "2025.12 - 현재",
        title: "유튜브 클론코딩",
        desc: "검색·필터와 임베드 재생(불가 영상 제외)을 구현한 YouTube 클론 (다크모드·반응형·스켈레톤 UI 적용)",
        stack: ["react", "vite", "tailwindCSS", "vercel"],
        targets: ['mobile'],
    },
    {
        id: "todo",
        tabLabel: "투두\n프로젝트",
        image: "/images/projects/p-react-todo.jpg",
        period: "2025.11 - 2025.12",
        title: "투두 프로젝트",
        desc: "할 일 추가/수정/삭제(CRUD)와 필터링을 구현한 투두 앱",
        stack: ["react", "vite", "tailwindCSS"],
        targets: ['mobile'],
    },
    {
        id: "erom",
        tabLabel: "이롬",
        image: "/images/projects/p-vj-erom.png",
        period: "2025.8 - 2025.8",
        title: "Erom Corporate Website (Desktop)",
        desc: "HTML/CSS 기반 정적 랜딩 페이지 퍼블리싱",
        stack: ["javascript"],
        targets: ['desktop'],
    },
];
const MOBILE_PROJECTS = PROJECTS.filter(p => p.targets[0] === 'mobile');
const DESKTOP_PROJECTS = PROJECTS.filter(p => p.targets[0] === 'desktop');

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
        }, 200);

        return () => clearTimeout(t);
    }, [activeIndex, renderIndex]);
    return (
        <>
            {/* mobile */}
            <section className="">
                <div className='w-full scale-90 sm:scale-90 lg:scale-100 flex flex-col gap-6 justify-center items-center'>
                    {/* 공통 헤더 */}
                    <p className='text-green-600 text-sm font-bold'>프로젝트 한눈에 보기</p>
                    <p className='text-lg text-center text-white font-bold'>
                        모바일부터, 웹까지.<br />
                        핵심 프로젝트를 순서대로 정리했어요.
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
                    <FeatureTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} tabs={MOBILE_PROJECTS.map(p => p.tabLabel)} />
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
            <section className="">
                <Carousel projects={DESKTOP_PROJECTS} />
            </section>
        </>
    );
}
