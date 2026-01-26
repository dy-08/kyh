export function MiniCardSkeleton() {
  return (
    <div className='rounded-3xl bg-zinc-900/60 ring-1 ring-white/5 px-4 py-6 animate-pulse'>
      <div className='flex flex-col gap-8 space-y-2'>
        <div className='flex flex-col gap-3'>
          <div className='h-5 w-2/5 rounded bg-zinc-800' />
          <div className='h-5 w-6/7 rounded bg-zinc-800' />
        </div>
        <div className='mt-4 flex gap-2'>
          <div className='h-4 w-10 rounded-full bg-zinc-800' />
          <div className='h-4 w-30 rounded-full bg-zinc-800' />
          <div className='h-4 w-16 rounded-full bg-zinc-800' />
        </div>
      </div>
    </div>
  );
}
