export default function CTAButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className='flex items-center justify-center text-white text-sm hover:font-bold w-[90%] py-3 transition ease-in-out bg-midnight hover:bg-lightblue rounded-3xl'
    >
      {" "}
      {label}
    </button>
  );
}
