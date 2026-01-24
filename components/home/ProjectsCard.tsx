import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Shield, Home, Swords, Radar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProjectsCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Link href='/projects' className="flex items-center gap-2 hover:underline">
            <Shield className="h-5 w-5" />
            Projects
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 text-sm">
        {/* Homelab */}
        <section>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Home className="h-4 w-4 text-muted-foreground" />
                Homelab Environment
              </div>
              {/* <div className="mt-1 text-xs text-muted-foreground"> */}
              {/*   Proxmox · WireGuard · Terraform · Ansible · Elastic Stack */}
              {/* </div> */}
            </div>

            <div className="flex items-center gap-2 pr-1">
              <img height="22" width="22" className="rounded-sm" src="https://www.proxmox.com/favicon.svg" alt="Proxmox" />
              <img height="22" width="22" className="rounded-sm" src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/terraform-icon-zp95oytvn5ci8lsub9sbeh.png/terraform-icon-tew8r4clf5ocvoyj0o05j.png?_a=DATAg1AAZAA0" alt="Terraform" />
              <img height="22" width="22" className="rounded-sm" src="https://ms-vscs-rm.gallerycdn.vsassets.io/extensions/ms-vscs-rm/vss-services-ansible/0.262.1/1755778842780/Microsoft.VisualStudio.Services.Icons.Default" alt="Ansible" />
              <img height="22" width="22" className="rounded-sm" src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/wireguard.webp" alt="WireGuard" />
              <img height="22" width="22" className="rounded-sm" src="https://staging.svgrepo.com/show/303574/elasticsearch-logo.svg" alt="Elasticsearch" />
            </div>
          </div>

          <ul className=" text-muted-foreground mt-3 list-disc space-y-1.5 pl-5">
            <li>
              Provisioned Proxmox workloads with <span className=" text-foreground font-semibold">Terraform</span> (IaC) and enforced
              desired-state config using <span className="text-foreground font-semibold">Ansible</span> (idempotent playbooks, inventory-driven deployments).
            </li>
            <li>
              Built a log pipeline into the <span className="text-foreground font-semibold">Elastic Stack</span> to support event correlation, investigation, and alert triage.
            </li>
            <li>
              Implemented <span className="text-foreground font-semibold">WireGuard</span> remote access with key-based auth, restricted routes, and
              segmented network (<span className="text-foreground font-semibold">Zero Trust</span> + <span className="text-foreground font-semibold"> network isolation</span>).
            </li>
          </ul>

        </section>

        <Separator />

        {/* TryHackMe */}
        <section>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Swords className="h-4 w-4 text-muted-foreground" />
                TryHackMe - Offensive/Defensive
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="default" className="gap-1">
                <Radar className="h-3.5 w-3.5" />
                Top 1%
              </Badge>
            </div>
          </div>

          <div className="mt-1 text-xs text-muted-foreground">
            Web Exploitation · PrivEsc · Enumeration
          </div>
          <ul className="text-muted-foreground mt-3 list-disc space-y-1.5 pl-5">
            <li>
              <a
                href="https://tryhackme.com/p/ruohao"
                target="_blank"
                className="font-semibold text-primary underline underline-offset-4"
              >
                Top 1% ranking
              </a>{" "}
              with regular labs across recon/enumeration, exploitation, and post-exploitation (lateral movement, privilege escalation).
            </li>
            <li>
              Documented{" "}
              <a
                href="https://writeups.ruohao.dev/"
                target="_blank"
                className="font-semibold text-primary underline underline-offset-4"
              >
                write-ups
              </a>{" "}
            </li>
            <li>
              Tooling: <span className="text-foreground font-semibold">nmap</span>, <span className="text-foreground font-semibold">ffuf</span>, <span className="text-foreground font-semibold">Burp</span>
            </li>
            <li>
              <span className="text-foreground font-semibold">Wireshark</span> plus log review, alert triage, and basic incident response workflow.
            </li>

          </ul>

        </section>

      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href="/projects" className="text-xs text-muted-foreground underline">View more...</Link>
      </CardFooter>
    </Card>
  );
}
