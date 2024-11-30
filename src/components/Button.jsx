"use client";

export function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-14 fixed bottom-0 p-5 w-10/12 sm:w-4/12  bg-[#FF3B3F] mb-5 rounded-full text-white nunito font-black text-3xl flex items-center justify-center"
    >
      <span className="flex-grow text-center">
        {label}
      </span>
      {label === "Next" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="right-6 w-6 h-6 absolute"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      )}
    </button>
  );
}