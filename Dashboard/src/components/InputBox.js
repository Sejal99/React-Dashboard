import React, { forwardRef } from 'react';

const InputBox = forwardRef(({ value, onChange, type = "email", name = "email", placeholder = "email" }, ref) => {
  return (
    <input
      type={type}
      name={name}
      ref={ref}
      placeholder={placeholder}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE] mb-1"
      value={value}
      onChange={onChange}
      required
    />
  );
});

export default InputBox;
    
                