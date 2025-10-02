import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Technical Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div>
          <div className="mb-1 text-xs uppercase text-muted-foreground">Programming</div>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Rust</Badge>
            <Badge variant="secondary">C</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Java</Badge>
            <Badge variant="secondary">SQL</Badge>
          </div>
        </div>
        <div>
          <div className="mb-1 text-xs uppercase text-muted-foreground">Security & Systems</div>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary">Linux</Badge>
            <Badge variant="secondary">Ansible</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">ELK</Badge>
            <Badge variant="secondary">Snort</Badge>
            <Badge variant="secondary">SIEM</Badge>
            <Badge variant="secondary">Firewalls</Badge>
          </div>
        </div>
        <div>
          <div className="mb-1 text-xs uppercase text-muted-foreground">Pentest Tooling</div>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary">Nmap</Badge>
            <Badge variant="secondary">ffuf</Badge>
            <Badge variant="secondary">Burp</Badge>
            <Badge variant="secondary">Metasploit</Badge>
            <Badge variant="secondary">pwndbg</Badge>
            <Badge variant="secondary">Wireshark</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

