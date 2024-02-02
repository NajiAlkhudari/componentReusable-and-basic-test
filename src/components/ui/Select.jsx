import React from 'react';

const Select = ({ options, label, value,onChange , className}) => {
  return (
    <div className="inline-block relative w-full ">
            <label className='px-4'>{label}</label>  
     <select className={`pr-40 py-2 ${className}`}  value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>  
  );
};

export default Select;
