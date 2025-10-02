import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function ExperienceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" /> Professional Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm">
        <section>
          <div className="font-medium">Wintics — Operational Security Intern</div>
          <div className="text-muted-foreground">Paris, France · Jun 2025 – Aug 2025</div>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Built an Ubuntu hardening automation tool (Python + Ansible) with reporting/auditing.</li>
            <li>Implemented CIS/ANSSI controls: auth policies, SSH restrictions, logging, firewall.</li>
            <li>Wrote technical docs and troubleshooting playbooks for operations adoption.</li>
          </ul>
        </section>
        <section>
          <div className="font-medium">Super U — Retail Associate</div>
          <div className="text-muted-foreground">Maxéville, France · Nov 2024 – May 2025</div>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Optimized inventory operations; handled high-volume transactions and refunds.</li>
            <li>Entrusted with opening/closing, cash reconciliation, and shift management.</li>
          </ul>
        </section>
      </CardContent>
    </Card>
  );
}
