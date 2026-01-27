export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='w-full h-[64px] lg:h-[100px] bg-[#010409] text-[#919aa1] text-xs lg:text-sm flex flex-col items-center justify-center gap-1'>
        <p>
          Copyright © 2026 by{" "}
          <a
            href='https://github.com/dy-08'
            target='_blank'
            className='text-[#dfefea]'
          >
            YounghoKwon
          </a>
        </p>
        <p>Last updated: 2026-01-26</p>
      </div>
    </footer>
  );
}
