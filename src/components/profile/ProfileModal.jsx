import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProfileModal() {
  return (
    <div className='scale-90 w-full lg:w-[30%] lg:left-[35%] h-[78svh] lg:h-[92svh] lg:top-[-10px] flex flex-col text-white fixed top-0 left-0 right-0 bottom-46 bg-zinc-900/80 backdrop-blur-sm rounded-xl'>
      <div className='w-full h-full flex flex-col justify-between'>
        {/* HEADER */}
        <div className='px-4 pt-4 lg:pt-10'>
          <p className='text-[1.1rem] lg:text-[1.4rem] font-semibold flex justify-center'>
            권영호
          </p>
          <p className='text-[0.9rem] lg:text-[1.2rem] font-semibold text-white/50 flex justify-center'>
            웹 프론트엔드 엔지니어
          </p>
        </div>
        {/* PI */}
        <div className='lg:w-[90%] lg:mx-auto backdrop-blur-lg flex mx-2 py-4 justify-around items-center rounded-lg backdrop-blur-xs lg:justify-center lg:gap-14'>
          <div className='w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] rounded-sm overflow-hidden'>
            <img
              className='w-full object-cover'
              src='/images/avatar/kyh.jpg'
              alt='프로필 사진'
            />
          </div>
          <div
            className='text-[0.9rem] lg:text-[1.3rem] px-2 lg:p-0 box-border
'
          >
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
        {/* EDUCATION */}
        {/* 1 */}
        <section className='lg:w-[90%] lg:mx-auto text-sm lg:text-xl flex flex-col gap-2 px-4'>
          <p className='text-yellow-600 font-semibold lg:mb-4'>교육</p>
          <div className='flex gap-4 justify-center'>
            <div className='text-sm flex flex-col gap-1'>
              <p className='text-sm lg:text-xl'>
                생성형 AI 활용
                <br /> 개발자 양성 과정
              </p>
              <p className='text-xs lg:text-base text-white/50'>
                (라인컴퓨터아트학원)
              </p>
              <p className='text-sm lg:text-lg text-white/50'>
                2025.07-2026.01
              </p>
            </div>
            <ul className='text-sm lg:text-lg lg:text-left lg:ml-8'>
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
          <div className='w-full border border-white/50 border mt-1 origin-top scale-y-1 lg:w-[90%] lg:m-auto lg:my-5'></div>
          <div className='mt-1 lg:m-auto'>
            <div className='text-sm lg:text-lg flex gap-6'>
              <p className='text-white/50'>2024.01-2024.02</p>
              <p className='lg:ml-8'>이젠 DX교육센터 (Vanilla JS)</p>
            </div>
            <div className='text-sm lg:text-lg flex gap-6'>
              <p className='text-white/50'>2019.11-2020.04</p>
              <p className='lg:ml-8'>그린 (UI/UX)</p>
            </div>
            <div className='text-sm lg:text-lg flex gap-6'>
              <p className='text-white/50'>2017.08-2017.08</p>
              <p className='lg:ml-8'>KISA (인터넷 거버넌스 교육)</p>
            </div>
          </div>
        </section>
        {/* 2 */}
        <section className='lg:w-[90%] lg:mx-auto text-sm lg:text-xl flex flex-col gap-1 px-4'>
          <p className='text-yellow-600 font-semibold lg:mb-4'>자격증</p>
          <div className='lg:w-full lg:m-auto'>
            <div className='lg:m-auto text-sm lg:text-lg flex gap-20 lg:gap-14'>
              <p className='lg:w-[20%] lg:ml-13 text-white/50'>2025.12</p>
              <p className='lg:ml-4'>웹디자인개발기능사</p>
            </div>
          </div>
        </section>
        {/* 3 */}
        <section className='lg:w-[90%] lg:mx-auto text-sm lg:text-xl lg:justify-center lg:items-center flex flex-col gap-1 px-4 pb-4 lg:pb-6'>
          <p className='text-yellow-600 font-semibold lg:mb-4'>학력</p>
          <div className='lg:w-full '>
            <div className='lg:m-auto text-sm lg:text-lg flex gap-6 lg:gap-1'>
              <p className='lg:w-[30%] lg:ml-7 text-white/50'>
                2012.03-2019.02
              </p>
              <p className='lg:ml-11'>경동대학교</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
