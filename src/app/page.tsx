import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";

export const siteConfig = {
  name: "Felipe Simões | Tech Lead & Founder",
  description:
    "Lead Software Engineer & Founder building fintech products from zero. AI-powered engineering, full-stack development, and technical leadership. From first hire to Tech Lead.",
  ogImage: "https://felipesimoes.dev/og-image.png",
  url: "https://felipesimoes.dev",
};
export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <div className=" h-full w-auto flex flex-col justify-start gap-4">
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
        {/* <DownLoadResumeBtn/> */}
      </div>
      {/* RIGHT SIDE image  */}
      <div className="h-full w-[47%] relative block max-lg:hidden">
        {/* IMAGE  */}
        <HeroImage />
      </div>

      {/* GITHUB BUTTON  */}
      <GithubBtn />
    </>
  );
}
