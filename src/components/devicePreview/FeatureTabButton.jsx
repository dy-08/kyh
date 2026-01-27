export default function FeatureTabButton({ label = [], onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 lg:px-8 h-full rounded-2xl cursor-pointer text-white/90 hover:text-white transition ${
        isActive && "bg-white"
      }`}
    >
      <div
        className={`max-w-[60px] text-xs lg:text-base lg:max-w-[80px] font-semibold ${isActive && "text-black"} flex flex-col gap-1`}
      >
        <p>{label[0]}</p>
        <p>{label[1]}</p>
      </div>
    </button>
  );
}
