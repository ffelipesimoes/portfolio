import logo from "../../public/foto.jpg";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
        <div className="flex justify-center items-center p-4">
          <div className="border-2 border-gray-300 rounded-full overflow-hidden">
            <Image
              src={logo}
              alt="Profile Picture"
              loading="eager"
              priority
              height={500}
              width={500}
            />
          </div>
        </div>
        </>
    )
}
export default HeroImage