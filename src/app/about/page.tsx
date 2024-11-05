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
          Software Engineer And DevOps Engineer, Based In Portugal.
        </h1>

        <div className="font-sans text-gray-900 w-full space-y-6 p-6 rounded-lg shadow bg-white">
          <p className="text-lg sm:text-base leading-relaxed">
            Experienced IT professional with over 14 years across diverse
            sectors (Legal, Banking, Mining, Health) from startups to large
            enterprises around the world. Driven by a passion for innovation,
            combining intelligent design with a results-oriented approach.{" "}
          </p>
          <p className="text-lg sm:text-base leading-relaxed">
            As a Software Developer and DevOps engineer, my focus is to support
            organizations that wish to successfully navigate the era of Web 3.0,
            integrating technological innovations for a solid presence in the
            digital space.{" "}
          </p>

          <p className="text-lg sm:text-base leading-relaxed">
            I offer a range of services, including:
          </p>

          <ul className="list-disc pl-8 text-lg sm:text-base leading-relaxed">
            <li>Full stack software development;</li>
            <li>DevOps engineering;</li>
            <li>Blockchain consulting;</li>
            <li>Lectures on Web 3.0.</li>
          </ul>

          <p className="text-lg sm:text-base leading-relaxed">
            My mission is to create solutions that empower end-users, enhancing
            transparency and security in an ever-evolving digital environment.
          </p>

          <p className="text-lg sm:text-base leading-relaxed">
            When I'm not working, I love playing guitar, singing, and telling
            stories that make people laugh.
          </p>

          <p className="text-lg sm:text-base leading-relaxed">
            If you're looking to expand your company's capabilities with
            blockchain technology and Web 3.0, I would love to collaborate to
            develop strategies that propel your business.
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
