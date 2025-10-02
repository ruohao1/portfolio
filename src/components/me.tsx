import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Me() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src="/me.jpg" // Replace with your image path or URL
            alt="My profile"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <CardTitle>Your Name</CardTitle>
            <CardDescription>Frontend Developer</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          Passionate about building fast, accessible web experiences with React, Next.js, and beautiful UI. Currently learning animations and 3D.
        </p>
      </CardContent>

      <CardFooter className="flex justify-between text-xs text-muted-foreground">
        <span>📍 Your City</span>
        <span>💼 Open to work</span>
      </CardFooter>
    </Card>
  );
}
