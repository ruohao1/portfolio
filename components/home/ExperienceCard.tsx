import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Briefcase, FileText, ShieldCheck, TerminalSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function ExperienceCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Link href='/careers' className="flex items-center gap-2 hover:underline">
            <Briefcase className="h-5 w-5" />Careers
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <section className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-bold">Wintics — Operational Security Intern</div>
              <div className="text-xs text-muted-foreground">
                Jun 2025 – Aug 2025 · Paris, France
              </div>
            </div>

            <div className="flex items-center gap-2 pr-1 opacity-90">
              <img height="22" width="22" src="https://www.python.org/static/favicon.ico" alt="Python" className="rounded-sm" />
              <img
                height="22"
                width="22"
                src="https://ms-vscs-rm.gallerycdn.vsassets.io/extensions/ms-vscs-rm/vss-services-ansible/0.262.1/1755778842780/Microsoft.VisualStudio.Services.Icons.Default"
                alt="Ansible"
                className="rounded-sm"
              />
            </div>
          </div>

          <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground">
            <li>
              Built an <span className="text-foreground font-semibold">Ubuntu hardening automation</span> tool using{" "}
              <span className="text-foreground font-semibold">Python + Ansible</span>, generating auditable reports for ops.
            </li>
            <li>
              Implemented baseline controls aligned with <span className="text-foreground font-semibold">CIS</span> and{" "}
              <span className="text-foreground font-semibold">ANSSI</span>: SSH policy, auth hardening, logging, firewall defaults.
            </li>
            <li>
              Authored runbooks and troubleshooting playbooks to enable <span className="text-foreground font-semibold">operational adoption</span>{" "}
              and reduce time-to-fix.
            </li>
          </ul>
        </section>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href="/careers" className="text-xs text-muted-foreground underline">View more...</Link>
      </CardFooter>
    </Card >
  );
}
