import CTAButton from "../common/ui/CTAButton/CTAButton";
import HeroMiniDemo from "./HeroMiniDemo";
import ProfileModal from "../profile/ProfileModal";
import { useState } from "react";

export default function HeroSection({ onProjectClick }) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  console.log("isProfileModalOpen", isProfileModalOpen);
  return (
    <section className='h-svh rounded-3xl p-4 scale-90 flex flex-col justify-between relative box-border'>
      {/* 상단 텍스트 */}
      <div>
        <div className='text-sm md:text-lg text-white leading-relaxed bg-white/8 rounded-lg backdrop-blur-sm'>
          <div className='text-sm leading-relaxed text-zinc-100 px-4 pt-4 pb-10'>
            안녕하세요,
            <br />
            시도하고 개선하는 개발자 권영호입니다.
            <br />
            매일 작은 개선을 쌓으며 성장하고 있습니다.
            <br />
            React로 UI 구조와 데이터 흐름을 정리합니다.
            <br />
            사용자가 편해지는 지점을 계속 찾고있습니다.
            <br />
            <br />
            <span className='float-right block text-white/50'>
              2025년 12월 31일 업데이트
            </span>
          </div>
        </div>
      </div>

      {/* 데모 */}
      <div>
        <HeroMiniDemo />
      </div>

      {/* 하단 CTA */}
      <div className='flex flex-col gap-4 items-center'>
        <CTAButton onClick={onProjectClick} label={"프로젝트 보기"} />
        <CTAButton
          onClick={() => setIsProfileModalOpen((p) => !p)}
          label={"프로필 보기"}
        />
        <p className='mt-2 text-center text-sm text-zinc-400'>
          프로젝트들을 모아 정리했습니다.
        </p>
      </div>
      {/* 프로필 모달 */}
      {isProfileModalOpen && <ProfileModal />}
    </section>
  );
}
