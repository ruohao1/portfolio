/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function TryHackMeCard() {
  return (
    <Card className="overflow-hidden">
      <Link
        href="https://tryhackme.com/p/ruohao"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[700/230] w-full">
          <img
            src="https://tryhackme-badges.s3.amazonaws.com/ruohao.png"
            alt="TryHackMe badge"
            className="object-cover"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          />
        </div>
      </Link>
    </Card>
  );
}
