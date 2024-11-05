import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { talkData, workData } from "@/lib/contents";
import { Briefcase } from "lucide-react";
import Image from "next/image";

export default function workPage() {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Work
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Work</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        {workData.map((work, index) => (
          <div key={index} className="w-full h-fit flex">
            <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
              {work.period}
            </div>
            <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
              <div className="text-2xl font-rubik max-sm:text-xl">
                {work.title} <br />{" "}
                <span className="text-lg">{work.institution}</span>
              </div>
              <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex-1 flex flex-col gap-3">
          <Heading>Talks</Heading>
          <div className="w-full p-4">
            <ul className="list-none space-y-4">
              {talkData.map((talk, index) => (
                <li key={index} className="flex items-start space-x-4">
                  {/* Adicionando a foto do talk */}
                  <div className="flex-shrink-0">
                    <Image
                      src={talk.photo}
                      alt={`Photo of ${talk.name}`}
                      className="w-40 h-40 object-cover rounded-full"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-gray-900">
                      {talk.name}
                    </div>
                    <div className="text-gray-700">{talk.instutution}</div>
                    <div className="text-sm text-gray-600">{talk.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
