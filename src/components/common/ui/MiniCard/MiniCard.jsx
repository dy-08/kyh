import React from "react";

export default function MiniCard() {
  return (
    <div className='flex flex-col gap-10 text-lg rounded-3xl bg-zinc-900/60 ring-1 ring-white/5 px-4 py-6'>
      <div className='flex flex-col gap-0.5'>
        <p className='text-white font-semibold'>유투브 클론코딩</p>
        <p className='text-white font-semibold'>
          검색·상세·관련영상 재생 YouTube 클론
        </p>
      </div>
      <p className='text-base text-zinc-400 mt-1'>
        React · TanStack Query · Tailwind
      </p>
    </div>
  );
}
