import FeatureOne from "@/components/features/FeatureOne";
import FeatureFour from "@/components/features/FeatureFour";
import FeatureTwo from "@/components/features/FeatureTwo";
import TalentSection from "@/components/Others/TalentSection";
import FeatureThree from "@/components/features/FeatureThree";
import SustainabilityVideo from "@/components/Others/VideoSection";

const FeaturesPage = () => {
  return (
    <div className='bg-gray-200'>
      <FeatureOne />
      <FeatureTwo />
      <FeatureFour />
      <FeatureThree />
      <TalentSection />
      <SustainabilityVideo />
    </div>
  );
};

export default FeaturesPage;
