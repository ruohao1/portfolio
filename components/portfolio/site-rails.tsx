"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BookOpen, BriefcaseBusiness, FileUser, FolderKanban, Home, Mail } from "lucide-react";

import { profile, resumePath, writeupsUrl } from "@/data/profile";
import { RailLink } from "@/components/portfolio/rail-link";
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/social-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function TooltipRailLink({ tooltip, side, children }: { tooltip: string; side: "bottom" | "left" | "right" | "top"; children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export function SiteRails() {
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const [supportsLandingColumns, setSupportsLandingColumns] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(true);
  const isHome = pathname === "/";
  const isProjects = pathname === "/projects" || pathname.startsWith("/projects/");
  const isCareer = pathname === "/career" || pathname.startsWith("/career/");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    function handleChange() {
      setSupportsLandingColumns(mediaQuery.matches);
    }

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < 32;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      setIsMobileVisible(isNearTop || isScrollingUp);
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useHorizontalRails = !supportsLandingColumns;
  const primaryTooltipSide = useHorizontalRails ? "bottom" : "right";
  const externalTooltipSide = useHorizontalRails ? "top" : "left";
  const railOrientation = useHorizontalRails ? "horizontal" : "vertical";
  const primaryRailClass = useHorizontalRails
    ? `fixed left-1/2 top-4 z-20 grid -translate-x-1/2 grid-flow-col border border-border bg-background/80 backdrop-blur transition-all duration-300 ease-out ${isMobileVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}`
    : "fixed left-6 top-1/2 z-20 grid -translate-y-1/2 grid-flow-row border border-border bg-background/80 opacity-100 backdrop-blur";
  const externalRailClass = useHorizontalRails
    ? `fixed bottom-4 left-1/2 z-20 grid -translate-x-1/2 grid-flow-col border border-border bg-background/80 backdrop-blur transition-all duration-300 ease-out ${isMobileVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 pointer-events-none"}`
    : "fixed right-6 top-1/2 z-20 grid -translate-y-1/2 grid-flow-row border border-border bg-background/80 opacity-100 backdrop-blur";

  return (
    <TooltipProvider>
      <nav className={primaryRailClass} aria-label="Primary links">
        <TooltipRailLink tooltip="Home" side={primaryTooltipSide}><RailLink href="/" label="Home" active={isHome} orientation={railOrientation}><Home size={20} /></RailLink></TooltipRailLink>
        <TooltipRailLink tooltip="Projects" side={primaryTooltipSide}><RailLink href="/projects" label="Projects" active={isProjects} orientation={railOrientation}><FolderKanban size={20} /></RailLink></TooltipRailLink>
        <TooltipRailLink tooltip="Career" side={primaryTooltipSide}><RailLink href="/career" label="Career" active={isCareer} orientation={railOrientation}><BriefcaseBusiness size={20} /></RailLink></TooltipRailLink>
        <TooltipRailLink tooltip="Writeups" side={primaryTooltipSide}><RailLink href={writeupsUrl} label="Open writeups" target="_blank" rel="noreferrer" orientation={railOrientation}><BookOpen size={20} /></RailLink></TooltipRailLink>
      </nav>

      <nav className={externalRailClass} aria-label="External links">
        <TooltipRailLink tooltip="GitHub" side={externalTooltipSide}><RailLink href={profile.github} label="GitHub" orientation={railOrientation}><GithubIcon className="h-5 w-5" /></RailLink></TooltipRailLink>
        <TooltipRailLink tooltip="LinkedIn" side={externalTooltipSide}><RailLink href={profile.linkedin} label="LinkedIn" orientation={railOrientation}><LinkedinIcon className="h-5 w-5" /></RailLink></TooltipRailLink>
        <TooltipRailLink tooltip="Resume" side={externalTooltipSide}><RailLink href={resumePath} label="Open resume" target="_blank" rel="noreferrer" orientation={railOrientation}><FileUser size={20} /></RailLink></TooltipRailLink>
        <TooltipRailLink tooltip="Email" side={externalTooltipSide}><RailLink href={`mailto:${profile.email}`} label="Email" orientation={railOrientation}><Mail size={20} /></RailLink></TooltipRailLink>
      </nav>
    </TooltipProvider>
  );
}
