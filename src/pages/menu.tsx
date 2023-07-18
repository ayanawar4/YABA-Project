import Layout from "./layout"
import Image from "next/image"
import { useState } from "react"
import firstMenuItem from '../assets/menu-item-1.png'
import secondMenuItem from '../assets/menu-item-2.png'
import thirdMenuItem from '../assets/menu-item-3.png'
import fourthMenuItem from '../assets/menu-item-4.png'
import fifthMenuItem from '../assets/menu-item-5.png'
import sixthMenuItem from '../assets/menu-item-6.png'
import seventhMenuItem from '../assets/menu-item-7.png'
import eighthMenuItem from '../assets/menu-item-8.png'

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

export default function Menu() {

    const [filteredList, setFilteredList] = useState(products);

    const filterBySearch = (event: any) => {
        const query = event.target.value;
        var updatedList = [...products];
        updatedList = updatedList.filter((item: any) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updatedList);
    };

    return (
        <Layout>
            <div className="mt-8 py-16 sm:py-20 container mx-auto px-8">
                <h2 className="text-2xl text-center font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">Our Menu</h2>
                <div className="flex justify-center py-5">
                    <div className="w-1/2">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Search Menu..." onChange={filterBySearch} />
                        </div>
                    </div>
                </div>
                <div className=" grid  gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-6">
                    {filteredList.length === 0 ?

                        <h3 className="flex justify-center text-base text-white">
                            No items found
                        </h3>
                        :

                        filteredList.map((product) => (
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
            </div>
        </Layout>

    )
}
