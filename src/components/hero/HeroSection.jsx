import CTAButton from "../common/ui/CTAButton/CTAButton";
import HeroMiniDemo from "./HeroMiniDemo";

export default function HeroSection() {
    return (
        <section className="min-h-svh rounded-3xl p-4 scale-90 flex flex-col justify-between">
            {/* 상단 텍스트 */}
            <div>
                <p className="text-4xl mt-5 font-semibold leading-tight tracking-tight text-white">
                    데이터 흐름, <br />UI가 흔들리지 않게.
                </p>
                <div className="mt-3 text-base md:text-lg text-zinc-300 leading-relaxed">
                    <p>컴포넌트 설계, 고치기 쉬운 구조로.</p>
                    <p>시도하고 개선하기.</p>
                </div>
            </div>

            {/* 데모 */}
            <HeroMiniDemo />

            {/* 하단 CTA */}
            <div className="flex flex-col gap-4 items-center">
                <CTAButton label={'프로젝트 보기'} />
                <CTAButton label={'이력서 다운로드'} />
                <p className="mt-6 text-center text-sm text-zinc-400">
                    프로젝트들을 모아 정리했습니다.
                </p>
            </div>

        </section>
    )
}