import Link from "next/link";

import { cn } from "@/lib/utils";

export function RailLink({
  href,
  label,
  children,
  download = false,
  target,
  rel,
  active = false,
  orientation = "vertical",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  download?: boolean;
  target?: string;
  rel?: string;
  active?: boolean;
  orientation?: "horizontal" | "vertical";
}) {
  const className = cn(
    "grid h-12 w-12 place-items-center border-border text-primary transition-all duration-300 ease-out hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:text-foreground focus-visible:outline-none md:h-14 md:w-14 [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-out hover:[&>svg]:scale-110 focus-visible:[&>svg]:scale-110",
    orientation === "horizontal" ? "border-r last:border-r-0" : "border-b last:border-b-0",
    active && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground"
  );

  if (href.startsWith("/") && !download && !target) {
    return (
      <Link href={href} aria-label={label} aria-current={active ? "page" : undefined} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      download={download || undefined}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  );
}
