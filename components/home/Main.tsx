import Me from "./Me";
import { EducationCard } from "@/components/home/EducationCard";
import { ExperienceCard } from "@/components/home/ExperienceCard";
import { ProjectsCard } from "@/components/home/ProjectsCard";
import { CtfWriteupsCard } from "@/components/home/CtfWriteupsCard";
import { SkillsCard } from "@/components/home/SkillsCard";

export default function MasonryPage() {
  return (
    <main className="mx-auto max-w-7xl h-full px-4 pt-24 pb-24 md:py-10">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="space-y-6">
          <Me />
          <EducationCard />
        </div>

        <div className="space-y-6">
          <ExperienceCard />
          <CtfWriteupsCard />
        </div>

        <div className="space-y-6 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 xl:col-span-1 xl:block xl:space-y-6">
          <ProjectsCard />
          <SkillsCard />
        </div>
      </section>
    </main>
  );
}
