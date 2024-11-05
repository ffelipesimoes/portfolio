import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { events, volunteeringData } from "@/lib/contents";
import { PackagePlus } from "lucide-react";
import Image from "next/image";

export default function morePage() {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <PackagePlus className="h-5 w-5" />
        More
      </Badge>
      <div className="w-full flex">
        {/* Coluna de Eventos */}
        <div className="w-1/2 p-4 relative">
          <h2 className="text-2xl font-semibold mb-6 text-center">Events</h2>
          {/* Linha do tempo para Eventos */}
          <div className="absolute left-1/2 top-16 bottom-0 w-0.5 bg-gray-300"></div>
          <ul className="space-y-8">
            {events
              .slice(0)
              .reverse()
              .map((item, index) => (
                <li
                  key={index}
                  className={`flex ${
                    index % 2 === 1 ? "justify-start" : "justify-end"
                  } items-center`}
                >
                  <div className="w-1/2 px-4">
                    <div className="max-w-xs">
                      <Image
                        src={item.photoUrl}
                        alt={item.name}
                        className="w-40 h-40 object-cover rounded-md shadow-sm"
                        width={500}
                        height={500}
                      />
                      <div className="mt-2">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Coluna de Voluntariados */}
        <div className="w-1/2 p-4 relative">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Volunteers
          </h2>
          {/* Linha do tempo para Voluntariados */}
          <div className="absolute left-1/2 top-16 bottom-0 w-0.5 bg-gray-300"></div>
          <ul className="space-y-8">
            {volunteeringData.reverse().map((item, index) => (
              <li
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } items-center`}
              >
                <div className="w-1/2 px-4">
                  <div className="max-w-xs">
                    <Image
                      src={item.photo}
                      alt={item.description}
                      className="w-40 h-40 object-cover rounded-md shadow-sm"
                      width={500}
                      height={500}
                    />
                    <div className="mt-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-700">
                        {item.description}
                      </p>
                      <p className="text-sm text-gray-600">{item.period}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
