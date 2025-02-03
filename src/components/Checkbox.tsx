import { type InputProps, Input } from "./Input";
type CheckboxProps = InputProps;
export function Checkbox({
  id,
  value,
  onChange,
  checked,
  className,
}: CheckboxProps) {
  return (
    <Input
      id={id}
      value={value}
      onChange={onChange}
      type="checkbox"
      className={className}
      checked={checked}
    />
  );
}
//text
