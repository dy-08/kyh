import { useEffect, useState, useRef } from "react";
import DeviceMockup from "../common/ui/DeviceMockup/DeviceMockup";
import FeatureTabs from "./FeatureTabs";
import ProjectCaptionCard from "./ProjectCaptionCard";
import Carousel from "../common/ui/Carousel/Carousel";
import DemoSection from "./DemoSection";
import ProjectDetailCard from "../common/ui/ProjectDetailCard/ProjectDetailCard";

const PROJECTS = [
  {
    id: "VibeAttendanceSystem",
    tabLabel: ["출결관리", "바이브코딩"],
    image: "/images/projects/p-react-academy-attendance.jpg",
    period: "2025.11 (5일)",
    title: "Vibe Attendance System",
    desc: "학원 출결 관리 풀스택 웹앱",
    stack: [
      "react",
      "typescript",
      "vite",
      "sass",
      "nodejs",
      "express",
      "prisma",
      "postgresql",
    ],
    targets: ["mobile", "desktop"],
    isFeatured: true,
    link: "https://academy-attendance.netlify.app/login",
    highlights: {
      tech: "React+TS로 UI 구성, Node(Express)·Prisma로 API 연결, Postgres(Supabase) 연동",
      issue:
        "배포 환경변수 설정이 어긋나면 인증/데이터 연결이 끊겨 원인 파악이 어려움",
      fix: "env·설정 절차를 문서화하고 프론트–API–DB 흐름을 정리해 재현 가능하게 개선",
    },
  },
  {
    id: "Youtube",
    tabLabel: ["유투브", "클론코딩"],
    image: "/images/projects/p-react-youtube.jpg",
    period: "2025.12 - 현재",
    title: "유튜브 클론코딩",
    desc: "검색·상세·관련영상 재생 YouTube 클론",
    stack: ["react", "vite", "tailwindCSS", "vercel"],
    targets: ["mobile"],
    link: "https://react-youtube-ashy.vercel.app/",
    apis: ["YouTube Data API"],
    highlights: {
      tech: "YouTube Data API로 검색·상세·관련영상 구현, Tailwind 반응형, TanStack Query 적용",
      issue: "로딩/에러/빈 결과 처리 방식이 화면마다 달라 UX가 일관되지 않음",
      fix: "Query 상태 기준으로 Skeleton·에러 UI를 통일하고 데이터 흐름(요청→표시)을 표준화",
    },
  },
  {
    id: "Todo",
    tabLabel: ["투두", "프로젝트"],
    image: "/images/projects/p-react-todo.jpg",
    period: "2025.11 - 2025.12",
    title: "투두 프로젝트",
    desc: "CRUD·필터링 기능을 갖춘 투두 앱",
    stack: ["react", "vite", "tailwindCSS", "netlify"],
    targets: ["mobile"],
    link: "https://react-vite-todos.netlify.app/",
    highlights: {
      tech: "React로 Todo CRUD 구현, 필터와 다크모드 적용, localStorage로 데이터 유지",
      issue:
        "원본 목록과 필터 목록을 함께 다루며 상태가 꼬이고 초기 복원 타이밍이 흔들림",
      fix: "원본/파생 목록을 분리하고 useEffect로 저장·복원 순서를 정리해 상태 흐름을 안정화",
    },
  },
  {
    id: "Erom",
    tabLabel: "Erom",
    image: "/images/projects/p-vj-erom.png",
    period: "2025.08 (2일)",
    title: "Erom Website",
    desc: "기업형 데스크톱 인터랙션 정적 웹사이트",
    stack: ["html", "css", "javascript", "github"],
    targets: ["desktop"],
    link: "https://dy-08.github.io/erom/",
    highlights: {
      tech: "Vanilla JS로 원페이지 스크롤 구성, 풀메뉴(GNB) 토글, 슬라이드 인터랙션 구현",
      issue:
        "스크롤 이벤트가 많아지면 성능이 떨어지고 메뉴 열림/닫힘 상태가 꼬이기 쉬움",
      fix: "필요 구간에만 이벤트를 적용하고 메뉴 상태를 단일 기준으로 관리해 동작을 예측 가능하게",
    },
  },
  {
    id: "GUESS",
    tabLabel: "GUESS",
    image: "/images/projects/p-vj-guess.png",
    period: "2025.08 (2일)",
    title: "GUESS Landing Page",
    desc: "슬라이드 배너 중심 랜딩페이지 클론",
    stack: ["html", "css", "javascript", "github"],
    targets: ["desktop"],
    link: "https://dy-08.github.io/guess/",
    highlights: {
      tech: "Vanilla JS로 원페이지 랜딩 구성, 페이드 전환 무한 슬라이더 구현",
      issue:
        "무한 루프 구간에서 인덱스/전환 타이밍이 틀어지면 전환이 부자연스러워짐",
      fix: "인덱스 상태로 전환 로직을 고정하고 처음/끝 연결 케이스를 처리해 자연스럽게 순환",
    },
  },
  {
    id: "Woodin",
    tabLabel: "Woodin",
    image: "/images/projects/p-vj-woodin.png",
    period: "2025.08 (1주)",
    title: "Woodin Clone Site",
    desc: "휠 스크롤 원페이지 인터랙션 클론",
    stack: ["html", "css", "javascript", "github"],
    targets: ["desktop"],
    link: "https://dy-08.github.io/woodin/",
    highlights: {
      tech: "휠 스크롤로 섹션 스냅 이동 구현, 영상과 호버 효과를 결합한 원페이지 클론",
      issue:
        "연속 휠 입력으로 섹션이 과도하게 이동해 UX가 흔들리고 제어가 어려움",
      fix: "입력 간격/조건으로 이동을 제어하고 섹션·효과 로직을 분리해 유지보수성을 개선",
    },
  },
];
const MOBILE_PROJECTS = PROJECTS.filter((p) =>
  p.targets.find((e) => e === "mobile"),
);
const DESKTOP_PROJECTS = PROJECTS.filter((p) =>
  p.targets.find((e) => e === "desktop"),
);

