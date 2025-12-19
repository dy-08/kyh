import { CgChevronRight } from "react-icons/cg";
import TechStackIcons from './TechStackIcons';

export default function ProjectCaptionCard({ period,
    title,
    desc,
    stack = [],
    onDetailClick, }) {
    return (
        <section className='flex mt-6 flex-col w-[96%] sm:w-[80%] lg:w-[50%] mx-auto box-border px-4 py-4 flex gap-2 items-start rounded-xl border-[0.5px] border-solid border-white/10'>
            <div className='w-full font-semibold text-[14px] flex justify-start items-center'>
                <p className="text-xs text-zinc-400">{period}</p>
            </div>
            <div className="w-full font-semibold flex flex-col pl-0.5 items-start">
                <p className="text-white text-base">{title}</p>
                <p className="text-xs text-zinc-400">{desc}</p>
                <TechStackIcons stack={stack} size={25} />
                <button
                    type="button"
                    onClick={onDetailClick}
                    className="flex cursor-pointer mx-[-4px] mt-[10px] items-center"
                >
                    <CgChevronRight className="text-green-600" />
                    <span className="text-xs transition duration-500 ease-in-out text-green-700 hover:text-green-600 px-1 py-2">프로젝트 상세보기</span>
                </button>
            </div>

        </section>
    );
}
