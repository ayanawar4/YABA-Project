import Image from "next/image"
import { MenuProductType } from "@/constants/menuProducts"
import { useState } from "react";
import Link from "next/link";

const navigation = [
    { value: "hotSetters", name: 'Hot Starters', href: '#' },
    { value: "soups", name: 'Soups', href: '#' },
    { value: "salads", name: 'Salads', href: '#' },
    { value: "mainCourses", name: 'Main Courses', href: '#' },
    { value: "desserts", name: 'Desserts', href: '#' },
    { value: "drinks", name: 'Drinks', href: '#' },
]

export default function Ourmenu({ products }: { products: MenuProductType }) {
    const menuItems = products;
    const [category, setCategory] = useState("hotSetters");



    return (
        <div className="py-16 sm:py-20 container mx-auto">
            <h2 className="text-2xl text-center font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">Our Menu</h2>
            <div className="hidden md:flex justify-center  gap-x-8 lg:gap-x-12 py-9">
                <>
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} passHref className=" text-white" >
                            <p
                                className={`text-sm leading-6 ${item.value === category && 'text-primary underline underline-offset-1'
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCategory(item.value);
                                }}
                            >
                                {item.name}
                            </p>
                        </Link>

                    ))}
                </>
            </div>
            <div className="flex justify-center py-4 md:hidden relative w-full lg:max-w-sm  ">
                <div className=" bg-black w-1/2  p-2.5 no-border rounded-md shadow-sm outline-none">
                    <select className=" bg-black text-white" onChange={(e) => setCategory(e.target.value)}>
                            {navigation.map((item) => (
                                <option key={item.name} value={item.value} className="text-sm leading-6 text-white" >
                                    {item.name}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
            <div className=" hidden md:flex flex-col space-y-7">
                <div className=" grid  gap-x-4 gap-y-10 grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-6">
                    {menuItems[category].map((product) => (
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
                <div className="flex justify-center ">
                    <a href="/menu" className="text-center text-sm font-semibold px-6 py-2 outline outline-primary text-white hover:text-primary hover:bg-black hover:outline-white">
                        View all
                    </a>
                </div>
            </div>
            <div className=" flex md:hidden flex-col space-y-7">
                <div className="flex overflow-x-auto space-x-8 mt-6">
                    {menuItems[category].map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-full rounded shadow-md bg-[#292524]">
                            <div className="aspect-h-1 aspect-w-1 w-full  group-hover:opacity-75 ">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover"
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
                <div className="flex justify-center ">
                    <a href="/menu" className="text-center text-sm font-semibold px-6 py-2 outline outline-primary text-white hover:text-primary hover:bg-black hover:outline-white">
                        View all
                    </a>
                </div>
            </div>
        </div>
    )
}
