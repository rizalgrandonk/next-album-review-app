import React from "react";

const FormInput = ({ type, id, label }) => {
  return (
    <div className="w-full my-4">
      <label htmlFor={id} className="block text-xl font-medium mb-2">
        {label}
      </label>
      <input
        className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 text-lg text-gray-800 outline-none focus:border-gray-900"
        id={id}
        type={type}
      />
    </div>
  );
};

export default FormInput;
