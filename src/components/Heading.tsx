import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};
export function Heading({ as, children, className }: HeaderProps) {
  const Heading = as || "h1";
  return <Heading className={className}>{children}</Heading>;
}
