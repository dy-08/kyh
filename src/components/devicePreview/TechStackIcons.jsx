import { getLogoSrc } from "../../utils/getLogoSrc";

export default function TechStackIcons({ stack = [], size = 22 }) {
  return (
    <ul className='w-full mt-[10px] rounded-[4px] flex justify-start gap-1.5 shadow-sm items-center'>
      {stack.map((name) => (
        <li
          key={name}
          style={{ "--s": `${size}px` }}
          className={
            "w-[var(--s)] h-[var(--s)] flex justify-center items-center  bg-white rounded-sm"
          }
        >
          <img
            className='w-full h-full object-contain'
            src={getLogoSrc(name)}
            alt={name}
            title={name}
          />
        </li>
      ))}
    </ul>
  );
}
