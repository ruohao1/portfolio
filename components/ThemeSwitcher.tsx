"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="hover:cursor-pointer"
      aria-label="Toggle theme"
    >
      <>
        <Sun className="hidden h-5 w-5 dark:block" />
        <Moon className="block h-5 w-5 dark:hidden" />
      </>
    </Button>
  );
}
