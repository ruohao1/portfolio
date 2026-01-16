import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex justify-end p-4">
      <ThemeSwitcher />
    </header>
  );
}

