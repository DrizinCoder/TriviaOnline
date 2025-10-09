import { useState } from 'react';

export default function InputField({ label, type = "text", value, onChange, min = 1, max = 50 }) {
  
  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, ''); 
    onChange(newValue);
  };
  
  const handleDecrease = () => {
    const numericValue = Number(value);
    if (numericValue > min) {
      onChange((numericValue - 1).toString());
    }
  };

  const handleIncrease = () => {
    const numericValue = Number(value);
    if (numericValue < max) {
      onChange((numericValue + 1).toString());
    }
  };
  
  const baseClasses = "w-full rounded-xl border border-slate-600 bg-slate-900 text-slate-100 focus:ring-2 focus:ring-pink-500 focus:border-pink-500";
  
  if (type === "number") {
    
    const buttonClasses = "px-3 py-2 text-2xl font-bold transition-colors duration-150 text-pink-400 hover:bg-slate-700 active:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed";
    
    const noSpinnerClasses = "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
    
    return (
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
        
        <div className={`flex items-center rounded-xl overflow-hidden ${baseClasses} border`}>
          
          <button 
            type="button"
            onClick={handleDecrease}
            disabled={Number(value) <= min}
            className={`${buttonClasses} border-r border-slate-600`}
          >
            –
          </button>

          <input
            type="text" 
            value={value}
            onChange={handleChange}
            min={min}
            max={max}
            className={`flex-grow p-2 text-center border-none ${noSpinnerClasses}`}
          />
          
          <button 
            type="button"
            onClick={handleIncrease}
            disabled={Number(value) >= max}
            className={`${buttonClasses} border-l border-slate-600`}
          >
            +
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`p-2 ${baseClasses}`}
      />
    </div>
  );
}