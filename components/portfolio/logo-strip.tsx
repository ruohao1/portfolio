import { Badge } from "@/components/ui/badge";

export type LogoItem = {
  label: string;
  color?: string;
  imageSrc?: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties; "aria-hidden"?: boolean }>;
};

export function LogoStrip({ items, className = "" }: { items: LogoItem[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;

        return item.imageSrc ? (
          <span key={item.label} title={item.label} aria-label={item.label} className="grid h-9 w-9 place-items-center transition-transform duration-300 ease-out hover:scale-110">
            <img src={item.imageSrc} alt="" aria-hidden="true" height="22" width="22" className="rounded-sm" />
          </span>
        ) : Icon ? (
          <span key={item.label} title={item.label} aria-label={item.label} className="grid h-9 w-9 place-items-center transition-transform duration-300 ease-out hover:scale-110">
            <Icon aria-hidden={true} className="text-lg transition-opacity duration-300 ease-out" style={{ color: item.color }} />
          </span>
        ) : (
          <Badge key={item.label} variant="secondary" className="leading-tight transition-all duration-300 ease-out hover:border-primary/30 hover:bg-primary/10 hover:text-primary">
            {item.label}
          </Badge>
        );
      })}
    </div>
  );
}
