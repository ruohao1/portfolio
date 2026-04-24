import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { cn } from "@/lib/utils"
import React from "react"

// You can keep your MediumIcon if needed
function MediumIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none" // Often better to set fill on the path or currentColor
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function SideLinks() {
  const links = [
    { href: "https://github.com/Ruohao1", label: "GitHub", icon: <Github /> },
    { href: "https://linkedin.com/in/ruohaolin", label: "LinkedIn", icon: <Linkedin /> },
    { href: "https://notes.ruohao.dev/", label: "Notes", icon: <MediumIcon /> },
  ];

  return (
    <>
      <ButtonGroup
        orientation="horizontal"
        className="md:hidden text-accent bg-background h-fit fixed top-4 left-1/2 -translate-x-1/2 z-50 border"
      >
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            <Button variant="icon_link" size="xl_icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </Link>
            </Button>
            {index < links.length - 1 && <ButtonGroupSeparator orientation="vertical" />}
          </React.Fragment>
        ))}
      </ButtonGroup>

      <ButtonGroup
        orientation="vertical"
        className="hidden md:flex text-accent bg-background h-fit fixed left-4 top-1/2 -translate-y-1/2 z-50 border"
      >
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            <Button variant="icon_link" size="xl_icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </Link>
            </Button>
            {index < links.length - 1 && <ButtonGroupSeparator orientation="horizontal" />}
          </React.Fragment>
        ))}
      </ButtonGroup>
    </>
  )
}
