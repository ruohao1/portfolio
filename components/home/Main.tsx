/* eslint-disable @next/next/no-img-element */

import Me from "./Me";
import Link from "next/link";
import { EducationCard } from "@/components/home/EducationCard";
import { ExperienceCard } from "@/components/home/ExperienceCard";
import { ProjectsCard } from "@/components/home/ProjectsCard";

export default function MasonryPage() {
  return (
    <main className="mx-auto max-w-7xl h-full px-4 pt-24 pb-24 md:py-10">
      <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-6 [column-fill:_balance]">
        <article className="mb-6 break-inside-avoid">
          <Me />
        </article>

        <article className="mb-6 break-inside-avoid">
          <Link href="https://tryhackme.com/p/ruohao" target="_blank" rel="noopener noreferrer" className="block">
            <div className="w-full">
              <img
                src="https://tryhackme-badges.s3.amazonaws.com/ruohao.png"
                alt="TryHackMe badge"
                className="object-cover w-full"
              />
            </div>
          </Link>
        </article>

        <article className="mb-6 break-inside-avoid">
          <ProjectsCard />
        </article>

        <article className="mb-6 break-inside-avoid">
          <ExperienceCard />
        </article>

        <article className="mb-6 break-inside-avoid">
          <EducationCard />
        </article>

        {/* <article className="mb-6 break-inside-avoid">
          <SkillsCard />
        </article> */}
      </section>
    </main>
  );
}

/*
Notes:
- Works with shadcn/ui by importing Card from "@/components/ui/card".
- The masonry effect relies on CSS columns; each card is an inline-block (via default block -> wrap in article with break-inside-avoid).
- `mb-*` sets the vertical rhythm between items in the same column.
- `[column-fill:_balance]` helps even out columns in modern browsers; safe to remove if undesired.

Bonus: If you prefer a reusable component:

export function Masonry({ children }: { children: React.ReactNode }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
      <div className="[&>*]:mb-6 [&>*]:break-inside-avoid">{children}</div>
    </div>
  );
}

Then use <Masonry> and drop <Card/>s as children.
*/
