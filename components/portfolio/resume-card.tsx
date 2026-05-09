import * as React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionStaggerItem } from "@/components/portfolio/motion-primitives";

export function ResumeCard({ className = "", ...props }: React.ComponentProps<typeof Card>) {
  return (
    <MotionStaggerItem className="inline-flex w-full self-start">
      <Card
        className={`inline-flex w-full flex-col rounded-none border-border bg-card p-5 shadow-none transition-all duration-300 ease-out hover:border-primary/35 hover:bg-card/95 xl:p-7 ${className}`}
        {...props}
      />
    </MotionStaggerItem>
  );
}

export function SectionTitle({ icon, title, compact = false }: { icon: React.ReactNode; title: string; compact?: boolean }) {
  return (
    <CardHeader className={`p-0 ${compact ? "mb-4" : "mb-5 xl:mb-6"}`}>
      <CardTitle className="flex items-center gap-4 text-primary">
        {icon}
        <span className="text-3xl font-black tracking-[-0.075em] text-foreground xl:text-4xl">{title}</span>
      </CardTitle>
    </CardHeader>
  );
}
