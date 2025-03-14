import { SelectHTMLAttributes } from "react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Array<Option>;
} & SelectHTMLAttributes<HTMLSelectElement>;
export function Select(props: SelectProps) {
  return (
    <select {...props}>
      {props.options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
