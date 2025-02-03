import { ReactNode } from "react";

type HeaderProps = { children: ReactNode; className?: string };
export default function Header({ children, className }: HeaderProps) {
  return <h1 className={className}>{children}</h1>;
}
