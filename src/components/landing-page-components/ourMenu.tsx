import Image from "next/image"
import firstMenuItem from '../../assets/menu-item-1.png'
import secondMenuItem from '../../assets/menu-item-2.png'
import thirdMenuItem from '../../assets/menu-item-3.png'
import fourthMenuItem from '../../assets/menu-item-4.png'
import fifthMenuItem from '../../assets/menu-item-5.png'
import sixthMenuItem from '../../assets/menu-item-6.png'
import seventhMenuItem from '../../assets/menu-item-7.png'
import eighthMenuItem from '../../assets/menu-item-8.png'

const products = [
    {
        id: 1,
        name: 'Chips Karrada',
        imageSrc: firstMenuItem,
        imageAlt: "Chips Karrada",
    },
    {
        id: 2,
        name: 'Black Kubba',
        imageSrc: secondMenuItem,
        imageAlt: "Black Kubba",
    },
    {
        id: 3,
        name: 'Smoked Kubba',
        imageSrc: thirdMenuItem,
        imageAlt: "Smoked Kubba",
    },
    {
        id: 4,
        name: 'Gus Taco',
        imageSrc: fourthMenuItem,
        imageAlt: "Gus Taco",
    },
    {
        id: 5,
        name: 'Aroog',
        imageSrc: fifthMenuItem,
        imageAlt: "Aroog",
    },
    {
        id: 6,
        name: 'Yaki Liver',
        imageSrc: sixthMenuItem,
        imageAlt: "Yaki Liver",
    },
    {
        id: 7,
        name: 'Yaki Chicken',
        imageSrc: seventhMenuItem,
        imageAlt: "Yaki Chicken",
    },
    {
        id: 8,
        name: 'Yaki Lamb',
        imageSrc: eighthMenuItem,
        imageAlt: "Yaki Lamb",
    },

]

const navigation = [
    { name: 'Hot Starters', href: '#' , active:true},
    { name: 'Soups', href: '#', active:false },
    { name: 'Salads', href: '#', active:false  },
    { name: 'Main Courses', href: '#', active:false  },
    { name: 'Desserts', href: '#', active:false  },
    { name: 'Drinks', href: '#', active:false  },
]

export default function Ourmenu() {
    return (
        <div className="py-16 sm:py-20 container mx-auto">
             <h2 className="text-2xl text-center font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">Our Menu</h2>
            <div className="hidden md:flex justify-center  gap-x-8 lg:gap-x-12 py-9">
                <>
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm leading-6 text-white active:text-primary  active:underline  active:underline-offset-1 hover:text-primary">
                            {item.name}
                        </a>

                    ))}
                </>
            </div>
            <div className="flex justify-center py-4 md:hidden relative w-full lg:max-w-sm  ">
                <div className=" bg-black w-1/2  p-2.5 no-border rounded-md shadow-sm outline-none">
                <select className=" bg-black text-white ">
                    <>
                        {navigation.map((item) => (
                            <option key={item.name} className="text-sm leading-6 text-white">
                                {item.name}
                            </option>
                        ))}
                    </>
                </select>
                </div>
            </div>
            <div className=" hidden md:grid  gap-x-4 gap-y-10 grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-6">
                {products.map((product) => (
                    <div key={product.id} className="group relative rounded overflow-hidden shadow-md bg-[#292524]">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <Image
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex justify-between p-5">
                            <h3 className="text-base text-white">
                                {product.name}
                            </h3>
                            <p className="text-sm text-primary underline underline-offset-1 hover:text-white hover:cursor-pointer">How is it made?</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex md:hidden overflow-x-auto space-x-8 mt-6">
                {products.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-full rounded shadow-md bg-[#292524]">
                        <div className="aspect-h-1 aspect-w-1 w-full  group-hover:opacity-75 ">
                            <Image
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full"
                            />
                        </div>
                        <div className="flex justify-between p-5">
                            <h3 className="text-base text-white">
                                {product.name}
                            </h3>
                            <p className="text-sm text-primary underline underline-offset-1 hover:text-white hover:cursor-pointer">How is it made?</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
