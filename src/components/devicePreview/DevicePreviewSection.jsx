import { useEffect, useState, useRef } from 'react';
import DeviceMockup from '../common/ui/DeviceMockup/DeviceMockup';
import FeatureTabs from './FeatureTabs';
import ProjectCaptionCard from './ProjectCaptionCard';
import Carousel from '../common/ui/Carousel/Carousel';
import DemoSection from './DemoSection';
import ProjectDetailCard from '../common/ui/ProjectDetailCard/ProjectDetailCard';

const PROJECTS = [
  // Featured / Others
  {
    id: 'Shoppy',
    developers: 1,
    tabLabel: ['쇼핑몰', '개인'],
    image: '/images/projects/p-react-shoppy.png',
    period: '2026.02 – 진행 중',
    title: 'Shoppy',
    desc: 'Firebase 기반 쇼핑몰: 상품 조회, 장바구니 CRUD, 관리자 상품 등록',
    stack: ['react', 'vite', 'tailwindCSS', 'firebase', 'cloudinary', 'vercel'],
    targets: ['Featured'],
    isFeatured: true,
    link: 'https://shoppy-six.vercel.app/',
    apis: ['Firebase Auth/DB', 'Cloudinary Unsigned Upload'],
    highlights: {
      feature:
        '상품 조회, 장바구니 담기·수량 변경·삭제, 관리자 상품 등록 기능 구현',
      tech: 'Firebase 기반으로 상품·장바구니 데이터 구조를 설계하고, React Query로 상태 동기화 및 invalidateQueries 처리',
      learn:
        '서버 없이도 Firebase를 활용해 쇼핑 흐름을 구현하며 인증과 데이터 흐름, 상태 동기화 설계를 익힘',
    },
  },
  {
    id: 'VibeAttendanceSystem',
    developers: 2,
    tabLabel: ['출결관리', '팀플(2인)'],
    image: '/images/projects/p-react-academy-attendance.jpg',
    period: '2025.11 (5일)',
    title: 'Vibe Attendance System',
    desc: '학원의 출결을 효율적으로 관리하는 풀스택 웹앱',
    stack: [
      'react',
      'typescript',
      'vite',
      'sass',
      'nodejs',
      'express',
      'prisma',
      'postgresql',
    ],
    targets: ['Featured'],
    isFeatured: true,
    link: 'https://academy-attendance.netlify.app/login',
    highlights: {
      feature:
        '학생 출결 상태 변경 및 기록 관리 기능을 제공하는 학원 출결 관리 웹앱',
      tech: '2인 팀 프로젝트로 기능 구조를 논의하고, Cursor AI를 활용해 React 화면과 API 연동 기능 구현에 참여',
      learn:
        '프롬프트를 통해 요구사항을 구체화하고, AI와 반복적인 수정 과정을 거쳐 기능을 완성하는 개발 흐름을 경험',
    },
  },
  {
    id: 'Youtube',
    developers: 1,
    tabLabel: ['유튜브', '개인'],
    image: '/images/projects/p-react-youtube.jpg',
    period: '2025.12 - 2025.12',
    title: '유튜브 클론코딩',
    desc: '검색·상세·관련영상 재생 YouTube 클론',
    stack: ['react', 'vite', 'tailwindCSS', 'vercel'],
    targets: ['Others'],
    link: 'https://react-youtube-ashy.vercel.app/',
    apis: ['YouTube Data API'],
    highlights: {
      feature:
        '영상 검색, 상세 페이지, 관련 영상 재생 기능을 제공하는 YouTube 클론',
      tech: 'YouTube Data API 연동, React Query를 활용한 데이터 캐싱 및 로딩·에러 상태 분기 처리',
      learn:
        '외부 API 기반 화면 흐름을 구성하며 비동기 데이터 처리와 사용자 경험 설계의 중요성을 체감',
    },
  },
  {
    id: 'Todo',
    developers: 1,
    tabLabel: ['투두', '개인'],
    image: '/images/projects/p-react-todo.jpg',
    period: '2025.11 - 2025.11',
    title: '투두 프로젝트',
    desc: 'CRUD·필터링 기능을 갖춘 투두 앱',
    stack: ['react', 'vite', 'tailwindCSS', 'netlify'],
    targets: ['Others'],
    link: 'https://react-vite-todos.netlify.app/',
    highlights: {
      feature:
        '할 일 추가·수정·삭제, 필터링, 다크모드 기능을 갖춘 Todo CRUD 앱',
      tech: '원본 상태와 필터 상태를 분리해 관리하고 localStorage에 상태를 저장해 유지',
      learn:
        '상태 구조를 단순하게 설계하는 것이 버그를 줄이고 유지보수를 쉽게 만든다는 점을 경험',
    },
  },
];
const FEATURED_PROJECTS = PROJECTS.filter((p) =>
  p.targets.find((e) => e === 'Featured'),
);
const OTHERS_PROJECTS = PROJECTS.filter((p) =>
  p.targets.find((e) => e === 'Others'),
);

