type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div
      style={{
        margin: "auto",
        boxSizing: "border-box",
        minWidth: "50px",
        minHeight: "30px",
        padding: "8px",
        overflow: "hidden",
        wordWrap: "break-word",
        backgroundColor: "#575555",
        color: "white",
        borderRadius: "4px",
        boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </div>
  );
}
