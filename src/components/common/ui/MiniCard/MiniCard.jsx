import React from "react";

export default function MiniCard() {
  return (
    <div className='flex flex-col gap-10 text-lg rounded-3xl bg-zinc-900/60 ring-1 ring-white/5 px-4 py-6 lg:px-8 lg:py-8 lg:text-xl lg:text-left lg:gap-34'>
      <div className='flex flex-col gap-0.5 lg:gap-2'>
        <p className='text-white font-semibold'>유투브 클론코딩</p>
        <p className='text-white font-semibold'>
          검색·상세·관련영상 재생 YouTube 클론
        </p>
      </div>
      <p className='text-base text-zinc-400 mt-1 lg:mt-0 lg:text-xl'>
        React · TanStack Query · Tailwind
      </p>
    </div>
  );
}
