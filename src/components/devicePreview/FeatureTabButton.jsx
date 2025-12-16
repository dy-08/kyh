export default function FeatureTabButton({ label, onClick, isActive }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 h-full rounded-2xl cursor-pointer text-white/90 hover:text-white transition ${isActive && 'bg-white'
                }`}
        >
            <div className={`text-xs font-black ${isActive && 'text-black'}`}>{label}</div>
        </button>
    );
}
