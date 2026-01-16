import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export function EducationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex text-primary items-center gap-2">
          <GraduationCap className="h-5 w-5" /> Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div>
          <div className="font-bold">Université du Québec à Chicoutimi (UQAC)</div>
          <div>Master’s in Computer Science, Cybersecurity</div>
          <div className="text-xs text-muted-foreground">2025–2026 · Chicoutimi, Canada</div>
        </div>
        <hr className="border-border/60" />
        <div>
          <div className="font-bold">Télécom Nancy — <a href="https://etudiant.lefigaro.fr/etudes/ecoles-ingenieurs/classement-informatique/" target="_blank" className="font-normal underline">(Top 3 2026)</a></div>
          <div>Master’s in Computer Science</div>
          <div className="font-light">Internet, Connected Systems and Security</div>
          <div className="text-xs text-muted-foreground">2023–2026 · Nancy, France</div>
        </div>
        <hr className="border-border/60" />
        <div>
          <div className="font-bold">Lycée Chaptal</div>
          <div>Classes Préparatoires</div>
          <div className="font-light">MPSI / MP*</div>
          <div className="text-xs text-muted-foreground">2021–2023 · Paris, France</div>
        </div>
      </CardContent>
    </Card>
  );
}
