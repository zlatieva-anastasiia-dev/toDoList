import { HTMLAttributes } from "react";

export type BoxProps = HTMLAttributes<HTMLDivElement>;
export default function Box({ children, className }: BoxProps) {
  return <div className={className}>{children}</div>;
}

//add margin, padding prop
