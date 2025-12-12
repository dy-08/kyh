export default function FeatureTabButton({ text1, text2, onClick, isActive }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 h-full rounded-2xl cursor-pointer text-white/90 hover:text-white transition ${
                isActive && 'bg-white'
            }`}
        >
            <div className={`text-[11px] font-black ${isActive && 'text-black'}`}>{text1}</div>
            <div className={`text-[11px] font-black ${isActive && 'text-black'}`}>{text2}</div>
        </button>
    );
}
