import useInView from "../../hooks/useInView";

function SkillBar({ name, level }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="flex flex-col gap-2.5 border-b border-divider py-4 last:border-b-0">
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-ink sm:text-xl">{name}</span>
        <span className="text-sm font-medium text-muted tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-tag">
        <div
          className="h-full rounded-full bg-gold transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function SkillGroup({ group }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold text-ink sm:text-[32px]">{group.title}</h3>
        {group.description && <p className="text-sm text-muted sm:text-base">{group.description}</p>}
      </div>
      <div className="flex flex-col">
        {group.items.map((item) => (
          <SkillBar key={item.name} name={item.name} level={item.level} />
        ))}
      </div>
    </div>
  );
}
