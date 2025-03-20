interface CustomInputProps {
  type?: string;
  width?: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({ type, name, value, onChange, width, placeholder }: CustomInputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`p-4 w-[${width}] h-[3rem] border-[2px] border-mainBlue rounded-full bg-transparent text-sm focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-[#C3C3C3]`}
      placeholder={placeholder}
    />
  )
}

export default CustomInput;
