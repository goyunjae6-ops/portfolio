export default function Button({ as: As = "a", variant = "solid", icon, iconAlt = "", size = "md", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors";

  const variants = {
    solid: "bg-ink text-white border-2 border-white hover:bg-black",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
    dark: "bg-ink text-white hover:bg-black",
  };

  const sizes = {
    lg: "h-[70px] px-9 text-[22px]",
    md: "h-[52px] px-6 text-[16px]",
  };

  return (
    <As className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon && <img src={icon} alt={iconAlt} className="size-[18px]" />}
      {children}
    </As>
  );
}
