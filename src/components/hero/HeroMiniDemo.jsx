import { useEffect, useState } from "react"
import { MiniCardSkeleton } from "../common/ui/MiniCard/MiniCardSkeleton"
import MiniCard from "../common/ui/MiniCard/MiniCard"

export default function HeroMiniDemo() {
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [showCard, setShowCard] = useState(false);
    useEffect(() => {
        let skeleton = setTimeout(() => setShowSkeleton(true), 500);
        const card = setTimeout(() => setShowCard(true), 1500);
        skeleton = setTimeout(() => setShowSkeleton(false), 2500);
        return () => {
            clearTimeout(skeleton);
            clearTimeout(card);
        };
    }, [])
    return (
        <div className="w-full max-w-[520px] mx-auto mt-10">
            <div className="relative min-h-[140px] mb-35">
                {/* skeleton  */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${showSkeleton ? 'opacity-100' : 'opacity-0'}`}>
                    <MiniCardSkeleton />
                </div>
                {/* real card */}
                <div className={`absolute inset-0 transition-all duration-2000 ease-out ${showCard ? 'opacity-100 top-26' : 'opacity-0 inset-0'}`}>
                    {/* <MiniCard /> */}
                    <MiniCard />
                </div>
            </div>
        </div>
    )
}

