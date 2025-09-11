import HeroSection from "@/components/hero/Hero";
import AboutPage from "@/components/Others/About";
import { FAQ } from "@/components/Others/FAQ";
import FinanceSection from "@/components/Others/FinanceSection";
import { GridSection } from "@/components/Others/GridSection";
import IconSlider from "@/components/Others/IconSlider";
import OurFeatures from "@/components/Others/OurFeatures";
import SideAction from "@/components/Others/SideAction";
import TalentSection from "@/components/Others/TalentSection";
import VideoSection from "@/components/Others/VideoSection";


export default function HomePage() {

  return (
    <main className="">
      <HeroSection />
      <SideAction />
      <AboutPage /> 
      <GridSection /> 
      <OurFeatures />
      <IconSlider />
      <FAQ />
      {/* <TalentSection /> */}
      {/* <FinanceSection /> */}
      {/* <VideoSection /> */}
    </main>
  );
}
