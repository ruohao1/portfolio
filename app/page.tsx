import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, ExternalLink, Flag, FolderKanban, GraduationCap } from "lucide-react";
import { SiGithub, SiTryhackme } from "react-icons/si";

import { LogoStrip, type LogoItem } from "@/components/portfolio/logo-strip";
import { MotionFade, MotionReveal, MotionStagger } from "@/components/portfolio/motion-primitives";
import { ResumeCard, SectionTitle } from "@/components/portfolio/resume-card";
import { CardContent } from "@/components/ui/card";
import { career } from "@/data/career";
import { achievements, education, profile, writeupsUrl } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const currentCareer = career[0];
  const logoOnly = (items: LogoItem[]) => items.filter((item) => item.icon || item.imageSrc);

  return (
    <main className="min-h-screen overflow-y-auto bg-background text-foreground">
      <MotionFade className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(25,195,125,0.09),transparent_28rem)]" />

      <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1780px] gap-5 px-4 pb-32 pt-24 md:px-20 md:pb-36 md:pt-28 xl:grid-cols-[minmax(300px,0.72fr)_minmax(820px,2fr)] xl:gap-8 xl:px-28 xl:py-14 [@media(max-height:820px)]:xl:gap-16 [@media(max-height:820px)]:xl:pb-44 [@media(max-height:820px)]:xl:pt-32">
        <MotionReveal className="flex min-w-0 flex-col items-center justify-center text-center xl:pr-8" aria-labelledby="profile-title">
          <div className="relative mb-7 aspect-square w-48 overflow-hidden rounded-full border border-white/10 bg-muted shadow-[inset_0_-28px_64px_rgba(0,0,0,0.38)] md:w-60 xl:mb-9 xl:w-[min(15vw,245px)]">
            <Image src="/profile.jpg" alt="Cedric LIN" fill priority sizes="(min-width: 1280px) 15vw, (min-width: 768px) 15rem, 12rem" className="object-cover" />
          </div>
          <p className="mb-5 max-w-xl text-lg leading-relaxed tracking-[-0.055em] text-muted-foreground xl:text-xl">{profile.headline}</p>
          <h1 id="profile-title" className="max-w-2xl text-6xl font-black leading-[0.86] tracking-[-0.12em] text-primary md:text-7xl xl:text-[5.8rem]">
            {profile.name}
          </h1>
        </MotionReveal>

        <div className="flex min-h-0 flex-col xl:justify-center">
        <MotionStagger className="grid gap-5 xl:grid-cols-2 xl:gap-8">
          <div className="grid content-start gap-5 xl:gap-8">
            <ResumeCard id="projects" className="group relative">
              <Link href="/projects" aria-label="View all projects" className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <span className="sr-only">View all projects</span>
              </Link>
              <SectionTitle icon={<FolderKanban size={26} />} title="Projects" />
              <CardContent className="grid gap-4 p-0 xl:gap-3">
                {projects.slice(0, 2).map((project) => {
                  const Icon = project.icon;
                  return (
                    <article key={project.title} className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0 xl:pb-3">
                      <div className="mb-2 flex items-start gap-3 text-muted-foreground">
                        <Icon size={22} />
                        <h2 className="min-w-0 flex-1 text-lg font-bold leading-snug tracking-[-0.055em] text-foreground xl:text-xl">
                          <Link href={`/projects/${project.slug}`} className="relative z-20 inline-flex items-center gap-2 underline decoration-primary/45 underline-offset-4 transition-all duration-300 ease-out hover:translate-x-1 hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:outline-none">
                            {project.title}
                            <ArrowRight size={15} className="shrink-0" />
                          </Link>
                        </h2>
                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                            className="relative z-20 ml-auto mt-1 text-muted-foreground transition-all duration-300 ease-out hover:scale-110 hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                          >
                            <SiGithub aria-hidden="true" className="h-5 w-5" />
                          </a>
                        ) : null}
                      </div>
                      <p className="mb-3 text-sm leading-relaxed tracking-[-0.035em] text-muted-foreground xl:text-[0.84rem]">{project.summary}</p>
                      <div className="flex justify-end">
                        <LogoStrip items={logoOnly(project.tags)} />
                      </div>
                    </article>
                  );
                })}
              </CardContent>
            </ResumeCard>
            <ResumeCard>
              <SectionTitle icon={<GraduationCap size={26} />} title="Education" compact />
              <CardContent className="grid gap-3 p-0">
                {education.map((item) => (
                  <article key={item.school} className="border-b border-border/50 pb-3 last:border-b-0 last:pb-0">
                    <h2 className="text-base font-bold leading-snug tracking-[-0.055em] text-foreground">{item.school}</h2>
                    <p className="mt-1 text-sm leading-snug tracking-[-0.035em] text-foreground">{item.program}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.meta}</p>
                  </article>
                ))}
              </CardContent>
            </ResumeCard>
          </div>

          <div className="grid content-start gap-5 xl:gap-8">
            <ResumeCard className="group relative">
              <Link href="/career" aria-label="View career" className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <span className="sr-only">View career</span>
              </Link>
              <SectionTitle icon={<BriefcaseBusiness size={26} />} title="Career" />
              <CardContent className="flex min-h-0 flex-col p-0">
                <div>
                  <h2 className="text-lg font-bold leading-snug tracking-[-0.055em] text-foreground xl:text-xl">
                    <Link href={`/career/${currentCareer.slug}`} className="relative z-20 inline-flex items-center gap-2 underline decoration-primary/45 underline-offset-4 transition-all duration-300 ease-out hover:translate-x-1 hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:outline-none">
                      {currentCareer.company} - {currentCareer.role}
                      <ArrowRight size={15} className="shrink-0" />
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm tracking-[-0.035em] text-muted-foreground">{currentCareer.period} · {currentCareer.location}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed tracking-[-0.035em] text-muted-foreground xl:text-[0.84rem]">
                  Built an Ansible/Python hardening and audit tool for Ubuntu systems, aligned with CIS and ANSSI guidance.
                </p>
                <div className="flex justify-end">
                  <LogoStrip items={logoOnly(currentCareer.tools)} className="mt-4" />
                </div>
              </CardContent>
            </ResumeCard>

            <ResumeCard className="group relative">
              <a href={writeupsUrl} target="_blank" rel="noreferrer" aria-label="View writeups" className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <span className="sr-only">View writeups</span>
              </a>
              <SectionTitle icon={<Flag size={26} />} title="CTFs" compact />
              <CardContent className="grid gap-1 p-0">
                {achievements.map((stat) => (
                  <div key={stat.source} className="grid grid-cols-[90px_1fr] border-b border-border/50 py-1.5 last:border-b-0">
                    <strong className="text-sm text-primary">{stat.rank}</strong>
                    <a href={stat.href} target="_blank" rel="noreferrer" className="relative z-20 grid grid-cols-[1fr_auto] items-start gap-2 text-sm text-muted-foreground underline decoration-primary/35 underline-offset-4 transition-all duration-300 ease-out hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:outline-none">
                      <span className="inline-flex min-w-0 items-start gap-2">
                        {stat.branded ? <SiTryhackme aria-hidden="true" className="mt-0.5 shrink-0 text-lg" style={{ color: "#D50000" }} /> : null}
                        <span>{stat.source}</span>
                      </span>
                      <ExternalLink size={13} className="mt-0.5 shrink-0" />
                    </a>
                  </div>
                ))}
              </CardContent>
              <a href={writeupsUrl} target="_blank" rel="noreferrer" className="relative z-20 mt-5 self-end text-primary underline decoration-primary/45 underline-offset-4 transition-all duration-300 ease-out hover:decoration-primary focus-visible:outline-none">
                View writeups...
              </a>
            </ResumeCard>
          </div>

        </MotionStagger>
        </div>
      </section>
    </main>
  );
}
