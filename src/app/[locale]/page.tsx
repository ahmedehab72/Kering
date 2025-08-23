import HeroSlider from "@/components/hero/Hero";
import { ArrowDown } from "@/components/Others/ArrowDown";
import FinanceSection from "@/components/Others/FinanceSection";
import { GridSection } from "@/components/Others/GridSection";
import SideAction from "@/components/Others/SideAction";
import TalentSection from "@/components/Others/TalentSection";
import VideoSection from "@/components/Others/VideoSection";


export default function HomePage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 lg:px-16 relative">
      <HeroSlider />
      <SideAction />
      <ArrowDown />
      <GridSection /> 
      <TalentSection />
      {/* <FinanceSection /> */}
      {/* <VideoSection /> */}
    </main>
  );
}
