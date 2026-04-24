import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
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

interface Project {
  title: string
  description: string[]
  techStack: string[]
  time: string
  githubUrl?: string
  liveUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    title: "Homelab Environment",
    description: [
      "Built and operated a Proxmox-based homelab hosting VMs and containers for self-hosted applications and security infrastructure.",
      "Deployed self-hosted services including file synchronization and password management.",
      "Designed a segmented virtual network using pfSense with controlled inter-segment routing.",
      "Implemented secure remote access via a WireGuard VPN for off-site access to internal services.",
      "Deployed a SIEM stack to collect and analyze logs from hosts, network devices, and applications.",
      "Currently migrating infrastructure to IaC using Terraform and Ansible."
    ],
    techStack: ["Proxmox", "Terraform", "Ansible", "Elastic Stack", "WireGuard"],
    time: "2024 - Present",
    githubUrl: "https://github.com/Ruohao1",
  },
  {
    title: "Ubuntu Hardening Automation",
    description: [
      "Built a hardening automation tool using Python and Ansible, generating auditable reports for ops. Implemented baseline controls aligned with CIS and ANSSI standards.",
    ],
    techStack: ["Python", "Ansible", "CIS", "ANSSI", "Ubuntu"],
    time: "Jun 2025 - Aug 2025",
    githubUrl: "https://github.com/Ruohao1",
  },
  {
    title: "TryHackMe Labs",
    description: [
      "Top 1% ranking with regular labs across recon/enumeration, exploitation, and post-exploitation. Documented write-ups covering tooling like nmap, ffuf, Burp, and Wireshark.",
    ],
    techStack: ["Web Exploitation", "PrivEsc", "Enumeration", "Detection/IR"],
    time: "2023 - Present",
    liveUrl: "https://tryhackme.com/p/ruohao",
  },
  {
    title: "Security Portfolio Website",
    description:
      [
        "Personal portfolio and CV website built with Next.js and Tailwind CSS. Features responsive design with dark theme and interactive components.",
      ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    time: "2025",
    githubUrl: "https://github.com/Ruohao1",
    liveUrl: "https://ruohao.dev",
  },
]

export default function ProjectsPage() {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <SideLinks />
      <Contact />

      <div className="container mx-auto px-4 pt-24 pb-24 md:px-20 md:py-16 lg:px-32">
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
                <BreadcrumbPage>Projects</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-accent mb-2">Projects</h1>
          <p className="text-muted-foreground">
            A collection of my work.
          </p>
        </header>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={project.title}>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
                    <span className="text-sm text-muted-foreground">{project.time}</span>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed mb-4">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-accent border-accent/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              {index < projects.length - 1 && <Separator className="bg-border/50" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
