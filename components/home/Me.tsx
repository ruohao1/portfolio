import { Badge } from "../ui/badge";

export default function Me() {
  return (
    <div className="flex-1 w-full space-y-4">
      <img src="/profile.jpg" alt="cedric-lin" className="rounded-full" />
      <div>
        <h1 className="text-primary text-5xl font-bold">Cedric LIN</h1>
        <h2>Master’s student in Cybersecurity</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Enthusiastic about cybersecurity with hands-on system hardening, automation, and security standards.
      </p>
      <div className="flex flex-wrap gap-1.5">
        <Badge variant="secondary">France</Badge>
        <Badge variant="secondary">Canada</Badge>
      </div>
    </div>
  );
}
