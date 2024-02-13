import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Projects } from '@/lib/contents';
import { Layers } from "lucide-react";

const projectsPage = () => {

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          
          Here is where innovation meets execution. 
          These selected works highlight my journey in crafting secure, 
          transparent Web 3.0 solutions and my pursuit of technical excellence. 
          Each project underscores my commitment to user empowerment and showcases 
          my skills in software engineering, blockchain and DevOps.
        </p>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
