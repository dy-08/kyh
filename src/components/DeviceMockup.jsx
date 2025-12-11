export default function DeviceMockup({ children }) {
    return (
        <section className='min-h-screen flex items-center justify-center'>
            {/* 아이폰 전체: 폭 350px + 원본 비율 유지 */}
            <div className='relative w-[350px] aspect-[1102.06/2269]'>
                {/* 1. 화면 영역 (Figma Body 값 그대로 비율로 적용) */}
                <div
                    className='
                        absolute
                        top-[0.09%]
                        bottom-[0.77%]
                        left-[1.58%]
                        right-[1.49%]
                        rounded-[53px]
                        overflow-hidden
                        bg-black
                        box-border
                        p-[8px]
                    '
                >
                    <div className='w-full h-full rounded-[45px] overflow-hidden'>{children}</div>
                </div>
                {/* 350: rounded-[45px] */}
                {/* 2. 아이폰 프레임 PNG */}
                <img
                    src='/images/iphone/iPhone-14-Pro.png'
                    alt='iPhone 14 Pro mockup'
                    className='absolute inset-0 w-full h-full pointer-events-none'
                />
                {/* 화면 영역 위에 카메라 */}
                <div
                    className='
                    absolute
                    top-[3.38%]
                    left-[38.1%]
                    w-[24.5%]
                    h-[3.26%]
                    rounded-full
                    bg-black
                '
                />
            </div>
        </section>
    );
}
