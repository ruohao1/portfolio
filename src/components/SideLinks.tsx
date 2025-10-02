"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { cn } from "@/lib/utils"

function MediumIcon(
  { className, ...props }: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 30 30"
      className={cn("w-5 h-5", className)}
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
    { href: "https://github.com/Ruohao1", label: "GitHub", icon: <Github className="w-5 h-5" /> },
    { href: "https://linkedin.com/in/ruohaolin", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { href: "https://medium.com/@ruohaolin", label: "Medium", icon: <MediumIcon className="w-5 h-5" /> },
    { href: "mailto:you@example.com", label: "Email", icon: <Mail className="w-5 h-5" /> },
  ]

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-3 mx-4 rounded-2xl bg-background/60 border shadow-xl backdrop-blur">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex size-12 items-center justify-center rounded-2xl
                       hover:bg-accent text-primary transition"
          >
            {link.icon}
            <span className="sr-only">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
