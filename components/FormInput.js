import React from "react";

const FormInput = ({ type, id, label, value, onChange }) => {
  return (
    <div className="w-full my-4">
      <label htmlFor={id} className="block text-lg md:text-xl font-medium mb-2">
        {label}
      </label>
      <input
        className="w-full px-4 py-2 border-2 border-gray-200 text-lg text-gray-800 outline-none focus:border-gray-800"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
