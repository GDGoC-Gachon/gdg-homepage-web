interface CustomInputProps {
  type?: string;
  width?: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({ type, name, value, onChange, width, placeholder }: CustomInputProps) {
  const widthClass = width === "full" ? "w-full" : width === "30rem" ? "w-[30rem]" : "";

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`p-4 ${widthClass} h-[3rem] border-[2px] border-[#C3C3C3] rounded-full bg-transparent text-sm focus:outline-none focus:border-mainBlue focus:ring-0 placeholder:text-sm placeholder:text-[#C3C3C3] transition-colors duration-300 ease-in-out`}
      placeholder={placeholder}
    />
  )
}

export default CustomInput;
