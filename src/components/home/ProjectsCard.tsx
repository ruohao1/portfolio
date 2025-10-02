import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" /> Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm">
        <section>
          <div className="font-medium">Homelab Environment</div>
          <div className="text-muted-foreground">Proxmox · Tailscale · Ansible · ELK · Snort</div>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Automated VM/container provisioning with Ansible; SIEM (ELK) + Snort IDS.</li>
            <li>Secure remote access via Tailscale; host self-deployed services.</li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Badge variant="secondary">SIEM</Badge>
            <Badge variant="secondary">IDS</Badge>
            <Badge variant="secondary">Automation</Badge>
          </div>
        </section>
        <section>
          <div className="font-medium">TryHackMe Labs (Offensive)</div>
          <div className="text-muted-foreground">Web · Reverse · Linux · Top 4% ranking</div>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Regular labs, detailed write-ups with exploitation + remediation.</li>
            <li>Tooling: nmap, ffuf, Burp, Metasploit, pwndbg.</li>
          </ul>
        </section>
      </CardContent>
    </Card>
  );
}

