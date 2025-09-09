import HeroSection from "@/components/hero/Hero";
import HeroSlider from "@/components/hero/Hero";
import { ArrowDown } from "@/components/Others/ArrowDown";
import FinanceSection from "@/components/Others/FinanceSection";
import { GridSection } from "@/components/Others/GridSection";
import SideAction from "@/components/Others/SideAction";
import TalentSection from "@/components/Others/TalentSection";
import VideoSection from "@/components/Others/VideoSection";


export default function HomePage() {

  return (
    <main className="">
      <HeroSection />
      <SideAction />
      {/* <ArrowDown /> */}
      <GridSection /> 
      <TalentSection />
      {/* <FinanceSection /> */}
      {/* <VideoSection /> */}
    </main>
  );
}
