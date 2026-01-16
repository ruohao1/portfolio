import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { FileUser, Mail } from "lucide-react"
import React from "react"

export default function Contact() {
  const links = [
    { href: "/resume_sep2025.pdf", label: "Resume", icon: <FileUser /> },
    { href: "mailto:ruohaolin@gmail.com", label: "Email", icon: <Mail /> },
  ]

  return (
    <>
      {/* Mobile - horizontal at bottom center */}
      <ButtonGroup
        orientation="horizontal"
        className="md:hidden text-accent bg-background h-fit fixed bottom-4 left-1/2 -translate-x-1/2 z-50 border"
      >
        {links.map((link, index) => (
          <React.Fragment key={link.label}>
            <Button variant="icon_link" size="xl_icon" asChild>
              <a href={link.href} aria-label={link.label}>
                {link.icon}
              </a>
            </Button>
            {index < links.length - 1 && <ButtonGroupSeparator orientation="vertical" />}
          </React.Fragment>
        ))}
      </ButtonGroup>

      {/* Desktop - vertical on right, centered vertically */}
      <ButtonGroup
        orientation="vertical"
        className="hidden md:flex text-accent bg-background w-fit fixed right-4 top-1/2 -translate-y-1/2 z-50 border"
      >
        {links.map((link, index) => (
          <React.Fragment key={link.label}>
            <Button variant="icon_link" size="xl_icon" asChild>
              <a href={link.href} aria-label={link.label}>
                {link.icon}
              </a>
            </Button>
            {index < links.length - 1 && <ButtonGroupSeparator orientation="horizontal" />}
          </React.Fragment>
        ))}
      </ButtonGroup>
    </>
  )
}
