import Input, { type InputProps } from "./Input";
type CheckboxProps = InputProps;
export default function Checkbox({
  id,
  value,
  onChange,
  className,
}: CheckboxProps) {
  return (
    <Input
      id={id}
      value={value}
      onChange={onChange}
      type="checkbox"
      className={className}
    />
  );
}
