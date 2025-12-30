export default function ProfileModal() {
  return (
    <div className='text-white p-8 fixed top-0 left-0 right-0 bottom-1/4 bg-zinc-900/90 backdrop-blur-sm rounded-xl overflow-hidden'>
      <p className='text-sm flex justify-center'>
        시도하고 개선하는 개발자 권영호입니다.
      </p>
      {/* 사진 */}
      <div>
        <div className='w-[80px] h-[80px] rounded-sm overflow-hidden mt-10'>
          <img
            className='w-full object-cover'
            src='/images/avatar/kyh.jpg'
            alt=''
          />
        </div>
        <div>
          {/* pi */}
          <div className='flex gap-2'>
            <p>oioixo20@gmail.com</p>
          </div>
          <div className='flex gap-2'>
            <p>01080729309</p>
          </div>
          <div className='flex gap-2'>
            <p>https://github.com/dy-08</p>
          </div>
        </div>
      </div>
      {/* skill */}
      <div>
        <p>JS(ES6+), React, TailwindCSS</p>
      </div>
      {/* education */}
      <div></div>
    </div>
  );
}
