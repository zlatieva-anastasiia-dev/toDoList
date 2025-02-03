import { HTMLAttributes } from "react";

export type BoxProps = HTMLAttributes<HTMLDivElement>;
export function Box({ children, className }: BoxProps) {
  return <div className={className}>{children}</div>;
}
