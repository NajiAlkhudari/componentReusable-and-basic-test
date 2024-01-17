import React from 'react';

const TextInput = ({
   className,
   label,
   name,
   register,
   value,
   onChange,
   placeholder,
   type,
   error,
   msgTooltip
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
         className={`text-input ${error ? "has-error border border-red-600" : ""} form-control py-2 ${className}`}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         type={type}
         name={name}
         {...register(name)}
      />
        
      {error && (
        <div
          className={`mt-2 ${
            msgTooltip
              ? "inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded"
              : "text-red-700  block text-sm"
          }`}
        >
          {error.message}
        </div>
      )}
    </div>
  );
};

export default TextInput;
