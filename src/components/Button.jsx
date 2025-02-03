import React from "react";

function Button({ btnName, type, onClick, extraClass }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`grid w-full translate-y-0 cursor-pointer place-items-center rounded border bg-blue-500 py-2 font-medium tracking-widest text-white transition-all duration-300 ease-in-out hover:scale-105 active:translate-y-1 ${extraClass}`}
    >
      {btnName}
    </button>
  );
}

export default Button;
