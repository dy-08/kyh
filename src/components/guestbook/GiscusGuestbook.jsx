import { useEffect, useRef } from "react";

export default function GiscusGuestbook() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // 중복 삽입 방지 (리렌더/라우트 이동 대비)
    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "dy-08/kyh");
    script.setAttribute("data-repo-id", "R_kgDOQmkYWA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOQmkYWM4C0tY0");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", "guestbook");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "ko");
    script.setAttribute("data-loading", "lazy");

    ref.current.appendChild(script);
  }, []);

  return (
    <>
      <div className='w-full scale-90 flex flex-col gap-2.5 justify-center items-cente'>
        {/* 공통 헤더 */}
        <p className='text-xs tracking-widest text-center text-zinc-500'>
          프로젝트 한눈에 보기
        </p>
        <p className='text-2xl text-center text-white mb-4'>
          모바일부터, 웹까지.
          <br />
          <span className='block mt-0.5 mb-1'>
            프로젝트를 순서대로 정리했어요.
          </span>
        </p>
      </div>
      <div ref={ref} className='giscus' />;
    </>
  );
}
