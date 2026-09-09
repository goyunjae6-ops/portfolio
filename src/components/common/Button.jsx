export default function Button({ as: As = "a", variant = "solid", icon, iconAlt = "", size = "md", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full transition-colors";

  const variants = {
    solid: "font-semibold bg-ink text-white visited:text-white border-2 border-white hover:bg-black",
    outline: "font-semibold border-2 border-ink text-ink visited:text-ink hover:bg-ink hover:text-white",
    dark: "font-semibold bg-ink text-white visited:text-white hover:bg-black",
    pill: "font-medium bg-pill text-[#333] visited:text-[#333] hover:bg-[#333] hover:text-pill",
  };

  const sizes = {
    lg: "h-[60px] px-8 text-[18px]",
    md: "h-[52px] px-6 text-[16px]",
    nav: "h-10 px-5 text-base lg:px-7 lg:text-xl",
    connect: "h-10 w-[110px] text-sm sm:w-[140px] sm:text-base",
  };

  return (
    <As className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon && <img src={icon} alt={iconAlt} className="size-[18px]" />}
      {children}
    </As>
  );
}
