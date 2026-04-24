import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, GraduationCap } from "lucide-react"
import Link from "next/link"
import SideLinks from "@/components/side-links"
import Contact from "@/components/contact"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface Education {
  institution: string
  degree: string
  field: string
  time: string
  location: string
  achievements?: string[]
}

const educations: Education[] = [
  {
    institution: "Université du Québec à Chicoutimi (UQAC)",
    degree: "Master's in Computer Science",
    field: "Cybersecurity",
    time: "2025 - 2026",
    location: "Chicoutimi, Canada",
    achievements: [],
  },
  {
    institution: "Télécom Nancy",
    degree: "Master's in Computer Science",
    field: "Internet, Connected Systems and Security",
    time: "2023 - 2026",
    location: "Nancy, France",
    achievements: ["Top 3 2026"],
  },
  {
    institution: "Lycée Chaptal",
    degree: "Classes Préparatoires",
    field: "MPSI / MP*",
    time: "2021 - 2023",
    location: "Paris, France",
    achievements: [],
  },
]

export default function EducationPage() {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <SideLinks />
      <Contact />

      <div className="container mx-auto px-4 py-16 md:px-20 lg:px-32">
        <nav className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/" aria-label="Go back">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Education</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-accent mb-2 flex items-center gap-3">
            <GraduationCap className="h-9 w-9" />
            Education
          </h1>
          <p className="text-muted-foreground">My academic journey in computer science and cybersecurity.</p>
        </header>

        <div className="flex flex-col">
          {educations.map((edu, index) => (
            <div key={`${edu.institution}-${edu.time}`}>
              <div className="py-6">
                <div className="flex flex-col gap-1 mb-2">

                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold text-foreground">{edu.institution}</h2>
                    <h2 className="text-xl font-semibold text-foreground">{edu.time}</h2>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {edu.location}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">{edu.degree}</span>
                  <br />
                  {edu.field}
                </p>
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.achievements.map((achievement) => (
                      <Badge key={achievement} variant="outline" className="text-accent border-accent/30">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              {index < educations.length - 1 && <Separator className="bg-border/50" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
