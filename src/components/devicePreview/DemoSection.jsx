export default function DemoSection({ demoVideoSrc }) {
  return (
    <div className='flex flex-col mt-8 gap-2'>
      <div className='flex justify-center py-2'>
        <div className='inline-flex items-center justify-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-green-500 ring-1 ring-white/10' />
          <p className='text-zinc-300 text-xs leading-none'>
            바이브코딩으로 만든 학원 출결관리 웹앱 데모입니다
          </p>
        </div>
      </div>

      <video src={demoVideoSrc} controls muted autoPlay playsInline />
    </div>
  );
}
