import Image from "next/image";
import HeroImage from '../assets/hero-image.png'


export default function HeroSection() {

    let header = "Discover a New Dimension in Iraqi Cuisine";
    let sub_header = "We infuse our dishes with a non-traditional approach, adding a unique dimension to Iraqi cuisine. Drawing inspiration from the ancient civilizations of Iraq, our culinary creations serve as a bridge between history and modernity, establishing Yaba as the embodiment of this connection.";

    return (
        <>
            <div className="relative hidden lg:flex">
                    <div className="z-10 pt-14 xl:pt-0 w-1/2">
                        <div className="py-16 xl:py-40 px-8 ">

                                <h1 className="text-4xl font-bold tracking-tight text-white xl:text-6xl">
                                    {header}
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-white">
                                    {sub_header}
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="bg-primary px-6 py-2 text-sm font-semibold text-black"
                                    >
                                        View menu
                                    </a>
                                    <a href="#" className="text-sm font-semibold px-6 py-2 outline outline-primary text-white">
                                        Contact us
                                    </a>
                                </div>
                        </div>
                    </div>
                <div className="absolute inset-y-0 right-0 w-1/2">
                    <Image
                        className="w-full"
                        src={HeroImage}
                        alt=""
                    />
                </div>
            </div>

            <div className="relative isolate overflow-hidden block lg:hidden">
                <Image
                    className="absolute inset-0 brightness-50 h-full w-full"
                    src={HeroImage}
                    alt=""
                />
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <div className="relative px-6 py-16 sm:py-44">
                            <div className="mx-auto max-w-2xl">

                                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                                    {header}
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-white">
                                    {sub_header}
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="bg-primary px-6 py-2 text-sm font-semibold text-black"
                                    >
                                        View menu
                                    </a>
                                    <a href="#" className="text-sm font-semibold px-6 py-2 outline outline-primary text-white">
                                        Contact us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}
