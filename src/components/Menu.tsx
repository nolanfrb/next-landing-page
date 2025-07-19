export default function Menu({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean> | (() => void)>;
}) {
  return (
    <button
      className="p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 md:hidden"
      onClick={() => onClick((isOpen) => !isOpen)}
    >
      <span className="sr-only">Open menu</span>
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        )}
      </svg>
    </button>
  );
}
