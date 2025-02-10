import { type InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({
  id,
  value,
  onChange,
  type = "text",
  checked,
  placeholder,
  className,
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      checked={checked}
      placeholder={placeholder}
    />
  );
}
