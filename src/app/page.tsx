import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";

export const siteConfig = {
  name: "Felipe Simões",
  description:
    "Experienced IT professional with over 14 years across diverse sectors (Legal, Banking, Mining, Health) from startups to large enterprises around the world. Driven by a passion for innovation, combining intelligent design with a results-oriented approach.",
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
