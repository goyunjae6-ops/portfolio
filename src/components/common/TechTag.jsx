export default function TechTag({ children }) {
  return (
    <span className="rounded-full bg-tag px-2.5 py-1 text-xs font-medium text-ink">
      {children}
    </span>
  );
}
