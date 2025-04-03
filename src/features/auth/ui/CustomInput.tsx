import React, { forwardRef } from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  hasError?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type = "text", width, placeholder, hasError = false, className = "", ...rest }, ref) => {
    const widthClass =
      width === "full" ? "w-full" : width === "30rem" ? "w-[30rem]" : "";
    const borderColor = hasError ? "border-[#FF2929]" : "border-[#C3C3C3]";
    const focusColor = hasError ? "focus:border-[#FF2929]" : "focus:border-mainBlue";

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`p-4 ${widthClass} h-[3rem] border-[2px] ${borderColor} rounded-full bg-transparent text-sm
        focus:outline-none ${focusColor} focus:ring-0 placeholder:text-sm placeholder:text-[#C3C3C3]
        transition-colors duration-300 ease-in-out ${className}`}
        {...rest}
      />
    );
  }
);

export default CustomInput;
