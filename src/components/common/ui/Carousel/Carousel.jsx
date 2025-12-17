import TechStackIcons from "../../../devicePreview/TechStackIcons";

export default function Carousel({ projects }) {
    console.log(projects)
    return (
        <section>
            <p className="text-sm text-center text-gray-300 mb-6 font-bold">.</p>
            {/* 캐러셀 뷰포트 */}
            <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory px-6">
                <div className="flex gap-4 p-4">
                    {projects.map((_, i) => (
                        <div key={i} className="w-[300px] shrink-0 snap-center">
                            <div className="w-full aspect-[4/5] bg-gray-300 rounded-xl overflow-hidden">
                                <img className="w-full object-cover" src={projects[i].image} alt={projects[i].id} />
                            </div>
                            <div className="w-full mt-4 px-3">
                                <div className="w-full text-white text-xs font-bold flex items-center">
                                    <span className="text-sm">{projects[i].title}</span>
                                    <span className="ml-1 text-gray-300/90"> · {projects[i].period}</span>
                                </div>
                                <div className="mt-0.3 flex items-center gap-1 opacity-90">
                                    <TechStackIcons stack={projects[i].stack} size={21} />
                                </div>
                                <div className="text-gray-300/90 font-bold text-xs mt-1">
                                    {projects[i].desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}