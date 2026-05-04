import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, Flag, Swords } from "lucide-react";
import Link from "next/link";

export function CtfWriteupsCard() {
  const rankings = [
    { result: "Top 1%", event: "TryHackMe" },
    { result: "1st", event: "Cyber Saguenay CTF" },
    { result: "Top 2", event: "Mastercard CTF" },
    { result: "22 / 59", event: "Hackfest HFCTF" },
  ];

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Link
            href="https://writeups.ruohao.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Flag className="h-5 w-5" />
            CTFs & Writeups
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <div className="space-y-2">
          {rankings.map((ranking) => (
            <div
              key={ranking.event}
              className="grid grid-cols-[5rem_1fr] gap-4 border-b border-border/60 pb-2 last:border-b-0 last:pb-0"
            >
              <span className="font-semibold text-accent">{ranking.result}</span>
              <span>{ranking.event}</span>
            </div>
          ))}
        </div>

        <p>
          Online platforms, CTF events, and public writeups across crypto,
          forensics, reverse engineering, web, and OSINT.
        </p>
      </CardContent>

      <CardFooter className="flex flex-wrap justify-end gap-3">
        <Link
          href="https://tryhackme.com/p/ruohao"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground underline"
        >
          <Swords className="h-3.5 w-3.5" />
          TryHackMe
        </Link>
        <Link
          href="https://writeups.ruohao.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground underline"
        >
          <FileText className="h-3.5 w-3.5" />
          Writeups
          <ExternalLink className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
