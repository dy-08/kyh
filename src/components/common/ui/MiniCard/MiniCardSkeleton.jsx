export function MiniCardSkeleton() {
  return (
    // lg:px-10 lg:py-10 lg:text-2xl lg:text-left lg:gap-50
    <div className='rounded-3xl bg-zinc-900/60 ring-1 ring-white/5 px-4 py-6 lg:px-8 lg:py-8 animate-pulse'>
      <div className='flex flex-col gap-8 lg:gap-30 space-y-2'>
        <div className='flex flex-col gap-3'>
          <div className='h-5 lg:h-6 w-2/5 rounded bg-zinc-800' />
          <div className='h-5 lg:h-6 w-6/7 lg:w-9/10 rounded bg-zinc-800' />
        </div>
        <div className='mt-4 flex gap-2'>
          <div className='h-4 lg:h-6 w-10 lg:w-14 rounded-full bg-zinc-800' />
          <div className='h-4 lg:h-6 w-30 lg:w-35 rounded-full bg-zinc-800' />
          <div className='h-4 lg:h-6 w-16 lg:w-22 rounded-full bg-zinc-800' />
        </div>
      </div>
    </div>
  );
}
