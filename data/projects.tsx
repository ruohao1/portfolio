import { Bot, House, Shield } from "lucide-react";
import {
  SiAndroid,
  SiDocker,
  SiGo,
  SiKubernetes,
  SiKotlin,
  SiPython,
} from "react-icons/si";

const logoImages = {
  ansible:
    "https://ms-vscs-rm.gallerycdn.vsassets.io/extensions/ms-vscs-rm/vss-services-ansible/0.262.1/1755778842780/Microsoft.VisualStudio.Services.Icons.Default",
  elasticsearch: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/elasticsearch.svg",
  proxmox: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/proxmox.svg",
  python: "https://www.python.org/static/favicon.ico",
  terraform: "https://img.icons8.com/?size=100&id=kEkT1u7zTDk5&format=png&color=000000",
  wireguard: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/wireguard.svg",
};

export const projects = [
  {
    slug: "homelab",
    icon: House,
    title: "HomeLab Environment",
    summary: "Segmented Proxmox lab with Terraform, Ansible, Elastic logging, and WireGuard remote access.",
    period: "Ongoing",
    tags: [
      { label: "Proxmox", imageSrc: logoImages.proxmox },
      { label: "Terraform", imageSrc: logoImages.terraform },
      { label: "Ansible", imageSrc: logoImages.ansible },
      { label: "Elastic", imageSrc: logoImages.elasticsearch },
      { label: "WireGuard", imageSrc: logoImages.wireguard },
    ],
    sections: [
      {
        title: "Context",
        body: "A personal lab built to practice infrastructure security, remote access design, and observable service operations in a controlled environment.",
      },
      {
        title: "Implementation",
        body: "The lab combines VLAN segmentation, Proxmox workloads, WireGuard overlay access through AWS EC2, reverse proxying, DNS filtering, internal services, and centralized ELK logging for SIEM-like visibility.",
      },
      {
        title: "Security Focus",
        body: "The environment emphasizes network segmentation, desired-state configuration, repeatable deployments, and operational visibility.",
      },
    ],
    facts: ["VLAN segmentation", "Zero-trust assumptions", "AWS WireGuard overlay", "ELK logging pipeline"],
  },
  {
    slug: "vishield",
    icon: Shield,
    title: "ViShield",
    href: "https://github.com/ruohao1/vishield",
    summary: "Android vishing detection prototype that turns live-call audio into speech, language cues, and risk-scored user alerts.",
    period: "Prototype",
    tags: [
      { label: "Android", icon: SiAndroid, color: "#3DDC84" },
      { label: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { label: "Python", imageSrc: logoImages.python },
      { label: "BERT" },
      { label: "NLP" },
      { label: "Risk scoring" },
    ],
    sections: [
      {
        title: "Problem",
        body: "Voice phishing relies on urgency, impersonation, and social pressure to push users into disclosing sensitive information. ViShield focuses on the intent of the conversation instead of caller reputation, making it more relevant against spoofed numbers and AI-assisted social engineering.",
      },
      {
        title: "Prototype Architecture",
        body: "ViShield is structured as a product prototype around mobile capture, speech-to-text, semantic classification, risk scoring, and user alerts. The architecture treats the phone as the decision surface while keeping the detection pipeline explicit and explainable.",
      },
      {
        title: "Audio Pipeline",
        body: "The prototype runs on a rooted Android device with Magisk and SKVALEX Call Recorder. A foreground CallDetection Service watches the dynamic .wav.temp recording buffer, copies five-second audio segments, then sends them asynchronously through transcription and classification while the call is still active.",
      },
      {
        title: "Language Model",
        body: "The detection layer compares transformer-based classifiers including RoBERTa and ModernBERT. The models were trained on a combined phishing corpus of 74,014 SMS and email samples, relying on the transferability of fraud semantics from text to transcribed voice conversations.",
      },
      {
        title: "User Feedback",
        body: "The Kotlin and Jetpack Compose interface exposes a protection dashboard, threat analysis screens, and sensitivity settings. Suspicious conversations are translated into risk scores, contextual indicators, notifications, and haptic or audio cues so the user can react without leaving the call flow.",
      },
      {
        title: "Deployment Constraint",
        body: "The root-based implementation proves feasibility but is not a consumer deployment path. A production version would require OS-level, OEM, or operator integration to access call audio safely while preserving privacy and platform security guarantees.",
      },
    ],
    facts: [
      "Rooted Android PoC",
      "5s audio segments",
      "Speech-to-text",
      "RoBERTa / ModernBERT",
      "74k training samples",
      "Risk scoring alerts",
    ],
    metrics: [
      { value: "5s", label: "audio windows" },
      { value: "74k", label: "training samples" },
      { value: "BERT", label: "classifier family" },
      { value: "Root", label: "Android PoC" },
    ],
    visuals: [
      {
        src: "/projects/vishield/pipeline.png",
        alt: "ViShield architecture pipeline from incoming call to data collection, preprocessing, detection, scoring, alerting, and logging",
        title: "Detection pipeline",
        caption: "End-to-end architecture showing how call signals move through collection, preprocessing, model analysis, scoring, alerting, and feedback loops.",
        category: "Architecture",
        wide: true,
      },
      {
        src: "/projects/vishield/landing-demo.png",
        alt: "ViShield landing page concept with mobile dashboard mockup",
        title: "Product concept",
        caption: "A dark-mode presentation concept used to explain ViShield's protection model and real-time call monitoring.",
        category: "Architecture",
        wide: true,
      },
      {
        src: "/projects/vishield/dashboard.png",
        alt: "ViShield mobile dashboard showing protected status and recent call activity",
        title: "Protection dashboard",
        caption: "The dashboard summarizes protection state, analyzed calls, blocked threats, and recent call activity.",
        category: "Mobile prototype",
      },
      {
        src: "/projects/vishield/threat-analysis.png",
        alt: "ViShield threat analysis screen showing critical risk indicators",
        title: "Threat analysis",
        caption: "Suspicious calls are translated into a risk score and contextual indicators such as urgency and impersonation.",
        category: "Mobile prototype",
      },
      {
        src: "/projects/vishield/settings.png",
        alt: "ViShield settings screen with sensitivity level and notification toggles",
        title: "Protection settings",
        caption: "Sensitivity controls let the user tune how aggressively the prototype surfaces risk alerts.",
        category: "Mobile prototype",
      },
      {
        src: "/projects/vishield/model-evaluation.png",
        alt: "Word cloud comparing phishing and safe text terms used for model analysis",
        title: "Semantic dataset analysis",
        caption: "The model work included dataset exploration to compare phishing and safe language patterns before fine-tuning.",
        category: "Evaluation",
        wide: true,
      },
      {
        src: "/projects/vishield/metadata-results.png",
        alt: "XGBoost recall versus false positive rate chart for metadata classifier",
        title: "Metadata classifier trade-off",
        caption: "A complementary metadata classifier explored recall versus false-positive trade-offs for configurable protection levels.",
        category: "Evaluation",
        wide: true,
      },
    ],
  },
  {
    slug: "penta",
    icon: Bot,
    title: "Penta",
    href: "https://github.com/ruohao1/penta",
    summary: "Reconnaissance and execution engine in Go with DAG-based workflows, concurrency control, and resumable pipelines.",
    period: "Project",
    tags: [
      { label: "Go", icon: SiGo, color: "#00ADD8" },
      { label: "Docker", icon: SiDocker, color: "#2496ED" },
      { label: "k3s", icon: SiKubernetes, color: "#326CE5" },
      { label: "AWS" },
      { label: "DAG engine" },
    ],
    sections: [
      {
        title: "Problem",
        body: "Reconnaissance workflows can become noisy, non-deterministic, and hard to resume when each tool runs as an isolated script.",
      },
      {
        title: "Architecture",
        body: "Penta models reconnaissance as a DAG-based execution engine with concurrency control, rate limiting, recursive crawling, advanced filtering, and deterministic deduplication.",
      },
      {
        title: "Reliability",
        body: "The engine includes fail-fast logic, timeout handling, observability hooks, and lifecycle tracking so workflows can be resumed and inspected.",
      },
    ],
    facts: ["Go engine", "DAG execution", "Rate limiting", "Resumable workflows"],
  },
];

export type Project = (typeof projects)[number];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
