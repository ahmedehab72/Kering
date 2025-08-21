import DiscoverSection from "@/components/groupPage/DiscoverSection"
import GridGroupSection from "@/components/groupPage/GridGroupSection"
import NewsSection from "@/components/groupPage/NewsSection"
import PathGroupPage from "@/components/groupPage/PathGroupPage"
import VideoGroupPage from "@/components/groupPage/VideoGroupPage"

const GroupPage = () => {
  return (
    <main className=" mt-12 flex min-h-screen flex-col items-center  px-4 sm:px-8 lg:px-16 relative">
      <PathGroupPage />
      <VideoGroupPage />
      <DiscoverSection />
      <GridGroupSection />
      <NewsSection />
    </main>)
}

export default GroupPage