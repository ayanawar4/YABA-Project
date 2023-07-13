import Image from "next/image";
import firstFrame from '../assets/frame-1.png'
import secondFrame from '../assets/frame-2.png'
import thirdFrame from '../assets/frame-3.png'
import fourthFrame from '../assets/frame-4.png'


export default function Aboutus() {

  const title = "Our Story"
  const content = "Yaba made its debut as the world's pioneering modern Iraqi restaurant In 2022. With our innovative approach, we reimagine traditional Iraqi cuisine into a multi-dimensional culinary experience. Inspired by the ancient civilizations of Iraq, our culinary creations pay homage to the rich heritage of the region. By seamlessly blending history with contemporary elements, Yaba emerges as a remarkable bridge connecting the realms of antiquity and modernity. "
  
  return (
    <div className="py-10 lg:py-0 ">
      <div className="flex flex-col items-center lg:flex-row gap-y-16 lg:gap-y-8 lg:gap-x-6">
      <div className="flex lg:hidden flex-col w-full  justify-center">
      <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-white">{content}</p>
        </div>
        <div className="flex gap-6 justify-center lg:justify-normal w-full lg:w-1/2">
        <div className="space-y-2 lg:space-y-5">
            <Image
              src={firstFrame}
              alt="frame-1"
              className="w-full"
            />
            <Image
              src={thirdFrame}
              alt="frame-3"
              className="w-full"
            />
          </div>

          <div className="lg:py-6 space-y-2 lg:space-y-5">
          <Image
              src={secondFrame}
              alt="frame-2"
              className="w-full"
            />
            <Image
              src={fourthFrame}
              alt="frame-4"
              className="w-full"
            />
      
          </div>

        </div>
        <div className="hidden lg:flex flex-col  w-full lg:w-1/2 lg:pb-8 justify-center">
        <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-white">{content}</p>
        </div>

      </div>
    </div>
  )
}
