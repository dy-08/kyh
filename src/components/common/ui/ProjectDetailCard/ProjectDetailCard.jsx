import TechStackIcons from "../../../devicePreview/TechStackIcons";
import { MdClose } from "react-icons/md";

export default function ProjectDetailCard({ project, toggle, goToProjects }) {
  return (
    <section className='fixed inset-0 bg-zinc-900/90 backdrop-blur-sm rounded-xl overflow-hidden'>
      <div className='p-3 pl-6 bg-white/10 text-white/50 text-sm flex justify-between items-center'>
        <p onClick={goToProjects}>프로젝트 상세보기</p>
        <MdClose
          className='text-lg cursor-pointer
'
          onClick={toggle}
        />
      </div>
      <div className='p-6 text-white box-border'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <div>
              <p className='text-2xl font-semibold'>{project.title}</p>
            </div>
            {/* DESC */}
            <div className='text-sm'>
              <p className='text-zinc-400'>프로젝트 설명</p>
              <p className='text-white/90 font-semibold'>{project.desc}</p>
            </div>
            {/* Link */}
            <div className='text-sm'>
              <p className='text-zinc-400'>배포사이트</p>
              <p className='text-white/90 font-semibold'>
                <a href={project.link} target='_blank'>
                  {project.id}
                </a>
              </p>
            </div>
            {/* Stack */}
            <div className='text-sm'>
              <p className='text-zinc-400'>기술 스택</p>
              <TechStackIcons stack={project.stack} size='28' />
            </div>
            {/* APIs */}
            {project.apis?.length > 0 && (
              <div className='text-sm'>
                <p className='text-zinc-400'>APIs</p>
                <ul>
                  {project.apis.map((a) => (
                    <li key={a} className='text-white/98'>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Developers & Duration */}
            <div className='flex gap-6'>
              <div className='text-sm flex flex-col'>
                <p className='text-zinc-400'>참여인원</p>
                <p>1명</p>
              </div>
              <div className='text-sm flex flex-col'>
                <p className='text-zinc-400'>기간</p>
                <p>{project.period}</p>
              </div>
            </div>
          </div>
          <div className='border-t-[0.5px] border-white/10'></div>
          <div className='text-sm'>
            {/* Troubleshooting */}
            <p className='text-zinc-400'>배운점</p>
          </div>
        </div>
      </div>
    </section>
  );
}
