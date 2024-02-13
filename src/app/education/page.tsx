import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { certifications, educationData } from '@/lib/contents';
import { Briefcase } from "lucide-react";
import { GrCertificate } from 'react-icons/gr';
import { RiCalendarEventFill } from 'react-icons/ri';

const educationPage = () => {

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
        </div>
          <div className="w-full h-fit flex flex-col">
            {educationData.map((education, index) => (
              <div key={index} className="w-full h-fit flex">
                <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
                  {education.period}
                </div>
                <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
                  <div className="text-2xl font-rubik max-sm:text-xl">
                    {education.title} <br /> {education.institution}
                  </div>
                  <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                    {education.description}
                  </p>
                </div>
              </div>
            ))}
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex-1 flex flex-col gap-3">
          <Heading>Certifications</Heading>
          <div className="w-full p-4">
            <ul className="list-none space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <GrCertificate className="text-lg text-gray-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-gray-900">{cert.name}</div>
                    <div className="text-gray-700">{cert.issuer}</div>
                    <div className="text-sm text-gray-600">{cert.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
