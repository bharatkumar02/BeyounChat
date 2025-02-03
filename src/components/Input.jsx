import React from "react";

function Input({ name, Icon, placeholder, value, onChange, type }) {
  return (
    <>
      <label
        htmlFor={name}
        className="group relative flex flex-col tracking-wider uppercase"
      >
        {name}
        <input
          type={type}
          required
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          id={name}
          className="peer border-b border-b-gray-400 py-1 pl-6 outline-0 transition-all duration-300 ease-in-out placeholder:text-gray-300 focus:border-b-blue-400"
        />
        <Icon
          size={18}
          className="absolute top-8 left-0 text-gray-400 transition-all duration-300 ease-in-out peer-focus:text-blue-300"
        />
      </label>
    </>
  );
}

export default Input;
