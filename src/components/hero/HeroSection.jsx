import CTAButton from "../common/ui/CTAButton/CTAButton";
import HeroMiniDemo from "./HeroMiniDemo";
import ProfileModal from "../profile/ProfileModal";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/programmingCode.json";

export default function HeroSection({ onProjectClick }) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  console.log("isProfileModalOpen", isProfileModalOpen);

  useEffect(() => {
    const prev = document.body.style.overflow;

    //
    if (isProfileModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = prev;
    };
  }, [isProfileModalOpen]);

  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    //
    console.log("isDisabled", isDisabled);
    console.log("isProfileModalOpen", isProfileModalOpen);
    setIsDisabled(true);
    setIsProfileModalOpen((p) => !p);
    gotoTop();
  };
  const heroRef = useRef(null);
  const HEADER_OFFSET = 0;

  const gotoTop = () => {
    const el = heroRef.current;
    if (!el) return;
    console.log("scrollY", window.scrollY);
    console.log("top", el.getBoundingClientRect().top);

    const y = window.scrollY + el.getBoundingClientRect().top - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  const closeProfileModal = () => {
    if (isProfileModalOpen) {
      setIsProfileModalOpen(false);
      setIsDisabled((isDisabled) => !isDisabled);
    }
  };

  return (
    <section
      ref={heroRef}
      className='lg:w-[100%] lg:m-auto lg:text-center h-svh rounded-3xl pb-4 flex flex-col justify-between relative box-border relative z-11'
      onClick={closeProfileModal}
    >
      {/* 상단 텍스트 */}
      <div>
        <div className='w-full text-white bg-[#010409] rounded-lg backdrop-blur-sm'>
          <div className='leading-relaxed text-white/95 p-4 lg:p-8'>
            <div className='flex justify-first lg:justify-center'>
              <span className='inline-flex items-center box-border gap-1 px-1 h-[34px] leading-none rounded-md font-semibold text-[#dfefea]'>
                <span className='text-base lg:text-2xl font-semibold leading-none ml-1 mb-1'>
                  시도하고 개선하는 개발자
                </span>
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: 40, height: 40, display: "block" }}
                />
              </span>
            </div>
            <div className='text-sm lg:text-lg lg:mt-8 flex flex-col gap-[0.5px] mt-1 pl-2'>
              <p>안녕하세요, 권영호입니다.</p>
              <p>작은시도와 개선을 쌓으며 성장하고 있습니다.</p>
              <p>React로 UI와 데이터 흐름에 관심을 가지고,</p>
              <p>사용자가 편해지는 지점을 계속 찾아가고있습니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 데모 */}
      <div className='scale-90 relative top-12 lg:top-[-30px]'>
        <HeroMiniDemo />
      </div>

      {/* 하단 CTA */}
      <div className='flex flex-col gap-4 items-center scale-90'>
        <CTAButton
          onClick={onProjectClick}
          label={"프로젝트 보기"}
          isDisabled={isDisabled}
        />
        <CTAButton
          className='relative z-1'
          onClick={handleClick}
          label={"프로필 보기"}
        />
        <p className='mt-2 text-center text-base text-zinc-400'>
          프로젝트들을 모아 정리했습니다.
        </p>
      </div>
      {/* 프로필 모달 */}
      {isProfileModalOpen && <ProfileModal />}
    </section>
  );
}
