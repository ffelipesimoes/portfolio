import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/ffelipesimoes", icon: <Linkedin /> },
    { name: "Twitter", link: "https://twitter.com/lipotrovisk", icon: <Twitter /> },
    { name: "Email", link: "mailto:felipe.simoes@etherglobalassets.com.br", icon: <Mail /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
