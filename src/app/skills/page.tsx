import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { displaySkills } from '@/lib/contents';
import { Lightbulb } from "lucide-react";


const skillPage = () => {

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3 ">
        <Heading>My Technical Experience/Skills.</Heading>

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          Currently iI have a solid understand of Front End, Back End, Blockchain and DevOps . I specialize in building web
          applications and sites using Solidity, Javascript, Typescript, React, Nextjs &
          Node.
        </p>

        {displaySkills.map((val, index) => {
          return (
            <div key={index} className="block">
              <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mt-6">{val.text}
              </h1>
              <div className="w-full h-fit flex-row flex justify-between items-center">
                <SkillsFooter items={val.src} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default skillPage;