// 2026-02-06
// MOBILE_PROJECTS => FEATURED_PROJECTS
// DESKTOP_PROJECTS => OTHERS_PROJECTS

export default function DevicePreviewSection({ ref }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [renderIndex, setRenderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const activeProject = FEATURED_PROJECTS[activeIndex];
  const renderProject = FEATURED_PROJECTS[renderIndex];

  useEffect(() => {
    if (activeIndex === renderIndex) return;
    setIsFading(true);

    const t = setTimeout(() => {
      setRenderIndex(activeIndex);
      setIsFading(false);
    }, 200);

    return () => clearTimeout(t);
  }, [activeIndex, renderIndex]);

  const demoVideoFileName = 'vibe_demo_pc';
  const demoVideoSrc = `/videos/${demoVideoFileName}.mp4`;

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [target, setTarget] = useState('');

  const [desktopSelected, setDesktopSelected] = useState(null);
  const toggleDetails = () => setIsDetailOpen((v) => !v);

  const mobileProjectsRef = useRef(null);
  const desktopProjectsRef = useRef(null);

  const goToProjects = (to = 'mobile') => {
    const el = (to === 'mobile' ? mobileProjectsRef : desktopProjectsRef)
      .current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setTimeout(() => {
      window.scrollBy({ top: rect.top - 18.5, left: 0, behavior: 'smooth' });
    }, 0);
  };

  useEffect(() => {
    const prev = document.body.style.overflow;

    if (isDetailOpen) {
      goToProjects(target);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = prev;
    };
  }, [isDetailOpen, target]);

  return (
    <>
      {/* FEATURED_PROJECTS */}
      <section className='lg:w-[50%] lg:m-auto'>
        <div ref={ref} className='w-full'>
          <div className='w-full scale-90 flex flex-col gap-2.5 justify-center items-cente lg:mt-20'>
            {/* 공통 헤더 */}
            <p className='text-2xl font-semibold tracking-widest text-center text-white'>
              프로젝트 한눈에 보기
            </p>
            <p className='text-base text-center text-zinc-500 mb-4'>
              모바일부터, 웹까지.
              <br />
              <span className='block mt-0.5 mb-1'>
                프로젝트를 순서대로 정리했어요.
              </span>
            </p>
          </div>

          {/* 바이브 데모 영상 */}
          <DemoSection demoVideoSrc={demoVideoSrc} />

          <div
            ref={mobileProjectsRef}
            className='w-full mt-8 lg:mt-20 scale-90 flex flex-col gap-3 justify-center items-cente relative'
          >
            {/* 대표 프로젝트 - 2*/}
            <div className='flex flex-col items-center'>
              <p
                className='inline-flex justify-center items-center gap-2
  px-4 py-1.5 rounded-full
  bg-white/5 ring-1 ring-white/10
  backdrop-blur-md
  text-sm text-zinc-300 mb-2 lg:px-12 lg:py-2 lg:text-base lg:mb-12'
              >
                대표 프로젝트
              </p>
            </div>
            <DeviceMockup>
              <img
                src={renderProject.image}
                alt={renderProject.title}
                className={`w-full h-full object-cover object-top transition-opacity duration-200 ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </DeviceMockup>
            <FeatureTabs
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              tabs={FEATURED_PROJECTS.map((p) => p.tabLabel)}
            />
            <div className='w-full flex flex-col gap-1'>
              <ProjectCaptionCard
                period={activeProject.period}
                title={activeProject.title}
                desc={activeProject.desc}
                stack={activeProject.stack}
                onDetailClick={toggleDetails}
                setTarget={setTarget}
              />
            </div>
          </div>
        </div>
      </section>
      {isDetailOpen && target === 'mobile' && (
        <ProjectDetailCard
          project={activeProject}
          toggle={toggleDetails}
          goToProjects={goToProjects}
        />
      )}
      {/* OTHERS_PROJECTS */}
      <section className='scale-90 lg:w-[50%] lg:m-auto'>
        <div className='flex flex-col items-center' ref={desktopProjectsRef}>
          <p
            className='inline-flex justify-center items-center gap-2
  px-4 py-1.5 rounded-full
  bg-white/5 ring-1 ring-white/10
  backdrop-blur-md
  text-sm text-zinc-300 mb-2 lg:px-12 lg:py-2 lg:text-base lg:mb-12'
          >
            기타 프로젝트
          </p>
        </div>
        <div>
          <Carousel
            projects={OTHERS_PROJECTS}
            setDesktopSelected={setDesktopSelected}
            setTarget={setTarget}
            toggle={toggleDetails}
          />
        </div>
      </section>
      {isDetailOpen && target === 'desktop' && (
        <ProjectDetailCard project={desktopSelected} toggle={toggleDetails} />
      )}
    </>
  );
}
