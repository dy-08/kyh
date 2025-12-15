import { getLogoSrc } from "../../utils/getLogoSrc";

export default function TechStackIcons({ stack = [] }) {
    return (
        <ul className="w-full my-[6px] rounded-[4px] flex justify-start gap-1 shadow-sm items-center">
            {stack.map((name) => (
                <li key={name} className="w-[24px] h-[24px] p-0.5 bg-white rounded-sm">
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
