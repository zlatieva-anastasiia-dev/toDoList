import { type InputProps, Input } from "./Input";
type CheckboxProps = Omit<InputProps, "type">;
export function Checkbox(props: CheckboxProps) {
  return <Input {...props} type="checkbox" />;
}
