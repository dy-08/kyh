import FeatureTabButton from "./FeatureTabButton";

export default function FeatureTabs({
  tabs = [],
  activeIndex,
  setActiveIndex,
}) {
  return (
    <div className='bg-zinc-700/90 max-w-[80%] lg:h-28 h-24 mt-6 m-auto p-1 rounded-2xl flex'>
      {tabs.map((label, i) => (
        <FeatureTabButton
          key={i}
          onClick={() => setActiveIndex(i)}
          isActive={activeIndex === i}
          label={label}
        />
      ))}
    </div>
  );
}
