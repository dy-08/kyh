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
  return (
    <section>
      {/* 캐러셀 뷰포트 */}
      <div className='w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 overscroll-x-contain touch-pan-x'>
        <div className='flex gap-4 p-4'>
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => handleClick(p)}
              className='w-[300px] shrink-0 snap-center'
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
