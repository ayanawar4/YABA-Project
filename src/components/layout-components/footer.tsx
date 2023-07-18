import Image from "next/image"
import Map from '../../assets/map.png';

const navigation = {
    solutions: [
        { name: 'Instagram', href: '#' },
        { name: 'Facebook', href: '#' },
    ],
    support: [
        { name: 'Menu', href: '#' },
        { name: 'Our Story', href: '#' },
        { name: 'Our Chef', href: '#' },
    ],
    company: [
        { name: 'Contact us', href: '#' },
        { name: 'info@yabarest.com', href: '#' },
        { name: '+971 58 583 0332', href: '#' },
    ],
    legal: [
        { name: 'Location', href: '#' },
        { name: 'Dubai, UAE', href: '#' },
        { name: 'Jumeirah 1, Wasl Vita Mall, shop no. S31', href: '#' },
    ],

}

export default function Footer() {

    const address = '1600 Amphitheatre Parkway, Mountain View, CA';


    return (
        <footer className="bg-[#0C0A09] px-8 sm:px-0" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="flex sm:hidden pt-7">
                <a href="/" className="p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img src="./logo.png" alt="Yaba-Logo"  />
                </a>
            </div>
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-3 xl:gap-x-8 sm:p-6 xl:px-8 ">
                <div className="hidden sm:flex xl:flex-1">
                    <a href="/" className="lg:-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img src="./logo.png" alt="Yaba-Logo"  />
                    </a>
                </div>
                <ul role="list" className="-mt-2 sm:-mt-6 space-y-2 sm:space-y-6">
                    {navigation.solutions.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-xs xl:text-sm xl:leading-6 text-white">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul role="list" className="mt-6 space-y-2 sm:space-y-6">
                    {navigation.support.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-xs xl:text-sm xl:leading-6 text-white">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul role="list" className="mt-6 space-y-2 sm:space-y-6">
                    {navigation.company.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className=" text-xs xl:text-sm xl:leading-6 text-white">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul role="list" className="hidden sm:block mt-6 space-y-6">
                    {navigation.legal.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-xs xl:text-sm xl:leading-6 text-white">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>


                <Image
                    src={Map}
                    alt="Map"
                    className="hidden xl:block"
                />
            </div>


            <ul role="list" className="block sm:hidden mt-6 space-y-2">
                {navigation.legal.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="text-xs text-white">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center sm:justify-normal xl:hidden pt-3 sm:pt-0 md:px-5">
                <Image
                    src={Map}
                    alt="Map"
                />
            </div>
            <div className="mt-4 sm:mt-8 border-t border-white/10 pt-2 sm:pt-8">
                <p className="mt-4 text-sm leading-5 text-white md:order-1 text-center md:mt-0 pb-5">
                    Copyright &copy; 2023 YABA. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
