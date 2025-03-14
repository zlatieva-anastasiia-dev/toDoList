import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function Main({ children }: Props) {
  return <div className="flex flex-col items-center ">{children}</div>;
}
