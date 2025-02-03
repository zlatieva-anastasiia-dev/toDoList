import { SelectHTMLAttributes } from "react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Array<Option>;
} & SelectHTMLAttributes<HTMLSelectElement>;
export function Select({ options, onChange }: SelectProps) {
  return (
    <select onChange={onChange}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
