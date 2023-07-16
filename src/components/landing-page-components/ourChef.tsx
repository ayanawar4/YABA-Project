import Image from "next/image";
import ChefImage from '../../assets/frame-5.png'


export default function Ourchef() {
    return (
        <div className="py-10 lg:py-4 container mx-auto ">
            <div className="flex flex-col items-center lg:flex-row gap-y-16 lg:gap-y-8 lg:gap-x-6">
                <div className="flex flex-col w-full lg:w-1/2 justify-center">
                    <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">Our Chef</h2>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Chef Shaheen, a multi-talented individual who wears many hats in the culinary world. Not only is he a celebrity chef, but he's also an architect, recipe developer, and content creator on social media. Additionally, he is the proud owner of the renowned "YABA" restaurant, which has revolutionized Iraqi cuisine. </p>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Chef Shaheen's culinary journey took him to the prestigious stage of Master Chef UK, where he showcased the flavors of Iraq and the Middle East with a contemporary twist, ultimately making it to the finals. His dishes are meticulously crafted with finesse, bearing his unique creative touch.</p>
                    <p className="mt-6 text-lg leading-8 text-white">
                        To further share his innovative approach to cooking, Chef Shaheen ventured into the world of entrepreneurship and opened his first restaurant, "YABA," in Dubai. Here, visitor have the opportunity to indulge in a fusion of Iraqi culinary delights intertwined with international flavors.
                    </p>
                </div>
                <div className="flex gap-6 justify-center lg:justify-normal w-full lg:w-1/2">
                    <Image
                        src={ChefImage}
                        alt="chef-image"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}
