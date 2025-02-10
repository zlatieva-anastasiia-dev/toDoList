import { HTMLAttributes } from "react";

export type BoxProps = HTMLAttributes<HTMLDivElement>;
export function Box({ children, className, style }: BoxProps) {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}
