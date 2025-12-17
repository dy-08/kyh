import { AiOutlineCheck } from "react-icons/ai";
import { CgChevronRight } from "react-icons/cg";
import TechStackIcons from './TechStackIcons';

export default function ProjectCaptionCard({ period,
    title,
    desc,
    stack = [],
    onDetailClick, }) {
    return (
        <section className='w-[96%] sm:w-[80%] lg:w-[50%] mx-auto box-border px-4 py-4 flex gap-6 items-start rounded-xl border-[0.5px] border-solid border-white/10'>
            <div className='w-[38%] text-gray-300/90 font-bold text-[14px] flex gap-1.5 justify-center items-center my-[3px]'>
                <AiOutlineCheck className="text-green-400" />
                <p className="text-xs">{period}</p>
            </div>
            <div className="w-[58%] text-gray-300/90 font-bold flex flex-col gap-1 items-start">
                <p className="text-white text-base">{title}</p>
                <p className="text-xs">{desc}</p>
                <TechStackIcons stack={stack} size={24} />
                <button
                    type="button"
                    onClick={onDetailClick}
                    className="flex cursor-pointer mx-[-4px] mt-[10px] items-center"
                >
                    <CgChevronRight className="text-green-600" />
                    <span className="text-xs text-green-600 ml-1 px-1 py-2">프로젝트 상세보기</span>
                </button>
            </div>

        </section>
    );
}
