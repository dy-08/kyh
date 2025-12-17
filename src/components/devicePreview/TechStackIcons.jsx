import { getLogoSrc } from "../../utils/getLogoSrc";

export default function TechStackIcons({ stack = [], size = 22 }) {
    return (
        <ul className="w-full my-[6px] rounded-[4px] flex justify-start gap-1 shadow-sm items-center">
            {stack.map((name) => (
                <li key={name} style={{ '--s': `${size}px` }} className={'w-[var(--s)] h-[var(--s)] p-0.5 bg-white rounded-sm'}>
                    <img
                        className="w-full h-full object-cover"
                        src={getLogoSrc(name)}
                        alt={name}
                        title={name}
                    />
                </li>
            ))}
        </ul>
    );
}
