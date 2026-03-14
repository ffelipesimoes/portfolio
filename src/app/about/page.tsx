/* eslint-disable react/no-unescaped-entities */
import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
export default function page() {
  const items = [
    { hobby: "Coding" },
    { hobby: "Playing guitar" },
    { hobby: "Go to the Cinema" },
    { hobby: "Traveling" },
    { hobby: "Stay with family" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2 ">
        <User2 className="h-5 w-5 " />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-2xl sm:text-xl text-gray-900 leading-tight">
          Tech Lead & Founder. I Build Fintech Products From Zero.
        </h1>

        <div className="font-sans text-gray-900 w-full space-y-6 p-6 rounded-lg shadow bg-white">
          <p className="text-lg sm:text-base leading-relaxed">
            I build fintech products from zero: front-end, back-end, DevOps, cloud.
            I've done it as the first senior developer hired at Ether.
            And as founder of my own products.
          </p>
          <p className="text-lg sm:text-base leading-relaxed">
            Today I lead engineering teams and bring AI into the workflow.
            My sweet spot is 0 to 10: the phase where nothing exists yet.
          </p>
          <p className="text-lg sm:text-base leading-relaxed">
            I come from infrastructure, so I speak every technical layer and translate it for business.
            I'm also a founder at heart, building products because I love turning ideas into things people actually use.
          </p>
          <p className="text-lg sm:text-base leading-relaxed">
            Moved from Brazil to Portugal, and I keep building.
          </p>

          <p className="text-lg sm:text-base leading-relaxed">
            I offer a range of services, including:
          </p>

          <ul className="list-disc pl-8 text-lg sm:text-base leading-relaxed">
            <li>Full-stack product development (0 to 1)</li>
            <li>AI-powered engineering workflows</li>
            <li>Technical leadership & team scaling</li>
            <li>DevOps & Cloud Architecture (AWS)</li>
          </ul>

          <p className="text-lg sm:text-base leading-relaxed">
            When I'm not coding, you'll find me playing guitar or making people laugh with a good story.
          </p>

          <p className="text-lg sm:text-base leading-relaxed">
            Building something from zero and need a technical leader who thinks like a founder?
            Let's talk →{" "}
            <a href="mailto:felipe.simoes@etherglobalassets.com.br" className="text-blue-600 hover:underline">
              felipe.simoes@etherglobalassets.com.br
            </a>
          </p>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between max-lg:flex-col ">
        <Aboutfooter />
      </div>
      <div className="block">
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
