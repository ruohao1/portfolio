import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Briefcase } from "lucide-react"
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

interface Career {
  company: string
  position: string
  time: string
  location: string
  description: string[]
  skills: string[]
}

const careers: Career[] = [
  {
    company: "Wintics",
    position: "Operational Security Intern",
    time: "Jun 2025 - Aug 2025",
    location: "Paris, France",
    description: [
      "Developed an Ansible-based hardening framework enforcing CIS and ANSSI benchmarks.",
      "Implemented security controls for SSH, authentication, logging, firewalling, and audit compliance.",
      "Implemented automated standards-compliance audits with structured security reports.",
      "Authored operator-facing documentation and troubleshooting playbooks for handover to ops teams and future interns.",
    ],
    skills: ["Python", "Ansible", "Ubuntu", "CIS", "ANSSI", "Security Hardening"],
  },
]

export default function CareersPage() {
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
                <BreadcrumbPage>Careers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-accent mb-2 flex items-center gap-3">
            <Briefcase className="h-9 w-9" />
            Careers
          </h1>
          <p className="text-muted-foreground">My professional journey</p>
        </header>

        <div className="flex flex-col">
          {careers.map((career, index) => (
            <div key={`${career.company}-${career.time}`}>
              <div className="py-6">
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold text-foreground">{career.position}</h2>
                    <h2 className="text-xl font-semibold text-foreground">{career.time}</h2>
                  </div>
                  <span className="font-medium text-sm text-muted-foreground">
                    <Link href={`https://wintics.com`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{career.company}</Link> · {career.location}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed mb-4">
                  {career.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-accent border-accent/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              {index < careers.length - 1 && <Separator className="bg-border/50" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
