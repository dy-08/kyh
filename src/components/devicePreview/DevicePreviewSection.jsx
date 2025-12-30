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
    desc: "학원의 출결을 효율적으로 관리하는 풀스택 웹앱",
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
  },
];
const MOBILE_PROJECTS = PROJECTS.filter((p) =>
  p.targets.find((e) => e === "mobile")
);
const DESKTOP_PROJECTS = PROJECTS.filter((p) =>
  p.targets.find((e) => e === "desktop")
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
  console.log("target", target);
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
  console.log("캐러셀 프로젝트", desktopSelected);
  return (
    <>
      {/* mobile */}
      <section>
        <div ref={ref} className='w-full'>
          <div className='w-full scale-90 flex flex-col gap-2.5 justify-center items-cente'>
            {/* 공통 헤더 */}
            <p className='text-xs tracking-widest text-center text-zinc-500'>
              프로젝트 한눈에 보기
            </p>
            <p className='text-2xl text-center text-white mb-4'>
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
            className='w-full scale-90 flex flex-col gap-2.5 justify-center items-cente relative'
          >
            {/* 모바일: 반응형 완료 프로젝트 */}
            <div className='flex flex-col items-center'>
              <p
                className='inline-flex justify-center items-center gap-2
  px-3 py-1.5 rounded-full
  bg-white/5 ring-1 ring-white/10
  backdrop-blur-md
  text-xs text-zinc-300 mb-2'
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
            {isDetailOpen && target === "mobile" && (
              <ProjectDetailCard
                project={activeProject}
                toggle={toggleDetails}
                goToProjects={goToProjects}
              />
            )}
          </div>
        </div>
      </section>
      {/* desktop */}
      <section className='scale-90'>
        <div className='flex flex-col items-center'>
          <p
            className='inline-flex justify-center items-center gap-2
  px-3 py-1.5 rounded-full
  bg-white/5 ring-1 ring-white/10
  backdrop-blur-md
  text-xs text-zinc-300 mb-2'
          >
            Desktop Preview
          </p>
        </div>
        <div ref={desktopProjectsRef}>
          <Carousel
            projects={DESKTOP_PROJECTS}
            setDesktopSelected={setDesktopSelected}
            setTarget={setTarget}
            toggle={toggleDetails}
          />
        </div>
        {isDetailOpen && target === "desktop" && (
          <ProjectDetailCard project={desktopSelected} toggle={toggleDetails} />
        )}
      </section>
    </>
  );
}
