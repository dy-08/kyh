import { AiOutlineCheck } from "react-icons/ai";
import { CgChevronRight } from "react-icons/cg";
import TechStackIcons from './TechStackIcons';

export default function ProjectCaptionCard({ period,
    title,
    desc,
    stack = [],
    onDetailClick, }) {
    return (
        <section className='w-[96%] sm:w-[90%] lg:w-[80%] mx-auto box-border px-4 py-6 flex gap-6 items-start rounded-xl border-[0.5px] border-solid border-white/10'>
            <div className='text-gray-300/90 font-bold text-[14px] flex gap-1.5 justify-center items-center my-[3px]'>
                <AiOutlineCheck className="text-green-400" />
                <p className="text-xs">{period}</p>
            </div>
            <div className="text-gray-300/90 font-bold flex flex-col gap-1 items-start">
                <p className="text-white text-sm">{title}</p>
                <p className="text-xs">{desc}</p>


                <TechStackIcons stack={stack} />

                <button
                    type="button"
                    onClick={onDetailClick}
                    className="flex cursor-pointer mx-[-4px] mt-[10px] items-center"
                >
                    <CgChevronRight className="text-green-700" />
                    <span className="text-xs text-green-700 ml-1">프로젝트 상세보기</span>
                </button>
            </div>

        </section>
    );
}
