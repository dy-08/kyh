export default function FeatureTabButton({ label = [], onClick, isActive }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 h-full rounded-2xl cursor-pointer text-white/90 hover:text-white transition ${isActive && 'bg-white'
                }`}
        >
            <div className={`max-w-[60px] text-xs font-semibold ${isActive && 'text-black'} flex flex-col gap-1`}><p>{label[0]}</p><p>{label[1]}</p></div>
        </button>
    );
}
