type PrototypeLabelProps = {
  children: React.ReactNode;
};

export function PrototypeLabel({ children }: PrototypeLabelProps) {
  return <span className="prototype-label">{children}</span>;
}
