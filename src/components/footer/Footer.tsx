import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-around p-4 border-t">
      <Link href="https://github.com">Github</Link>
      <Link href="https://linkedin.com">LinkedIn</Link>
    </footer>
  );
}

