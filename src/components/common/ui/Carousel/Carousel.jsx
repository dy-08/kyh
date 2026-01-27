import { useEffect, useRef } from "react";
import TechStackIcons from "../../../devicePreview/TechStackIcons";

export default function Carousel({
  projects,
  setDesktopSelected,
  setTarget,
  toggle,
}) {
  const handleClick = (project) => {
    setTarget("desktop");
    toggle();
    setDesktopSelected(project);
  };

  const viewportRef = useRef(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onWheel = (e) => {
      const isVerticalWheel = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (!isVerticalWheel) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= maxScrollLeft - 1;

      if (atStart && e.deltaY < 0) return;
      if (atEnd && e.deltaY > 0) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section>
      {/* 캐러셀 뷰포트 */}
      <div
        className='w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 overscroll-x-contain touch-pan-x'
        ref={viewportRef}
      >
        <div className='flex gap-4 p-4'>
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => handleClick(p)}
              className='w-[300px] lg:w-[400px] shrink-0 snap-center'
            >
              <div className='w-full aspect-[4/5] bg-zinc rounded-xl overflow-hidden'>
                <img
                  className='w-full object-contain'
                  src={projects[i].image}
                  alt={projects[i].id}
                />
              </div>
              <div className='w-full mt-4 px-3'>
                <div className='w-full text-white font-semibold flex flex-col'>
                  <span className='text-lg'>{projects[i].title}</span>
                  <span className='text-sm text-zinc-400 font-semibold'>
                    {projects[i].period}
                  </span>
                </div>
                <div className='text-sm text-zinc-400 font-semibold mt-1'>
                  {projects[i].desc}
                </div>
                <div className='mt-0.3 flex items-center gap-1 opacity-90'>
                  <TechStackIcons stack={projects[i].stack} size={28} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
