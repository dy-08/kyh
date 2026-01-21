export default function CTAButton({ label, onClick, isDisabled = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-white text-sm hover:font-bold w-[90%] py-3 transition ease-in-out ${
        isDisabled == true ? "e0e0e0" : "bg-midnight"
      } hover:bg-lightblue rounded-3xl`}
      disabled={isDisabled}
    >
      {" "}
      {label}
    </button>
  );
}
