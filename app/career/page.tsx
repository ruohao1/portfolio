import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import { LogoStrip } from "@/components/portfolio/logo-strip";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/portfolio/motion-primitives";
import { PageBreadcrumb } from "@/components/portfolio/page-breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { career } from "@/data/career";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground md:px-20 xl:px-28 xl:py-14">
      <div className="mx-auto max-w-6xl">
        <PageBreadcrumb current="Career" />
        <MotionReveal className="mb-10 mt-8">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">Career</p>
          <h1 className="text-5xl font-black tracking-[-0.1em] md:text-7xl">Experience timeline</h1>
        </MotionReveal>
        <MotionStagger className="grid gap-8">
          {career.map((item) => (
            <MotionStaggerItem key={item.slug}>
            <Card className="rounded-none border-border bg-card p-6 shadow-none">
              <CardHeader className="mb-6 p-0">
                <CardTitle className="flex items-center gap-4 text-primary">
                  <BriefcaseBusiness size={26} />
                  <span className="text-3xl font-black tracking-[-0.075em] text-foreground">{item.company}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <h2 className="text-xl font-bold tracking-[-0.055em]">{item.role}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{item.period} · {item.location}</p>
                <p className="mt-5 max-w-3xl leading-relaxed tracking-[-0.035em] text-muted-foreground">{item.summary}</p>
                <LogoStrip items={item.tools} className="mt-5" />
                <Button asChild variant="link" className="mt-6 px-0 text-primary underline decoration-primary/45 underline-offset-4 hover:decoration-primary">
                  <Link href={`/career/${item.slug}`}>Open experience <ArrowRight size={16} /></Link>
                </Button>
              </CardContent>
            </Card>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </main>
  );
}
