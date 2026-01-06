import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProfileModal() {
  return (
    <div className='w-full h-[78svh] flex flex-col text-white fixed top-0 left-0 right-0 bottom-46 bg-zinc-900/80 backdrop-blur-sm rounded-xl'>
      <div className='w-full h-full flex flex-col justify-between'>
        <div className='px-4 pt-4'>
          <p className='text-[1.1rem] font-semibold flex justify-center'>
            권영호
          </p>
          <p className='text-[0.9rem] font-semibold text-white/50 flex justify-center'>
            웹 프론트엔드 엔지니어
          </p>
        </div>
        <div className='backdrop-blur-lg flex mx-2 py-4 justify-around items-center rounded-lg backdrop-blur-xs'>
          {/* 사진 */}
          <div className='w-[120px] h-[120px] rounded-sm overflow-hidden'>
            <img
              className='w-full object-cover'
              src='/images/avatar/kyh.jpg'
              alt='프로필 사진'
            />
          </div>
          <div
            className='text-[0.9rem] px-2 box-border
'
          >
            {/* pi */}
            <div className='flex gap-2'>
              <span>·</span>
              <p className='text-white'> Email</p>
              <p>oioixo20@gmail.com</p>
            </div>
            <div className='flex gap-2'>
              <span>·</span>
              <p className='text-white'>Phone</p>
              <p>01080729309</p>
            </div>
            {/* skill */}
            <div className='flex gap-2'>
              <span>·</span>
              <p className='text-white'>Git</p>
              <a
                className='text-white/50 hover:text-white duration-300 ease-in-out'
                href='https://github.com/dy-08'
                target='_blank'
              >
                github.com/dy-08
                <FaExternalLinkAlt
                  className='inline-block ml-2 text-xs
'
                />
              </a>
            </div>
            <div className='flex gap-2'>
              <span>·</span>
              <p className='text-white'>Blog</p>
              <a
                className='text-white/50 hover:text-white transition duration-300 ease-in-out'
                href='https://dev-xoxo.tistory.com/'
                target='_blank'
              >
                dev-xoxo.tistory.com
                <FaExternalLinkAlt
                  className='inline-block ml-2 text-xs
'
                />
              </a>
            </div>
          </div>
        </div>
        {/* education */}
        {/* 1 */}
        <section className='text-sm flex flex-col gap-2 px-4'>
          <p className='text-yellow-600 font-semibold'>교육</p>
          <div className='flex gap-4'>
            <div className='text-sm flex flex-col gap-1'>
              <p>
                생성형 AI 활용
                <br /> 개발자 양성 과정
              </p>
              <p className='text-xs text-white/50'>(라인컴퓨터아트학원)</p>
              <p className='text-sm text-white/50'>2025.07-2026.01</p>
            </div>
            <ul className='text-sm'>
              <li>
                <span className='mr-2'>·</span>JavaScript(ES6)
              </li>
              <li>
                <span className='mr-2'>·</span>React (Components/Hooks)
              </li>
              <li>
                <span className='mr-2'>·</span>TypeScript · Next.js
              </li>
              <li>
                <span className='mr-2'>·</span>Node.js · Express
              </li>
            </ul>
          </div>
          <div className='w-full border border-white/50 border mt-1 origin-top scale-y-1'></div>
          <div className='mt-1'>
            <div className='text-sm flex gap-6'>
              <p className='text-white/50'>2024.01-2024.02</p>
              <p>이젠 DX교육센터 (Vanilla JS)</p>
            </div>
            <div className='text-sm flex gap-6'>
              <p className='text-white/50'>2019.11-2020.04</p>
              <p>그린 (UI/UX)</p>
            </div>
            <div className='text-sm flex gap-6'>
              <p className='text-white/50'>2017.08-2017.08</p>
              <p>KISA (인터넷 거버넌스 교육)</p>
            </div>
          </div>
        </section>
        {/* 2 */}
        <section className='text-sm flex flex-col gap-1 px-4'>
          <p className='text-yellow-600 font-semibold'>자격증</p>
          <div>
            <div className='text-sm flex gap-20'>
              <p className='text-white/50'>2025.12</p>
              <p>웹디자인개발기능사</p>
            </div>
          </div>
        </section>
        {/* 3 */}
        <section className='text-sm flex flex-col gap-1 px-4 pb-4'>
          <p className='text-yellow-600 font-semibold'>학력</p>
          <div>
            <div className='text-sm flex gap-6'>
              <p className='text-white/50'>2012.03-2019.02</p>
              <p>경동대학교</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
