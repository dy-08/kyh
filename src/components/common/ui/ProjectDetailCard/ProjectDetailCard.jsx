import TechStackIcons from "../../../devicePreview/TechStackIcons";
import { MdClose } from "react-icons/md";

export default function ProjectDetailCard({ project, toggle, goToProjects }) {
  return (
    <section className='fixed inset-4 z-[100]' onClick={toggle}>
      {/* dim (dim은 모달 뒤에 까는 반투명 어두운 배경(딤 처리) */}
      <div className='absolute inset-0 bg-black/40' />

      {/* ✅ 보정 스케일 래퍼 */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='w-[111.111%] h-[111.111%] scale-90 origin-top-left outline outline-2 outline-red-500'>
          {/* 기존 카드(배경/블러/라운드) */}
          <div className='h-full w-full bg-zinc-900/90 backdrop-blur-sm rounded-xl overflow-hidden'>
            {/* header */}
            <div className='p-3 pl-6 bg-white/10 text-white/50 text-sm flex justify-between items-center'>
              <p onClick={goToProjects}>프로젝트 상세보기</p>
              <MdClose
                className='absolute right-4 z-[105] text-lg cursor-pointer
'
              />
            </div>

            {/* body */}
            <div className='p-6 text-white box-border'>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-4'>
                  <div>
                    <p className='text-2xl font-semibold'>{project.title}</p>
                  </div>
                  {/* DESC */}
                  <div className='text-sm'>
                    <p className='text-zinc-400'>프로젝트 설명</p>
                    <p className='text-white/90 font-semibold'>
                      {project.desc}
                    </p>
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
                          <li key={a} className='text-white/90 font-semibold'>
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
                  <p className='text-zinc-400'>핵심 내용</p>
                  <ul className='text-sm text-white font-semibold leading-relaxed flex flex-col gap-4'>
                    <li className='flex flex-col gap-1 items-start mt-6'>
                      <span className='shrink-0 text-xs font-semibold text-white/60 px-2 py-1 rounded-md bg-white/10'>
                        Tech
                      </span>
                      <p>{project.highlights.tech}</p>
                    </li>
                    <li className='flex flex-col gap-1 items-start'>
                      <span className='shrink-0 text-xs font-semibold text-white/60 px-2 py-1 rounded-md bg-white/10'>
                        Issue
                      </span>
                      <p>{project.highlights.issue}</p>
                    </li>
                    <li className='flex flex-col gap-1 items-start'>
                      <span className='shrink-0 text-xs font-semibold text-white/60 px-2 py-1 rounded-md bg-white/10'>
                        Fix
                      </span>
                      <p>{project.highlights.fix}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
