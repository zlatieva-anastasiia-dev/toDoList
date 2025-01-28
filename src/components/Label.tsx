import { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ htmlFor, children, className }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
