export default function Carousel({ projects }) {
    console.log(projects)
    return (
        <section>
            <p className="text-sm text-center text-gray-300 font-bold">.</p>
            {/* 캐러셀 뷰포트 */}
            <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory px-6">
                <div className="flex gap-4 p-4">
                    {projects.map((_, i) => (
                        <div key={i} className="w-[300px] shrink-0 snap-center">
                            <div className="w-full aspect-[4/5] bg-gray-300 rounded-xl overflow-hidden">
                                <img className="w-full object-cover" src={projects[i].image} alt={projects[i].id} />
                            </div>
                            <p className="text-white text-xs mt-4 px-3">
                                Erom Corporate Website (Desktop)<br />
                                {projects[i].desc}<br />
                                2025.XX · HTML/CSS · Vanilla JS
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}