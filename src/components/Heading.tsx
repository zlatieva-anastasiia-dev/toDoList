import { HTMLAttributes } from "react";

type HeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3";
};
export function Heading(props: HeaderProps) {
  const Heading = props.as || "h1";
  return <Heading {...props}>{props.children}</Heading>;
}
