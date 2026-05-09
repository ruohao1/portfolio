import Link from "next/link";
import { SiGithub } from "react-icons/si";

import { LogoStrip } from "@/components/portfolio/logo-strip";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/portfolio/motion-primitives";
import { PageBreadcrumb } from "@/components/portfolio/page-breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground md:px-20 xl:px-28 xl:py-14">
      <div className="mx-auto max-w-6xl">
        <PageBreadcrumb current="Projects" />
        <MotionReveal className="mb-10 mt-8">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">Projects</p>
          <h1 className="text-5xl font-black tracking-[-0.1em] md:text-7xl">Security projects</h1>
        </MotionReveal>
        <MotionStagger className="columns-1 gap-8 md:columns-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <MotionStaggerItem key={project.slug} className="mb-8 inline-flex w-full break-inside-avoid">
              <Card className="group relative inline-flex w-full flex-col rounded-none border-border bg-card p-6 shadow-none transition-all duration-300 ease-out hover:border-primary/35">
                <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`} className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                  <span className="sr-only">Open {project.title} case study</span>
                </Link>
                <CardHeader className="mb-6 p-0">
                  <CardTitle className="flex items-center gap-4 text-primary">
                    <Icon size={26} />
                    <span className="min-w-0 flex-1 text-3xl font-black tracking-[-0.075em] text-foreground transition-colors duration-300 ease-out group-hover:text-primary">{project.title}</span>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="relative z-20 text-muted-foreground transition-all duration-300 ease-out hover:scale-110 hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                      >
                        <SiGithub aria-hidden="true" className="h-6 w-6" />
                      </a>
                    ) : null}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="mb-5 leading-relaxed tracking-[-0.035em] text-muted-foreground">{project.summary}</p>
                  <LogoStrip items={project.tags} />
                </CardContent>
              </Card>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </main>
  );
}
