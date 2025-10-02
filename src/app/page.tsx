import Education from "@/components/education";
import Header from "@/components/header/Header";
import Me from "@/components/me";
import SideLinks from "@/components/SideLinks";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-screen">
      <Header />
      <SideLinks />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <Me />
          <Education />
        </div>
      </main>

    </div>
  );
}
