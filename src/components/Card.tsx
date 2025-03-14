import { HTMLAttributes } from "react";

type CardProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...rest }: CardProps) {
  return (
    <div
      className="flex justify-between min-h-30 w-50 p-3 bg-gray-700 text-white rounded-sm whitespace-wrap"
      {...rest}
    >
      {children}
    </div>
  );
}
