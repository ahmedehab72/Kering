import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const TalentSection = () => {
  return (
    <div style={{
        backgroundImage: "url('/images/heroImage2.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display : "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "50vh",
        width: "100%",

    }}>
        <h2 className="text-white text-lg mt-[-80px] tracking-[.5rem]">TALENT</h2>
    <div className="flex w-[90%] lg:w-2/5 mx-auto relative items-center gap-2 ">
      <Input className="bg-white text-black h-18 " type="email" placeholder="ENTER JOB TITLE, KEYWORDS OR MISION." />
      <button className="absolute right-0 h-18 py-4 lg:px-12 px-4 bg-[#f1e4db] hover:bg-[#f3daca] border-none rounded-none shadow-none" type="submit">
        Ok
      </button>
    </div>    </div>
  )
}

export default TalentSection