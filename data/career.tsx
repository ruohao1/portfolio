import { SiDocker, SiUbuntu } from "react-icons/si";

const logoImages = {
  ansible:
    "https://ms-vscs-rm.gallerycdn.vsassets.io/extensions/ms-vscs-rm/vss-services-ansible/0.262.1/1755778842780/Microsoft.VisualStudio.Services.Icons.Default",
  python: "https://www.python.org/static/favicon.ico",
};

export const career = [
  {
    slug: "wintics",
    company: "Wintics",
    role: "Operational Security Intern",
    period: "Jun 2025 - Aug 2025",
    location: "Paris, France",
    summary: "Built an Ansible/Python hardening and audit tool for Ubuntu systems, aligned with CIS and ANSSI guidance, while contributing to Cityvision and Visionary product improvements.",
    tools: [
      { label: "Python", imageSrc: logoImages.python },
      { label: "Ansible", imageSrc: logoImages.ansible },
      { label: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
      { label: "Docker", icon: SiDocker, color: "#2496ED" },
      { label: "CIS" },
      { label: "ANSSI" },
      { label: "VLM" },
    ],
    bullets: [
      "Designed modular Ansible roles for CIS and ANSSI Ubuntu hardening.",
      "Built a Python CLI to apply, audit, and inspect hardening rules without manually invoking Ansible.",
      "Implemented automated audits, cached rule status, and batched handlers to reduce redundant checks and restarts.",
      "Contributed to Cityvision VLM integration, Ubuntu 24 compatibility, and Visionary frontend improvements.",
    ],
    sections: [
      {
        title: "Operational Context",
        body: "Wintics deploys local video-analysis systems on customer-hosted Ubuntu machines, sometimes without Internet access. The internship focused on reducing host attack surface while preserving the operational behavior required by Cityvision deployments.",
      },
      {
        title: "Hardening Tool",
        body: "I designed a modular hardening tool around Ansible roles for CIS and ANSSI recommendations, with task tags and exclusions for selective execution. A Python CLI wrapped the playbooks so operators could enable rules, check status, and launch audits through a documented command interface.",
      },
      {
        title: "Auditing & Reliability",
        body: "The tool integrated automated audits for services, firewall state, critical file permissions, and kernel parameters. I added status caching to avoid rerunning unchanged checks and batched handler execution to reduce repeated service restarts and configuration reloads.",
      },
      {
        title: "Compatibility Work",
        body: "The Ubuntu 24 migration surfaced stricter Python package isolation and Ansible interpreter issues. I investigated the compatibility path around virtual environments and ansible_python_interpreter so deployment automation could continue to run predictably.",
      },
      {
        title: "Product Contributions",
        body: "Alongside the hardening project, I automated VLM model integration in the Cityvision installation flow, investigated Ubuntu 24 compatibility around Python virtual environments and Ansible interpreter selection, and improved the Visionary frontend with internationalization and chat cleanup features for sales demonstrations.",
      },
    ],
    facts: [
      "CIS/ANSSI hardening",
      "Python CLI",
      "Ansible roles",
      "Automated audits",
      "Ubuntu 24 compatibility",
      "VLM integration",
    ],
    metrics: [
      { value: "CIS", label: "benchmark" },
      { value: "ANSSI", label: "guidance" },
      { value: "CLI", label: "operator interface" },
      { value: "24.04", label: "Ubuntu target" },
    ],
    workflow: ["Rules", "Ansible roles", "Python CLI", "Audits", "Status"],
    visuals: [
      {
        src: "/career/wintics/BDL Wintics.jpeg",
        alt: "Wintics team group photo",
        title: "Wintics team",
        caption: "Team photo from the Wintics internship.",
        category: "Team",
        wide: true,
      },
      {
        src: "/career/wintics/cityvision-setup.png",
        alt: "Cityvision analysis setup interface with camera view and analysis zones",
        title: "Cityvision analysis setup",
        caption: "The Wintics platform configures video analytics directly on camera streams, with zones and trajectories drawn over live footage.",
        category: "Product context",
        wide: true,
      },
      {
        src: "/career/wintics/cityvision-indicators.png",
        alt: "Cityvision dashboard showing generated indicators and video analytics results",
        title: "Generated indicators",
        caption: "The operational environment depended on local video-analysis deployments, making host hardening part of product reliability.",
        category: "Product context",
        wide: true,
      },
      {
        src: "/career/wintics/harden-help.png",
        alt: "Terminal output showing harden CLI general help with ANSSI, CIS, and Wintics commands",
        title: "Python CLI entrypoint",
        caption: "The harden command wrapped Ansible roles behind documented subcommands for operators.",
        category: "Hardening CLI",
        wide: true,
      },
      {
        src: "/career/wintics/harden-cis-help.png",
        alt: "Terminal output showing harden CIS help commands for enable, disable, audit, and status",
        title: "CIS command surface",
        caption: "The CLI exposed role-specific commands to enable checks, inspect status, and launch audits without manually invoking playbooks.",
        category: "Hardening CLI",
        wide: true,
      },
      {
        src: "/career/wintics/harden-enable-help.png",
        alt: "Terminal output showing harden CIS enable options for level, rule, exclude-rule, and dry-run",
        title: "Selective rule execution",
        caption: "Operators could target levels or individual rules, exclude problematic checks, and preview execution with dry-run mode.",
        category: "Hardening CLI",
        wide: true,
      },
      {
        src: "/career/wintics/harden-status.png",
        alt: "Terminal output showing hardening status table with rule identifiers and compliance state",
        title: "Compliance status",
        caption: "Status output grouped CIS controls by chapter and displayed rule-level compliance results.",
        category: "Audit evidence",
        wide: true,
      },
      {
        src: "/career/wintics/harden-audit.png",
        alt: "Terminal output showing detailed audit checks for systemd journal remote authentication",
        title: "Detailed audit trace",
        caption: "Audit mode showed the commands and assertions used to verify whether hardening rules were correctly applied.",
        category: "Audit evidence",
        wide: true,
      },
      {
        src: "/career/wintics/visionary-fr.png",
        alt: "Visionary interface in French with language selector",
        title: "French interface",
        caption: "Visionary frontend work included internationalization for product demonstrations.",
        category: "Visionary frontend",
      },
      {
        src: "/career/wintics/visionary-language-menu.png",
        alt: "Visionary language menu switching between French and English",
        title: "Language switcher",
        caption: "A lightweight language selector made demos more accessible to different audiences.",
        category: "Visionary frontend",
      },
      {
        src: "/career/wintics/visionary-en.png",
        alt: "Visionary interface translated into English",
        title: "English interface",
        caption: "The same interface could be rendered in English for client-facing presentations.",
        category: "Visionary frontend",
      },
      {
        src: "/career/wintics/visionary-chat.png",
        alt: "Visionary chat interface showing image and video prompts with multimodal model responses",
        title: "Conversation management",
        caption: "The chat workflow supported multimodal demonstrations and was improved with conversation cleanup controls.",
        category: "Visionary frontend",
        wide: true,
      },
    ],
  },
];

export type CareerItem = (typeof career)[number];

export function getCareerItem(slug: string) {
  return career.find((item) => item.slug === slug);
}
