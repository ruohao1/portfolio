import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" /> Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div>
          <div className="font-medium">Université du Québec à Chicoutimi (UQAC)</div>
          <div>Master’s in Computer Science, Cybersecurity — 2025–2026 · Chicoutimi, Canada</div>
        </div>
        <div>
          <div className="font-medium">Télécom Nancy</div>
          <div>Master’s in Computer Science, Internet/Connected Systems & Security — 2023–2026 · Nancy, France</div>
        </div>
        <div>
          <div className="font-medium">Lycée Chaptal</div>
          <div>Classes Préparatoires MPSI / MP* — 2021–2023 · Paris, France</div>
        </div>
      </CardContent>
    </Card>
  );
}