console.log("MOBILE_PROJECTS", MOBILE_PROJECTS);
console.log("DESKTOP_PROJECTS", DESKTOP_PROJECTS);

export default function DevicePreviewSection({ ref }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [renderIndex, setRenderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const activeProject = MOBILE_PROJECTS[activeIndex];
  const renderProject = MOBILE_PROJECTS[renderIndex];

  useEffect(() => {
    if (activeIndex === renderIndex) return;
    setIsFading(true);

    const t = setTimeout(() => {
      setRenderIndex(activeIndex);
      setIsFading(false);
    }, 200);

    return () => clearTimeout(t);
  }, [activeIndex, renderIndex]);

  const demoVideoFileName = "vibe_demo_pc";
  const demoVideoSrc = `/videos/${demoVideoFileName}.mp4`;

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [target, setTarget] = useState(""); // "mobile" | "desktop"

  const [desktopSelected, setDesktopSelected] = useState(null);
  const toggleDetails = () => setIsDetailOpen((v) => !v);

  const mobileProjectsRef = useRef(null);
  const desktopProjectsRef = useRef(null);

  const goToProjects = (to = "mobile") => {
    const el = (to === "mobile" ? mobileProjectsRef : desktopProjectsRef)
      .current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      window.scrollBy({ top: rect.top - 18.5, left: 0, behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    const prev = document.body.style.overflow;

    if (isDetailOpen) {
      goToProjects(target);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = prev;
    };
  }, [isDetailOpen, target]);

  return (
    <>
      {/* mobile */}
      <section className='lg:w-[50%] lg:m-auto'>
        <div ref={ref} className='w-full'>
          <div className='w-full scale-90 flex flex-col gap-2.5 justify-center items-cente lg:mt-20'>
            {/* 공통 헤더 */}
            <p className='text-2xl lg:text-3xl font-semibold tracking-widest text-center text-white'>
              프로젝트 한눈에 보기
            </p>
            <p className='text-base lg:text-lg text-center text-zinc-500 mb-4'>
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
            {/* 모바일: 반응형 완료 프로젝트 */}
            <div className='flex flex-col items-center'>
              <p
                className='inline-flex justify-center items-center gap-2
  px-4 py-1.5 rounded-full
  bg-white/5 ring-1 ring-white/10
  backdrop-blur-md
  text-sm text-zinc-300 mb-2 lg:px-12 lg:py-2 lg:text-base lg:mb-12'
              >
                Mobile Preview
              </p>
            </div>
            <DeviceMockup>
              <img
                src={renderProject.image}
                alt={renderProject.title}
                className={`w-full h-full object-cover object-top transition-opacity duration-200 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              />
            </DeviceMockup>
            <FeatureTabs
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              tabs={MOBILE_PROJECTS.map((p) => p.tabLabel)}
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
      {isDetailOpen && target === "mobile" && (
        <ProjectDetailCard
          project={activeProject}
          toggle={toggleDetails}
          goToProjects={goToProjects}
        />
      )}
      {/* desktop */}
      <section className='scale-90 lg:w-[50%] lg:m-auto'>
        <div className='flex flex-col items-center' ref={desktopProjectsRef}>
          <p
            className='inline-flex justify-center items-center gap-2
  px-4 py-1.5 rounded-full
  bg-white/5 ring-1 ring-white/10
  backdrop-blur-md
  text-sm text-zinc-300 mb-2 lg:px-12 lg:py-2 lg:text-base lg:mb-12'
          >
            Desktop Preview
          </p>
        </div>
        <div>
          <Carousel
            projects={DESKTOP_PROJECTS}
            setDesktopSelected={setDesktopSelected}
            setTarget={setTarget}
            toggle={toggleDetails}
          />
        </div>
      </section>
      {isDetailOpen && target === "desktop" && (
        <ProjectDetailCard project={desktopSelected} toggle={toggleDetails} />
      )}
    </>
  );
}
