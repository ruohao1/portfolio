import Header from "@/components/header/Header";
import SideLinks from "@/components/side-links";
import Contact from "@/components/contact";
import Main from "@/components/home/Main";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col max-w-screen">
      {/* <Header /> */}
      <SideLinks />
      <Contact />
      <Main />
    </div>
  );
}
