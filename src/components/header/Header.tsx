import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Header() {
  return (
    <header className="flex justify-end p-4">
      <ThemeSwitcher />
    </header>
  );
}

