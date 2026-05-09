import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiGithub } from "react-icons/si";

import { LogoStrip } from "@/components/portfolio/logo-strip";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/portfolio/motion-primitives";
import { PageBreadcrumb } from "@/components/portfolio/page-breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;
  const visuals = "visuals" in project && project.visuals ? project.visuals : [];
  const visualGroups = visuals.reduce<Record<string, typeof visuals>>((groups, visual) => {
    const category = "category" in visual && visual.category ? visual.category : "Visuals";
    groups[category] = [...(groups[category] ?? []), visual];
    return groups;
  }, {});

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground md:px-20 xl:px-28 xl:py-14">
      <article className="mx-auto max-w-6xl">
        <PageBreadcrumb items={[{ href: "/projects", label: "Projects" }]} current={project.title} />
        <MotionReveal className="mb-10 mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative overflow-hidden border border-border bg-card p-6 md:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary via-primary/30 to-transparent" />
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">Project · {project.period}</p>
            <h1 className="mb-5 text-5xl font-black tracking-[-0.1em] md:text-7xl">{project.title}</h1>
            <p className="max-w-3xl text-lg leading-relaxed tracking-[-0.04em] text-muted-foreground">{project.summary}</p>
          </div>
          <Card className="h-fit rounded-none border-border bg-card p-6 shadow-none transition-all duration-300 ease-out hover:border-primary/35">
            <CardHeader className="mb-6 p-0">
              <CardTitle className="flex items-center gap-4 text-primary">
                <Icon size={28} />
                <span className="flex-1 text-2xl text-foreground">Stack</span>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="text-muted-foreground transition-all duration-300 ease-out hover:scale-110 hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                  >
                    <SiGithub aria-hidden="true" className="h-6 w-6" />
                  </a>
                ) : null}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <LogoStrip items={project.tags} />
            </CardContent>
          </Card>
        </MotionReveal>
        <section>
          <MotionStagger className="grid gap-8">
            {project.sections.map((section, index) => (
              <MotionStaggerItem key={section.title}>
              <Card className="group rounded-none border-border bg-card p-6 shadow-none transition-all duration-300 ease-out hover:border-primary/35">
                <CardHeader className="mb-4 p-0">
                  <CardTitle className="flex items-baseline gap-4 text-3xl font-black tracking-[-0.075em]">
                    <span className="text-sm tracking-[0.24em] text-primary/70">0{index + 1}</span>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-muted-foreground leading-relaxed tracking-[-0.035em]">{section.body}</CardContent>
              </Card>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </section>
        {visuals.length > 0 ? (
          <MotionReveal className="mt-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.24em] text-primary">Prototype visuals</p>
                <h2 className="text-4xl font-black tracking-[-0.09em] md:text-5xl">Screens & evidence</h2>
              </div>
            </div>
            <div className="grid gap-8">
              {Object.entries(visualGroups).map(([category, group]) => (
                <section key={category}>
                  <h3 className="mb-4 border-b border-border pb-2 text-sm uppercase tracking-[0.24em] text-primary">{category}</h3>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.map((visual) => (
                      <Card key={visual.src} className={`overflow-hidden rounded-none border-border bg-card shadow-none transition-all duration-300 ease-out hover:border-primary/35 ${visual.wide ? "md:col-span-2 xl:col-span-3" : ""}`}>
                        <div className={`relative bg-background/60 ${visual.wide ? "aspect-[16/7]" : "aspect-[9/16] max-h-[620px]"}`}>
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
