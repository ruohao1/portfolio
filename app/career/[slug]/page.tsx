import Image from "next/image";
import { notFound } from "next/navigation";
import { BriefcaseBusiness, MapPin } from "lucide-react";

import { LogoStrip } from "@/components/portfolio/logo-strip";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/portfolio/motion-primitives";
import { PageBreadcrumb } from "@/components/portfolio/page-breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { career, getCareerItem } from "@/data/career";

export function generateStaticParams() {
  return career.map((item) => ({ slug: item.slug }));
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCareerItem(slug);

  if (!item) {
    notFound();
  }

  const visuals = "visuals" in item && item.visuals ? item.visuals : [];
  const visualGroups = visuals.reduce<Record<string, typeof visuals>>((groups, visual) => {
    const category = "category" in visual && visual.category ? visual.category : "Visuals";
    groups[category] = [...(groups[category] ?? []), visual];
    return groups;
  }, {});

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground md:px-20 xl:px-28 xl:py-14">
      <article className="mx-auto max-w-6xl">
        <PageBreadcrumb items={[{ href: "/career", label: "Career" }]} current={item.company} />
        <MotionReveal className="mb-10 mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative overflow-hidden border border-border bg-card p-6 md:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary via-primary/30 to-transparent" />
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">Career · {item.period}</p>
            <h1 className="mb-5 text-5xl font-black tracking-[-0.1em] md:text-7xl">{item.company}</h1>
            <p className="text-xl font-bold tracking-[-0.055em]">{item.role}</p>
            <p className="mt-2 inline-flex items-center gap-2 text-muted-foreground"><MapPin size={16} />{item.location}</p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed tracking-[-0.04em] text-muted-foreground">{item.summary}</p>
          </div>
          <Card className="h-fit rounded-none border-border bg-card p-6 shadow-none transition-all duration-300 ease-out hover:border-primary/35">
            <CardHeader className="mb-6 p-0">
              <CardTitle className="flex items-center gap-4 text-primary"><BriefcaseBusiness size={28} /><span className="text-2xl text-foreground">Tools</span></CardTitle>
            </CardHeader>
            <CardContent className="p-0"><LogoStrip items={item.tools} /></CardContent>
          </Card>
        </MotionReveal>
        <section>
          <MotionStagger className="grid gap-8">
            {item.sections.map((section, index) => (
              <MotionStaggerItem key={section.title}>
              <Card className="rounded-none border-border bg-card p-6 shadow-none transition-all duration-300 ease-out hover:border-primary/35">
                <CardHeader className="mb-4 p-0">
                  <CardTitle className="flex items-baseline gap-4 text-3xl font-black tracking-[-0.075em]">
                    <span className="text-sm tracking-[0.24em] text-primary/70">0{index + 1}</span>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 leading-relaxed tracking-[-0.035em] text-muted-foreground">{section.body}</CardContent>
              </Card>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </section>
        {visuals.length > 0 ? (
          <MotionReveal className="mt-8">
            <div className="mb-5">
              <p className="mb-2 text-sm uppercase tracking-[0.24em] text-primary">Work evidence</p>
              <h2 className="text-4xl font-black tracking-[-0.09em] md:text-5xl">Screens & artifacts</h2>
            </div>
            <div className="grid gap-8">
              {Object.entries(visualGroups).map(([category, group]) => (
                <section key={category}>
                  <h3 className="mb-4 border-b border-border pb-2 text-sm uppercase tracking-[0.24em] text-primary">{category}</h3>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.map((visual) => (
                      <Card key={visual.src} className={`overflow-hidden rounded-none border-border bg-card shadow-none transition-all duration-300 ease-out hover:border-primary/35 ${visual.wide ? "md:col-span-2 xl:col-span-3" : ""}`}>
                        <div className={`relative bg-background/60 ${visual.wide ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                          <Image src={visual.src} alt={visual.alt} fill sizes={visual.wide ? "(min-width: 1280px) 72rem, 100vw" : "(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"} className="object-contain p-3" />
                        </div>
                        <CardContent className="border-t border-border p-5">
                          <h3 className="text-xl font-black tracking-[-0.06em] text-foreground">{visual.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed tracking-[-0.035em] text-muted-foreground">{visual.caption}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </MotionReveal>
        ) : null}
      </article>
    </main>
  );
}
